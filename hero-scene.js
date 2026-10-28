(function () {
    'use strict';
    const host = document.getElementById('hero-scene');
    const hero = document.querySelector('.hero');
    if (!host || !hero) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = navigator.connection || {};
    if (conn.saveData) return;

    const loadThree = () => new Promise((resolve, reject) => {
        if (window.THREE) return resolve();
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js';
        s.async = true; s.onload = resolve; s.onerror = reject;
        document.head.appendChild(s);
    });

    const BAYS_X = 4, BAYS_Z = 3, BAY = 3.2, FLOORS = 7, FH = 2.4;
    const W = BAYS_X * BAY, D = BAYS_Z * BAY, H = FLOORS * FH;
    const SCAN_FROM = -1.5, SCAN_TO = H + 2.5, SCAN_SECONDS = 7.5, HOLD_SECONDS = 1.6, FADE_SECONDS = 0.9;

    function structure() {
        const pos = [], kind = [];
        const seg = (a, b, k) => { pos.push(a[0], a[1], a[2], b[0], b[1], b[2]); kind.push(k, k); };
        const gx = (i) => -W / 2 + i * BAY;
        const gz = (k) => -D / 2 + k * BAY;

        for (let i = 0; i <= BAYS_X; i++) for (let k = 0; k <= BAYS_Z; k++) seg([gx(i), 0, gz(k)], [gx(i), H, gz(k)], 0);
        for (let f = 0; f <= FLOORS; f++) {
            const y = f * FH;
            for (let k = 0; k <= BAYS_Z; k++) seg([gx(0), y, gz(k)], [gx(BAYS_X), y, gz(k)], 0);
            for (let i = 0; i <= BAYS_X; i++) seg([gx(i), y, gz(0)], [gx(i), y, gz(BAYS_Z)], 0);
        }
        for (let f = 0; f < FLOORS; f += 2) {
            for (let i = 0; i < BAYS_X; i += 2) {
                const y0 = f * FH, y1 = (f + 1) * FH;
                seg([gx(i), y0, gz(0)], [gx(i + 1), y1, gz(0)], 0);
                seg([gx(i + 1), y0, gz(0)], [gx(i), y1, gz(0)], 0);
                seg([gx(i), y0, gz(BAYS_Z)], [gx(i + 1), y1, gz(BAYS_Z)], 0);
                seg([gx(i + 1), y0, gz(BAYS_Z)], [gx(i), y1, gz(BAYS_Z)], 0);
            }
        }

        const r = 0.14;
        for (let i = 0; i <= BAYS_X; i++) {
            for (let k = 0; k <= BAYS_Z; k++) {
                const cx = gx(i), cz = gz(k);
                [[-r, -r], [r, -r], [r, r], [-r, r]].forEach(([dx, dz]) => seg([cx + dx, 0.05, cz + dz], [cx + dx, H, cz + dz], 1));
                for (let y = 0.3; y < H; y += 0.55) {
                    seg([cx - r, y, cz - r], [cx + r, y, cz - r], 1);
                    seg([cx + r, y, cz - r], [cx + r, y, cz + r], 1);
                    seg([cx + r, y, cz + r], [cx - r, y, cz + r], 1);
                    seg([cx - r, y, cz + r], [cx - r, y, cz - r], 1);
                }
            }
        }
        return { pos: new Float32Array(pos), kind: new Float32Array(kind) };
    }

    function joints() {
        const pos = [];
        for (let i = 0; i <= BAYS_X; i++) for (let k = 0; k <= BAYS_Z; k++) for (let f = 0; f <= FLOORS; f++) {
            pos.push(-W / 2 + i * BAY, f * FH, -D / 2 + k * BAY);
        }
        return new Float32Array(pos);
    }

    function ground() {
        const pos = [], R = 36;
        for (let v = -R; v <= R; v += BAY) {
            pos.push(-R, 0, v, R, 0, v, v, 0, -R, v, 0, R);
        }
        return new Float32Array(pos);
    }

    const LINE_VERT = `
        attribute float aKind;
        varying float vY; varying float vKind; varying float vDepth;
        void main() {
            vY = position.y; vKind = aKind;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vDepth = -mv.z;
            gl_Position = projectionMatrix * mv;
        }`;
    const LINE_FRAG = `
        uniform float uScan; uniform float uLit; uniform float uRadius; uniform vec3 uCyan; uniform vec3 uAmber;
        varying float vY; varying float vKind; varying float vDepth;
        void main() {
            float d = uScan - vY;
            float read = smoothstep(0.0, 0.6, d) * uLit;
            float flash = exp(-abs(d - 0.2) * 2.6) * step(-0.3, d) * uLit;
            float a = mix(0.14, vKind > 0.5 ? 0.6 : 0.9, read);
            vec3 col = mix(vKind > 0.5 ? vec3(0.55, 0.85, 1.0) : uCyan, uAmber, clamp(flash, 0.0, 1.0));
            a = max(a, flash * 0.95);
            float fog = clamp(1.45 - vDepth / (uRadius * 1.8), 0.3, 1.0);
            gl_FragColor = vec4(col, a * fog);
        }`;
    const POINT_VERT = `
        uniform float uPx;
        varying float vY; varying float vDepth;
        void main() {
            vY = position.y;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vDepth = -mv.z;
            gl_PointSize = clamp(300.0 * uPx / vDepth, 2.0, 14.0);
            gl_Position = projectionMatrix * mv;
        }`;
    const POINT_FRAG = `
        uniform float uScan; uniform float uLit; uniform float uRadius; uniform vec3 uCyan; uniform vec3 uAmber;
        varying float vY; varying float vDepth;
        void main() {
            float r = length(gl_PointCoord - 0.5);
            if (r > 0.5) discard;
            float d = uScan - vY;
            float read = smoothstep(0.0, 0.4, d) * uLit;
            float flash = exp(-abs(d - 0.1) * 2.2) * step(-0.3, d) * uLit;
            vec3 col = mix(uCyan, uAmber, clamp(flash, 0.0, 1.0));
            float a = (0.15 + 0.85 * read) * (1.0 - smoothstep(0.25, 0.5, r));
            a = max(a, flash * (1.0 - smoothstep(0.2, 0.5, r)));
            gl_FragColor = vec4(col, a * clamp(1.45 - vDepth / (uRadius * 1.8), 0.3, 1.0));
        }`;
    const GROUND_VERT = `
        varying vec2 vXZ;
        void main() {
            vXZ = position.xz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`;
    const GROUND_FRAG = `
        uniform vec3 uCyan;
        varying vec2 vXZ;
        void main() {
            float a = (1.0 - smoothstep(6.0, 36.0, length(vXZ))) * 0.22;
            gl_FragColor = vec4(uCyan, a);
        }`;

    function build() {
        const THREE = window.THREE;
        const cyan = new THREE.Color(0x5bc8ff), amber = new THREE.Color(0xff9b3d);
        const uniforms = {
            uScan: { value: SCAN_FROM }, uLit: { value: 1 }, uRadius: { value: 56 },
            uCyan: { value: new THREE.Vector3(cyan.r, cyan.g, cyan.b) },
            uAmber: { value: new THREE.Vector3(amber.r, amber.g, amber.b) },
            uPx: { value: 1 }
        };
        const mat = (vertex, fragment) => new THREE.ShaderMaterial({
            uniforms, vertexShader: vertex, fragmentShader: fragment,
            transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
        });

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
        renderer.setClearColor(0x000000, 0);
        host.appendChild(renderer.domElement);
        renderer.domElement.setAttribute('aria-hidden', 'true');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 500);

        const s = structure();
        const frame = new THREE.BufferGeometry();
        frame.setAttribute('position', new THREE.BufferAttribute(s.pos, 3));
        frame.setAttribute('aKind', new THREE.BufferAttribute(s.kind, 1));
        scene.add(new THREE.LineSegments(frame, mat(LINE_VERT, LINE_FRAG)));

        const nodes = new THREE.BufferGeometry();
        nodes.setAttribute('position', new THREE.BufferAttribute(joints(), 3));
        scene.add(new THREE.Points(nodes, mat(POINT_VERT, POINT_FRAG)));

        const floor = new THREE.BufferGeometry();
        floor.setAttribute('position', new THREE.BufferAttribute(ground(), 3));
        scene.add(new THREE.LineSegments(floor, mat(GROUND_VERT, GROUND_FRAG)));

        const scanGroup = new THREE.Group();
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(W + 3, D + 3),
            new THREE.MeshBasicMaterial({ color: amber, transparent: true, opacity: 0.07, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
        );
        plane.rotation.x = -Math.PI / 2;
        const ring = new THREE.LineLoop(
            new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(-(W + 3) / 2, 0, -(D + 3) / 2), new THREE.Vector3((W + 3) / 2, 0, -(D + 3) / 2),
                new THREE.Vector3((W + 3) / 2, 0, (D + 3) / 2), new THREE.Vector3(-(W + 3) / 2, 0, (D + 3) / 2)
            ]),
            new THREE.LineBasicMaterial({ color: amber, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false })
        );
        scanGroup.add(plane, ring);
        scene.add(scanGroup);

        const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
        window.addEventListener('pointermove', (e) => {
            mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
        }, { passive: true });

        let width = 1, height = 1;
        const resize = () => {
            width = host.clientWidth || 1; height = host.clientHeight || 1;
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            renderer.setPixelRatio(dpr);
            renderer.setSize(width, height, false);
            renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
            uniforms.uPx.value = dpr * height / 900;
            camera.aspect = width / height;
            if (width >= 980) camera.setViewOffset(width, height, -width * 0.19, height * 0.07, width, height);
            else camera.setViewOffset(width, height, 0, Math.max(0, height / 2 - 290), width, height);
            camera.updateProjectionMatrix();
        };

        const place = (t) => {
            mouse.x += (mouse.tx - mouse.x) * 0.04;
            mouse.y += (mouse.ty - mouse.y) * 0.04;
            const angle = 0.7 + t * 0.05 + mouse.x * 0.18;
            const radius = width >= 980 ? 56 : Math.min(150, Math.max(56, height / 12.2));
            uniforms.uRadius.value = radius;
            camera.position.set(Math.sin(angle) * radius, 9 - mouse.y * 1.5, Math.cos(angle) * radius);
            camera.lookAt(0, H * 0.5, 0);
        };

        const cycle = SCAN_SECONDS + HOLD_SECONDS + FADE_SECONDS;
        const scanAt = (t) => {
            const c = t % cycle;
            if (c < SCAN_SECONDS) {
                const p = c / SCAN_SECONDS;
                uniforms.uScan.value = SCAN_FROM + (SCAN_TO - SCAN_FROM) * (p * p * (3 - 2 * p));
                uniforms.uLit.value = 1;
            } else if (c < SCAN_SECONDS + HOLD_SECONDS) {
                uniforms.uScan.value = SCAN_TO;
                uniforms.uLit.value = 1;
            } else {
                uniforms.uScan.value = SCAN_TO;
                uniforms.uLit.value = 1 - (c - SCAN_SECONDS - HOLD_SECONDS) / FADE_SECONDS;
            }
            scanGroup.position.y = uniforms.uScan.value;
            scanGroup.visible = uniforms.uScan.value < H + 1.5 && c < SCAN_SECONDS + HOLD_SECONDS;
        };

        const draw = (t) => { scanAt(t); place(t); renderer.render(scene, camera); };

        resize();
        let onResize = resize;
        new ResizeObserver(() => onResize()).observe(host);

        if (reduced) {
            uniforms.uScan.value = SCAN_TO; uniforms.uLit.value = 1; scanGroup.visible = false;
            place(0); renderer.render(scene, camera);
            onResize = () => { resize(); place(0); renderer.render(scene, camera); };
            host.classList.add('is-on');
            return;
        }

        let raf = 0, visible = true, t0 = performance.now();
        const frame_ = (now) => {
            raf = 0;
            if (!visible || document.hidden) return;
            draw((now - t0) / 1000);
            raf = requestAnimationFrame(frame_);
        };
        const kick = () => { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame_); };
        new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; kick(); }, { threshold: 0.02 }).observe(hero);
        document.addEventListener('visibilitychange', kick);
        draw(0);
        host.classList.add('is-on');
        kick();
    }

    const boot = () => loadThree().then(build).catch(() => {});
    if ('requestIdleCallback' in window) requestIdleCallback(boot, { timeout: 2500 });
    else setTimeout(boot, 1200);
})();
