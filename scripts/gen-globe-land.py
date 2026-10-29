import json, sys, urllib.request

URL = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-110m.json"
STEP = 2
OUT = sys.argv[1] if len(sys.argv) > 1 else "data/globe-land.json"

topo = json.load(urllib.request.urlopen(URL))
sx, sy = topo["transform"]["scale"]
tx, ty = topo["transform"]["translate"]

arcs = []
for arc in topo["arcs"]:
    x = y = 0
    pts = []
    for dx, dy in arc:
        x += dx
        y += dy
        pts.append((x * sx + tx, y * sy + ty))
    arcs.append(pts)


def ring(indices):
    pts = []
    for i in indices:
        a = arcs[i] if i >= 0 else arcs[~i][::-1]
        pts.extend(a if not pts else a[1:])
    return pts


polys = []
for geom in topo["objects"]["land"]["geometries"]:
    parts = geom["arcs"] if geom["type"] == "MultiPolygon" else [geom["arcs"]]
    for poly in parts:
        polys.append([ring(r) for r in poly])


def inside(px, py, rings):
    hit = False
    for r in rings:
        j = len(r) - 1
        for i in range(len(r)):
            xi, yi = r[i]
            xj, yj = r[j]
            if (yi > py) != (yj > py) and px < (xj - xi) * (py - yi) / (yj - yi) + xi:
                hit = not hit
            j = i
    return hit


boxes = [(min(p[0] for r in rings for p in r), max(p[0] for r in rings for p in r),
          min(p[1] for r in rings for p in r), max(p[1] for r in rings for p in r)) for rings in polys]

rows = []
for lat in range(90 - STEP // 2, -90, -STEP):
    bits = ""
    for lon in range(-180 + STEP // 2, 180, STEP):
        land = any(b[0] <= lon <= b[1] and b[2] <= lat <= b[3] and inside(lon, lat, polys[k]) for k, b in enumerate(boxes))
        bits += "1" if land else "0"
    rows.append("%x" % int("1" + bits, 2))

json.dump({"step": STEP, "rows": rows}, open(OUT, "w"), separators=(",", ":"))
print(OUT, len(rows), "rows")
