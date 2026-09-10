# Kairos.ai 優時科技

AI solutions for AEC & construction, starting with AI rebar estimation · Applied AI systems, backend, and data platforms.

Homepage: <https://www.kairosaitech.com/>
Contact: <seanchen@kairosaitech.com>

> This is the markdown-for-agents mirror of the Kairos.ai homepage. The live
> site at `/` serves HTML for browsers; this file serves the same information
> in a markdown form that is easier for AI agents to parse. GitHub Pages does
> not support HTTP `Accept: text/markdown` content negotiation, so the
> convention here is to request `/index.md` directly.

---

## About Kairos.ai

Kairos.ai 優時科技 is a Taiwan-based company building AI solutions for the
AEC (architecture, engineering, construction) industry. Our first product,
SetTime (formerly iTech), automates rebar estimation for AEC teams — the
starting point of a broader mission to bring AI across the full AEC
industry. We also design custom AI systems, backend infrastructure, and
data platforms with the same engineering rigor.

## Products (B2B)

- **SetTime** *(formerly iTech)* — AI rebar estimation system for the AEC
  industry, and Kairos.ai's first step toward broader AEC AI solutions. An
  end-to-end platform that turns construction drawings (DWG or PDF) into
  accurate rebar estimates and bar-bending schedules (exportable as
  CSV/Excel), replacing slow, error-prone manual takeoff.
- **SetTime AR** *(in development)* — a camera-based AR view for the job
  site that overlays AI-detected rebar and the bar-bending schedule onto the
  physical structure in real time, for on-site verification against the
  drawing. Not yet shipped.

## Services

- **AI Systems Design** — custom AI solutions designed, adapted, and tuned to
  measurable business outcomes.
- **Backend Systems** — robust, scalable backend infrastructure for
  performance, security, and reliability.
- **AI Applications** — AI-powered applications from concept to deployment.
- **Data Analysis** — turning raw data into actionable insight.

## FAQ

**What is SetTime and how does it estimate rebar?**
SetTime is Kairos.ai's end-to-end AI system that turns construction drawings
(PDF or CAD) into accurate rebar estimates and bar-bending schedules. Its
computer vision models read rebar sizes, spacing, and laps directly from the
drawings, replacing slow, error-prone manual takeoff.

**Who is SetTime for?**
SetTime is built for the AEC (architecture, engineering, construction)
industry — serving contractors, rebar fabricators, structural engineers, and
estimating teams who need faster, more accurate rebar takeoff and a shorter
bid-prep time.

**What does SetTime output?**
SetTime produces accurate rebar quantities, weights, and an exportable
bar-bending schedule — ready for procurement, fabrication scheduling, and
cost estimation.

**What else does Kairos.ai offer besides SetTime?**
SetTime is Kairos.ai's first product for the AEC industry — rebar estimation
is the starting point of our broader mission to bring AI solutions across
construction. Beyond SetTime, we also provide custom AI systems design,
backend infrastructure, AI application development, and data analysis
platforms — built with the same engineering rigor.

## Languages

The site is available in eight languages (English is the default):

- English (`en`, default)
- Traditional Chinese (`zh-TW`)
- Japanese (`ja`)
- Spanish (`es`)
- Italian (`it`)
- French (`fr`)
- Korean (`ko`)
- German (`de`)

Switch language by appending `?lang=<code>` to any URL on the site, or via the
language switcher in the site header.

## Agent discovery

Kairos.ai publishes the following agent-discovery resources:

- API catalog (RFC 9727): `/.well-known/api-catalog`
- MCP server card: `/.well-known/mcp/server-card.json`
- Agent skills index: `/.well-known/agent-skills/index.json`
- WebMCP tools: exposed at page load via `navigator.modelContext.provideContext`
  (`navigate_section`, `set_language`, `contact_kairos`, `get_company_info`)
- Content signals: declared in `/robots.txt` (search=yes, ai-input=yes,
  ai-train=no — this content may be used to answer a live query, not for
  model training)

## Contact

- Email: <seanchen@kairosaitech.com>
- Contact form: <https://www.kairosaitech.com/#contact>
