# Kairos.ai 優時科技

AI rebar estimation for AEC · Applied AI systems, backend, and data platforms.

Homepage: <https://www.kairosaitech.com/>
Contact: <kairos.ai.tech@gmail.com>

> This is the markdown-for-agents mirror of the Kairos.ai homepage. The live
> site at `/` serves HTML for browsers; this file serves the same information
> in a markdown form that is easier for AI agents to parse. GitHub Pages does
> not support HTTP `Accept: text/markdown` content negotiation, so the
> convention here is to request `/index.md` directly.

---

## About Kairos.ai

Kairos.ai 優時科技 is a Taiwan-based company building applied AI for the
construction (AEC) industry. Our flagship system, iTech, automates rebar
estimation for AEC teams. We also design custom AI systems, backend
infrastructure, and data platforms with the same engineering rigor.

## Products (B2B)

- **iTech** — AI rebar estimation system for the AEC industry. An end-to-end
  platform that turns construction drawings (DWG or PDF) into accurate rebar
  estimates and bar-bending schedules (exportable as CSV/Excel), replacing
  slow, error-prone manual takeoff.
- **iTech AR** *(in development)* — a camera-based AR view for the job site
  that overlays AI-detected rebar and the bar-bending schedule onto the
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

**What is iTech and how does it estimate rebar?**
iTech is Kairos.ai's end-to-end AI system that turns construction drawings
(PDF or CAD) into accurate rebar estimates and bar-bending schedules. Its
computer vision models read rebar sizes, spacing, and laps directly from the
drawings, replacing slow, error-prone manual takeoff.

**Who is iTech for?**
iTech is built for the AEC (architecture, engineering, construction)
industry — serving contractors, rebar fabricators, structural engineers, and
estimating teams who need faster, more accurate rebar takeoff and a shorter
bid-prep time.

**What does iTech output?**
iTech produces accurate rebar quantities, weights, and an exportable
bar-bending schedule — ready for procurement, fabrication scheduling, and
cost estimation.

**What else does Kairos.ai offer besides iTech?**
Beyond iTech, Kairos.ai also provides custom AI systems design, backend
infrastructure, AI application development, and data analysis platforms —
built with the same engineering rigor as iTech.

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

- Email: <kairos.ai.tech@gmail.com>
- Contact form: <https://www.kairosaitech.com/#contact>
