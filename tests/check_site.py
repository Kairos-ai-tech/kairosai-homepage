#!/usr/bin/env python3
"""Structural checks for the static site (no build step, so this is the test suite).
Run: python3 tests/check_site.py
"""
import json
import re
import sys
import xml.dom.minidom as minidom
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
failures = []


def check(name, condition):
    print(f"[{'PASS' if condition else 'FAIL'}] {name}")
    if not condition:
        failures.append(name)


html = (ROOT / "index.html").read_text(encoding="utf-8")

# JSON-LD blocks must be valid JSON (Organization, ProfessionalService, WebSite,
# BreadcrumbList, FAQPage, ItemList schemas that AEO/rich-results depend on).
ld_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
check("index.html has JSON-LD blocks", len(ld_blocks) > 0)
for i, block in enumerate(ld_blocks):
    try:
        json.loads(block)
        ok = True
    except json.JSONDecodeError as e:
        ok = False
        print(f"    JSON-LD block {i}: {e}")
    check(f"JSON-LD block {i} is valid JSON", ok)

# sitemap.xml must be well-formed XML.
try:
    minidom.parse(str(ROOT / "sitemap.xml"))
    ok = True
except Exception as e:
    ok = False
    print(f"    sitemap.xml: {e}")
check("sitemap.xml is well-formed XML", ok)

# robots.txt sanity.
robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
check("robots.txt declares a Sitemap", "Sitemap:" in robots)
check("robots.txt has a User-agent rule", "User-agent:" in robots)

# Every in-page #anchor href must resolve to a real element id (catches a new
# section being linked before its id exists, or an id being renamed/removed).
ids = set(re.findall(r'\bid="([^"]+)"', html))
anchors = {a for a in re.findall(r'href="#([^"]+)"', html) if a}
missing = anchors - ids
check(f"all #anchor links resolve to an existing id (missing: {sorted(missing) or 'none'})", not missing)

# Agent-discovery files that other files (llms.txt, index.md, <head> link rels)
# point to must actually exist.
for rel in [
    "llms.txt",
    "index.md",
    "robots.txt",
    "sitemap.xml",
    ".well-known/api-catalog",
    ".well-known/mcp/server-card.json",
    ".well-known/agent-skills/index.json",
]:
    check(f"{rel} exists", (ROOT / rel).is_file())

# script.js sanity (CI also runs `node --check` separately for real syntax validation).
js = (ROOT / "script.js").read_text(encoding="utf-8")
check("script.js braces are balanced", js.count("{") == js.count("}"))

sys.exit(1 if failures else 0)
