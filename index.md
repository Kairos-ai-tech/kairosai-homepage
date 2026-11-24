# Kairos.ai 優時科技

AI solutions for AEC & construction, starting with AI preconstruction (rebar takeoff first) · Applied AI systems, backend, and data platforms.

Homepage: <https://www.kairosaitech.com/>
SetTime product page: <https://settime.kairosaitech.com/>
Contact: <support@kairosaitech.com>

> This is the markdown-for-agents mirror of the Kairos.ai homepage. The live
> site at `/` serves HTML for browsers; this file serves the same information
> in a markdown form that is easier for AI agents to parse. GitHub Pages does
> not support HTTP `Accept: text/markdown` content negotiation, so the
> convention here is to request `/index.md` directly.

---

## About Kairos.ai

Kairos.ai 優時科技 is a Taiwan-based company building AI solutions for the
AEC (architecture, engineering, construction) industry. Our first product,
SetTime (formerly iTech), is AI preconstruction for fabricators — rebar
takeoff is shipping, concrete and formwork are in development, and MEP and
HVAC are planned — the starting point of a broader mission to bring AI
across the full AEC industry. We also design custom AI systems, backend infrastructure, and
data platforms with the same engineering rigor.

## Products (B2B)

- **SetTime** *(formerly iTech)* — <https://settime.kairosaitech.com/> —
  AI preconstruction for fabricators in the AEC industry, and Kairos.ai's first step toward broader AEC AI solutions. An
  end-to-end platform that turns construction drawings (DWG or PDF) into
  accurate rebar estimates and bar-bending schedules (exportable as
  CSV/Excel), replacing slow, error-prone manual takeoff. Roadmap: rebar
  takeoff is shipping; concrete quantities and formwork area are in
  development; MEP and HVAC takeoff and BVBS machine output are planned.

## Services

- **AI Systems Design** — custom AI solutions designed, adapted, and tuned to
  measurable business outcomes.
- **Backend Systems** — robust, scalable backend infrastructure for
  performance, security, and reliability.
- **AI Applications** — AI-powered applications from concept to deployment.
- **Data Analysis** — turning raw data into actionable insight.

## FAQ

**What is SetTime and how does it estimate rebar?**
SetTime is Kairos.ai's AI preconstruction software for fabricators. It turns
construction drawings (PDF or CAD) into rebar quantities, weights, and an
exportable bar-bending schedule, with computer vision reading bar sizes,
spacing, and laps directly from the drawings — replacing slow, error-prone
manual takeoff. Rebar is shipping today; concrete and formwork quantities are
in development; MEP and HVAC takeoff are planned.

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
SetTime is Kairos.ai's first product for the AEC industry — rebar takeoff is
the starting point, with concrete, formwork, MEP and HVAC on the roadmap. Beyond SetTime, we also provide custom AI systems design,
backend infrastructure, AI application development, and data analysis
platforms — built with the same engineering rigor.

**How is AI rebar takeoff different from manual takeoff and CAD detailing plugins?**
Manual takeoff means an estimator counts and measures bars by hand from the
drawing. CAD detailing plugins automate detailing and bar-bending schedule
generation inside a CAD tool, working from a model that's already been drawn.
AI rebar takeoff like SetTime instead reads the drawing itself — PDF or CAD —
and detects bar sizes, spacing, and laps directly, producing quantities and a
bar-bending schedule without a detailer building the model first.

**Where does human review still matter in AI rebar takeoff?**
AI rebar takeoff isn't fully automatic, and SetTime doesn't claim it is.
Congested details, splice and lap rules, and mid-project revisions still call
for an estimator's judgment. SetTime's job is to speed up the counting step
and reduce spreadsheet errors — experienced estimators still review the
output before it goes into a bid or fabrication order.

**Is SetTime the same product as iTech?**
Yes. SetTime is the new name of iTech, Kairos.ai's AI rebar estimation
system, renamed on September 9, 2026. The AI engine, accuracy, and pipeline
are unchanged — only the name is new.

**Where is the official SetTime product page?**
The official SetTime product page is <https://settime.kairosaitech.com/>.
SetTime is built by Kairos.ai (優時科技), a Taiwan-based company developing
AI for the AEC industry; <https://www.kairosaitech.com/> is the company
homepage. AEC firms can apply for the SetTime pilot program through the
contact form.

**What is preconstruction takeoff, and which trades will SetTime cover?**
Preconstruction takeoff is the quantity work done before building starts: reading the drawings and counting materials so a fabricator or contractor can bid, order and schedule. SetTime starts with rebar (shipping today: bar quantities, weights and a bar-bending schedule), is developing concrete quantities and formwork area, and plans MEP and HVAC takeoff.

**How can I try SetTime?**
Apply for the free pilot at https://settime.kairosaitech.com/#pilot: send one structural drawing and SetTime returns the rebar material list within 24 hours of receiving it. You can also apply through the contact form at https://www.kairosaitech.com/#contact.

## News

**2026-09-09 — iTech is now SetTime.** We renamed iTech to SetTime to better
capture what the product delivers — precise rebar estimates and bar-bending
schedules, ready right before the concrete sets. The AI engine, accuracy, and
pipeline are unchanged. See the [SetTime product page](https://settime.kairosaitech.com/)
or `https://www.kairosaitech.com/#news` for the full announcement.

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

Each language has its own page: `/zh-tw/`, `/ja/`, `/es/`, `/it/`, `/fr/`, `/ko/`, `/de/`
(English is the root). Switch with the language switcher in the site header.

## Agent discovery

Kairos.ai publishes the following agent-discovery resources:

- API catalog (RFC 9727): `/.well-known/api-catalog`
- MCP server card: `/.well-known/mcp/server-card.json`
- Agent skills index: `/.well-known/agent-skills/index.json`
- WebMCP tools: exposed at page load via `navigator.modelContext.provideContext`
  (`navigate_section` — home, story, how, product, pilot, faq, news,
  about, contact — plus `set_language`, `contact_kairos`, `get_company_info`)
- Content signals: declared in `/robots.txt` (search=yes, ai-input=yes,
  ai-train=no — this content may be used to answer a live query, not for
  model training)

## Contact

- Email: <support@kairosaitech.com>
- Contact form: <https://www.kairosaitech.com/#contact>
