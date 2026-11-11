import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const SITE = 'https://www.kairosaitech.com';
export const LASTMOD = '2026-11-12';

export const EN = { code: 'en', dir: '', html: 'en', og: 'en_US' };
export const LOCALES = [
  { code: 'zh-TW', dir: 'zh-tw', html: 'zh-Hant', og: 'zh_TW', label: '繁中' },
  { code: 'ja', dir: 'ja', html: 'ja', og: 'ja_JP', label: '日本' },
  { code: 'es', dir: 'es', html: 'es', og: 'es_ES', label: 'ES' },
  { code: 'it', dir: 'it', html: 'it', og: 'it_IT', label: 'IT' },
  { code: 'fr', dir: 'fr', html: 'fr', og: 'fr_FR', label: 'FR' },
  { code: 'ko', dir: 'ko', html: 'ko', og: 'ko_KR', label: '한국' },
  { code: 'de', dir: 'de', html: 'de', og: 'de_DE', label: 'DE' },
];
export const ALL = [EN, ...LOCALES];

export const urlFor = (loc) => `${SITE}/${loc.dir ? `${loc.dir}/` : ''}`;

const META = {
  'zh-TW': {
    title: 'SetTime AI 鋼筋估算 | Kairos.ai 優時科技 — 營建與 AEC 的 AI 解決方案',
    description:
      'Kairos.ai（優時科技）為 AEC 與營建產業打造 AI。旗下產品 SetTime（原 iTech）將施工圖自動轉為精準的鋼筋估算與斷料彎曲表，詳見 settime.kairosaitech.com。',
  },
  ja: {
    title: 'SetTime AI 鉄筋積算 | Kairos.ai 優時科技 — 建設・AEC 向け AI',
    description:
      'Kairos.ai（優時科技）は AEC・建設業界向けの AI を開発しています。製品の SetTime（旧 iTech）は施工図から正確な鉄筋数量と曲げ加工表を自動で作成します。詳細は settime.kairosaitech.com。',
  },
  es: {
    title: 'SetTime: estimación de armaduras con IA | Kairos.ai 優時科技 — IA para AEC y construcción',
    description:
      'Kairos.ai (優時科技) desarrolla IA para el sector AEC y la construcción. Su producto SetTime (antes iTech) convierte planos de construcción en mediciones de armaduras precisas y listas de doblado; más en settime.kairosaitech.com.',
  },
  it: {
    title: "SetTime: stima dei ferri d'armatura con IA | Kairos.ai 優時科技 — IA per AEC ed edilizia",
    description:
      "Kairos.ai (優時科技) sviluppa IA per il settore AEC e delle costruzioni. Il suo prodotto SetTime (ex iTech) trasforma i disegni di cantiere in stime precise dei ferri d'armatura e in distinte di piegatura; vedi settime.kairosaitech.com.",
  },
  fr: {
    title: "SetTime : estimation d'armatures par IA | Kairos.ai 優時科技 — IA pour l'AEC et la construction",
    description:
      "Kairos.ai (優時科技) développe de l'IA pour l'AEC et la construction. Son produit SetTime (ex-iTech) transforme les plans de construction en métrés d'armatures précis et en nomenclatures de façonnage ; voir settime.kairosaitech.com.",
  },
  ko: {
    title: 'SetTime AI 철근 물량 산출 | Kairos.ai 優時科技 — AEC·건설을 위한 AI',
    description:
      'Kairos.ai(優時科技)는 AEC·건설 산업을 위한 AI를 만듭니다. 제품 SetTime(구 iTech)은 시공도면을 정확한 철근 물량 산출과 절단·가공표로 자동 변환합니다. settime.kairosaitech.com에서 확인하세요.',
  },
  de: {
    title: 'SetTime KI-Bewehrungsermittlung | Kairos.ai 優時科技 — KI für AEC und Bau',
    description:
      'Kairos.ai (優時科技) entwickelt KI für die AEC- und Baubranche. Das Produkt SetTime (früher iTech) wandelt Bauzeichnungen in präzise Bewehrungsmengen und Biegelisten um; mehr unter settime.kairosaitech.com.',
  },
};

function extractObject(src, marker) {
  const start = src.indexOf(marker);
  if (start < 0) throw new Error(`${marker} not found`);
  const open = start + marker.length - 1;
  let depth = 0;
  let quote = null;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = null;
    } else if (c === '"' || c === "'" || c === '`') {
      quote = c;
    } else if (c === '{') {
      depth++;
    } else if (c === '}' && --depth === 0) {
      return vm.runInNewContext(`(${src.slice(open, i + 1)})`);
    }
  }
  throw new Error(`${marker} object is not closed`);
}

export function readTranslations(script) {
  const base = extractObject(script, 'const translations = {');
  const extra = extractObject(script, 'const extraI18n = {');
  const merged = {};
  for (const loc of ALL) merged[loc.code] = { ...base[loc.code], ...(extra[loc.code] || {}) };
  return merged;
}

export const escapeHtml = (v) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (v) => escapeHtml(v).replace(/"/g, '&quot;');

export function forEachI18n(html, visit) {
  const open = /<([a-zA-Z][\w-]*)\b[^<>]*?\sdata-i18n="([^"]+)"[^<>]*>/g;
  let out = '';
  let last = 0;
  let m;
  while ((m = open.exec(html))) {
    const tag = m[1];
    const innerStart = m.index + m[0].length;
    const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
    re.lastIndex = innerStart;
    let depth = 1;
    let close = -1;
    let r;
    while ((r = re.exec(html))) {
      depth += r[1] ? -1 : 1;
      if (depth === 0) {
        close = r.index;
        break;
      }
    }
    if (close < 0) throw new Error(`unclosed <${tag}> for ${m[2]}`);
    out += html.slice(last, innerStart) + visit(m[2], html.slice(innerStart, close));
    last = close;
    open.lastIndex = close;
  }
  return out + html.slice(last);
}

function translateAttrs(html, t) {
  const pairs = [
    ['data-i18n-placeholder', 'placeholder'],
    ['data-i18n-aria-label', 'aria-label'],
  ];
  let out = html;
  for (const [marker, attr] of pairs) {
    const tag = new RegExp(`<[a-zA-Z][\\w-]*\\b[^<>]*?\\s${marker}="([^"]+)"[^<>]*>`, 'g');
    out = out.replace(tag, (whole, key) => {
      const v = t[key];
      if (!v) return whole;
      return whole.replace(new RegExp(`(\\s${attr}=")[^"]*(")`), (_, a, b) => `${a}${escapeAttr(v)}${b}`);
    });
  }
  return out;
}

function setMeta(html, attr, name, value) {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`meta ${name} not found`);
  return html.replace(re, (_, a, b) => `${a}${escapeAttr(value)}${b}`);
}

function replaceOnce(html, from, to) {
  if (!html.includes(from)) throw new Error(`pattern not found: ${from.slice(0, 60)}`);
  return html.replace(from, () => to);
}

function hreflangBlock() {
  const lines = ALL.map((l) => `    <link rel="alternate" hreflang="${l.html}" href="${urlFor(l)}">`);
  lines.push(`    <link rel="alternate" hreflang="x-default" href="${urlFor(EN)}">`);
  return lines.join('\n');
}

const HREFLANG_RE = /( {4}<link rel="alternate" hreflang="[^"]+" href="[^"]+">\n)+/;
const OG_LOCALE_RE = / {4}<meta property="og:locale" content="[^"]*">(\n {4}<meta property="og:locale:alternate" content="[^"]*">)+/;

function localeMetaLines(loc) {
  return [loc, ...ALL.filter((l) => l.code !== loc.code)]
    .map((l, i) => `    <meta property="og:locale${i ? ':alternate' : ''}" content="${l.og}">`)
    .join('\n');
}

function markActiveOption(html, loc) {
  let out = html.replace(/(<a class="lang-option)( active)?(" data-lang=")/g, '$1$3');
  out = out.replace(new RegExp(`(<a class="lang-option)(" data-lang="${loc.code}")`), '$1 active$2');
  return out;
}

export function buildPage(src, translations, loc) {
  const t = translations[loc.code];
  const meta = META[loc.code];
  let html = forEachI18n(src, (key, inner) => {
    const v = t[key];
    return v ? escapeHtml(v) : inner;
  });
  html = translateAttrs(html, t);
  html = replaceOnce(html, '<html lang="en" data-page-lang="en">', `<html lang="${loc.html}" data-page-lang="${loc.code}">`);
  html = html
    .replace(/(href|src|poster)="(?![a-z][a-z0-9+.-]*:|\/|#)([^"]+)"/gi, '$1="/$2"')

  html = replaceOnce(
    html,
    '<link rel="canonical" id="canonicalLink" href="https://www.kairosaitech.com/">',
    `<link rel="canonical" id="canonicalLink" href="${urlFor(loc)}">`,
  );
  html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(meta.title)}</title>`);
  html = setMeta(html, 'name', 'title', meta.title);
  html = setMeta(html, 'name', 'description', meta.description);
  html = setMeta(html, 'property', 'og:title', meta.title);
  html = setMeta(html, 'property', 'og:description', meta.description);
  html = setMeta(html, 'property', 'og:url', urlFor(loc));
  html = setMeta(html, 'name', 'twitter:title', meta.title);
  html = setMeta(html, 'name', 'twitter:description', meta.description);
  html = setMeta(html, 'name', 'twitter:url', urlFor(loc));
  html = html.replace(OG_LOCALE_RE, () => localeMetaLines(loc));
  html = html.replace(HREFLANG_RE, () => `${hreflangBlock()}\n`);
  html = html.replace(
    /("@id": "https:\/\/www\.kairosaitech\.com\/#webpage",\s*"url": ")[^"]*(")/,
    (_, a, b) => `${a}${urlFor(loc)}${b}`,
  );
  html = html.replace(
    /("@id": "https:\/\/www\.kairosaitech\.com\/#webpage"[\s\S]*?"inLanguage": ")[^"]*(")/,
    (_, a, b) => `${a}${loc.html}${b}`,
  );
  html = markActiveOption(html, loc);
  const label = loc.label;
  html = html.replace(/(<span id="currentLang">)[^<]*(<\/span>)/, (_, a, b) => `${a}${label}${b}`);
  return html;
}

export function buildRoot(src) {
  let html = src.replace(/<html lang="en"( data-page-lang="en")?>/, '<html lang="en" data-page-lang="en">');
  html = html.replace(HREFLANG_RE, () => `${hreflangBlock()}\n`);
  return html;
}

export function buildSitemap(existing) {
  const video = existing.match(/ {8}<video:video>[\s\S]*?<\/video:video>\n/);
  const alternates = [
    ...ALL.map((l) => `        <xhtml:link rel="alternate" hreflang="${l.html}" href="${urlFor(l)}"/>`),
    `        <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(EN)}"/>`,
  ].join('\n');
  const entry = (loc) => `    <url>
        <loc>${urlFor(loc)}</loc>
        <lastmod>${LASTMOD}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${loc.code === 'en' ? '1.0' : '0.9'}</priority>
${loc.code === 'en' && video ? video[0] : ''}${alternates}
    </url>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

${ALL.map(entry).join('\n\n')}
</urlset>
`;
}

export function buildAll() {
  const src = readFileSync(join(ROOT, 'index.html'), 'utf8');
  const script = readFileSync(join(ROOT, 'script.js'), 'utf8');
  const sitemap = readFileSync(join(ROOT, 'sitemap.xml'), 'utf8');
  const translations = readTranslations(script);
  const root = buildRoot(src);
  const files = new Map();
  files.set('index.html', root);
  for (const loc of LOCALES) files.set(`${loc.dir}/index.html`, buildPage(root, translations, loc));
  files.set('sitemap.xml', buildSitemap(sitemap));
  return files;
}

function main() {
  const check = process.argv.includes('--check');
  const stale = [];
  for (const [rel, content] of buildAll()) {
    const path = join(ROOT, rel);
    const current = existsSync(path) ? readFileSync(path, 'utf8') : null;
    if (current === content) continue;
    if (check) {
      stale.push(rel);
    } else {
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, content);
      console.log(`wrote ${rel}`);
    }
  }
  if (stale.length) {
    console.error(`stale generated files (run: node scripts/build-locales.mjs):\n  ${stale.join('\n  ')}`);
    process.exit(1);
  }
  if (check) console.log('generated locale pages are up to date');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
