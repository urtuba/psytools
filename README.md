# psytools

Give your app a validated psychological questionnaire — rendered, collected, and scored — in a few lines:

```ts
import { loadInventory } from "psytools";

const phq9 = loadInventory("phq9");                    // Patient Health Questionnaire-9
phq9.localize("en");                                   // render-ready questions & options for your UI

const response = phq9.createResponse();
response.answerAll([2, 1, 3, 1, 0, 1, 2, 0, 0]).submit();

phq9.evaluate(response);
// { score: 10, band: { id: "moderate", label: { en: "Moderate depression", ... } }, ... }
```

That's a complete depression screening: standardized items, answer validation, published severity cutoffs, and clinical flags (e.g. PHQ-9's self-harm item) — with zero dependencies.

## Why psytools

- **Batteries included** — eight instruments (PHQ-9, GAD-7, DASS-21, WHO-5, ASRS, AQ-10, AUDIT, Mini-IPIP) ship ready to use in English, Turkish, German, Chinese, and Spanish, with published scoring rules and citations.
- **Your tests too** — therapists and researchers can define their own instruments as one plain JSON object; psytools validates, localizes, and scores them the same way.
- **Everything is plain JSON** — assessments and responses `stringify()`/`parse()` losslessly, so definitions live in your database and travel between backend and frontend. Scoring rules are data, not code, and survive the round trip.
- **Safe by default** — every answer is validated against the option scale, incomplete responses can't be scored accidentally, and submitted responses are immutable.
- **Runs anywhere** — zero runtime dependencies; Node (>= 18), browsers, and edge runtimes; ESM + CommonJS with full TypeScript declarations.

## Install

```sh
npm install psytools
```

## Walkthrough

```ts
import { loadInventory } from "psytools";

const phq9 = loadInventory("phq9");

// 1. Render — get a flat, single-locale view for your UI.
const view = phq9.localize("tr");
// { id, locale, title, instructions, questions: [{ id, index, text, options: [{ value, label }] }] }

// 2. Collect answers — one by one or all at once.
const response = phq9.createResponse({ respondentId: "client-42" });
response.answer("phq9-1", 2);           // validated immediately
response.answerAll([2, 1, 3, 1, 0, 1, 2, 0, 0]); // or all at once (question order)
response.submit();                       // validates completeness, freezes, timestamps

// Responses track their lifecycle as `response.status`:
// "empty" -> "in-progress" -> "complete" -> "submitted"

// 3. Evaluate.
const result = phq9.evaluate(response);
// {
//   kind: "scale", score: 10, min: 0, max: 27,
//   band: { id: "moderate", label: { en: "Moderate depression", tr: ..., de: ... } },
//   flags: []   // phq9-9 > 0 would raise the "suicidality" flag here
// }

// evaluate() refuses responses that are not complete/submitted;
// score partial data explicitly:
phq9.evaluate(inProgressResponse, undefined, { allowIncomplete: true });

// 4. Persist — both sides are plain JSON.
db.save(response.stringify());           // response -> DB
db.save(phq9.stringify());               // definition -> DB
```

Restore later and continue where you left off:

```ts
import { Assessment, AssessmentResponse } from "psytools";

const assessment = Assessment.parse(jsonFromDb);            // validated on parse
const response = AssessmentResponse.parse(assessment, rowFromDb); // answers re-validated
```

## Predefined inventories

| Id | Instrument | Items | Scoring | Locales |
| --- | --- | --- | --- | --- |
| `phq9` | Patient Health Questionnaire-9 (depression) | 9 | Sum 0–27, 5 severity bands, item-9 suicidality flag | en, tr, de, zh, es |
| `gad7` | Generalized Anxiety Disorder-7 | 7 | Sum 0–21, 4 severity bands | en, tr, de, zh, es |
| `dass21` | Depression Anxiety Stress Scales (short form) | 21 | 3 subscales × 7 items, sums doubled, banded per subscale | en, tr, de, zh, es |
| `who5` | WHO-5 Well-Being Index | 5 | Sum × 4 → 0–100 (higher is better), 3 well-being bands | en, tr, de, zh, es |
| `asrs6` | Adult ADHD Self-Report Scale (ASRS-v1.1) screener | 6 | Count of screen-positive items (per-item thresholds), ≥4 positive | en, tr, de, zh, es |
| `aq10` | Autism Spectrum Quotient (AQ-10, adult) | 10 | 1 point per item in trait direction (agree/disagree), ≥6 refer | en, tr, de, zh, es |
| `audit` | Alcohol Use Disorders Identification Test (WHO) | 10 | Sum 0–40 with per-question point systems, 4 WHO risk zones | en, tr, de, zh, es |
| `mini-ipip` | Mini-IPIP Big Five personality scale | 20 | 5 trait subscales (4–20 each), reverse-keyed items, no cutoffs | en, tr, de, zh, es |

```ts
import { loadInventory, inventories, dass21 } from "psytools";

loadInventory("dass21");   // ready-to-use Assessment instance
inventories;               // { phq9, gad7, dass21 } raw definitions
dass21;                    // a plain AssessmentDefinition you can clone and adapt
```

DASS-21 evaluates to a multi-scale result:

```ts
const result = assessment.evaluate(response);
// { kind: "multiscale", scales: [
//     { id: "depression", score: 14, min: 0, max: 42, band: { id: "moderate", ... }, label: {...} },
//     { id: "anxiety", ... }, { id: "stress", ... }
//   ], flags: [] }
```

## Defining your own assessment

An assessment is one plain object — questions, an enumerated option scale, and optional declarative scoring:

```ts
import { Assessment, type AssessmentDefinition } from "psytools";

const definition: AssessmentDefinition = {
  id: "my-clinic/sleep-check",
  version: "1.0.0",
  title: { en: "Sleep Check", tr: "Uyku Kontrolü" },
  instructions: { en: "Over the last week...", tr: "Geçen hafta boyunca..." },
  defaultLocale: "en",
  options: [
    { value: 0, label: { en: "Never", tr: "Hiçbir zaman" } },
    { value: 1, label: { en: "Sometimes", tr: "Bazen" } },
    { value: 2, label: { en: "Often", tr: "Sık sık" } },
  ],
  questions: [
    { id: "s1", text: { en: "I had trouble falling asleep", tr: "Uykuya dalmakta zorlandım" } },
    { id: "s2", text: { en: "I woke up rested", tr: "Dinlenmiş uyandım" }, reverseScored: true },
    { id: "s3", text: { en: "Anything else? (optional)", tr: "Başka bir şey? (isteğe bağlı)" }, optional: true },
  ],
  scoring: {
    kind: "sum",
    bands: [
      { id: "ok", min: 0, max: 2, label: { en: "No concern", tr: "Sorun yok" } },
      { id: "follow-up", min: 3, max: 6, label: { en: "Follow up", tr: "Takip edilmeli" } },
    ],
  },
};

const assessment = new Assessment(definition); // throws PsytoolsError on malformed definitions
```

Questions may also carry their own `options` to override the default scale, and `validateDefinition(input)` checks user-created definitions without throwing (returns `{ valid, issues }`) — useful before persisting a therapist-authored test.

Non-JavaScript backends can validate stored definitions against the published [JSON Schema](schema/assessment-definition.schema.json) (shipped in the npm package under `schema/`).

## Custom evaluation

Declarative scoring is optional. Pass an evaluator for anything beyond sums and subscales — it can return a single scale, multiple scales, a category, or arbitrary data:

```ts
import type { Evaluator } from "psytools";

const attachmentStyle: Evaluator = (definition, answers) => {
  const avoidance = answers["a1"]! + answers["a2"]!;
  const anxiety = answers["b1"]! + answers["b2"]!;
  return {
    kind: "categorical",
    category: avoidance > 3 ? (anxiety > 3 ? "fearful" : "dismissive") : anxiety > 3 ? "preoccupied" : "secure",
  };
};

assessment.evaluate(response, attachmentStyle);
```

Result shapes: `scale` (single score + band + flags), `multiscale` (named subscales), `categorical`, and `custom` (escape hatch).

## Tracking progress over time

Responses carry `respondentId`, `startedAt`/`submittedAt` timestamps, the assessment id/version, and free-form `meta` — store the serialized responses and evaluate them in bulk:

```ts
const history = rows
  .map((row) => AssessmentResponse.parse(phq9, row))
  .map((r) => ({ at: r.submittedAt, score: phq9.evaluate(r).score }));
```

## API overview

| Export | Purpose |
| --- | --- |
| `Assessment` | Wraps a definition: validation, `localize()`, `createResponse()`, `evaluate()`, `stringify()`/`parse()` |
| `AssessmentResponse` | `answer()`, `answerAll()`, `clearAnswer()`, `status`, `progress()`, `validate()`, `submit()`, `stringify()`/`parse()` |
| `evaluate(definition, answers, evaluator?)` | Standalone scoring (also available as `Assessment#evaluate`) |
| `validateDefinition(input)` | Non-throwing structural validation of definitions |
| `loadInventory(id)` / `inventories` / `phq9`, `gad7`, `dass21` | Predefined instruments |
| `localize(text, locale, fallback?)` / `collectLocales(texts)` | Locale helpers |
| `PsytoolsError` | All errors carry a stable `code` (e.g. `invalid_value`, `already_submitted`) |

## Development

```sh
npm install
npm test        # node:test on TypeScript sources (no test framework needed)
npm run build   # ESM + CJS + type declarations into dist/
```

## Important notes

- **Not a diagnostic tool.** Scores, severity bands, and flags implement the published scoring rules of screening instruments; they are not diagnoses and do not replace clinical judgment.
- **Crisis-relevant answers.** PHQ-9 item 9 raises a `suicidality` flag — applications should surface this to a responsible clinician and provide crisis resources to respondents.
- **Instrument licensing.** [SOURCES.md](SOURCES.md) flags every bundled instrument as **Free** (PHQ-9, GAD-7, DASS-21, WHO-5 — usable without permission, including commercially) or **Free with conditions** (ASRS v1.1, AQ-10 — free for clinical/research use; verify with the rights holder before embedding in commercial products). Each inventory's `meta.licenseFlag` carries the same flag programmatically.
- **Translation provenance.** English texts are reproduced from the original instruments. Turkish and German texts are AI translations (Anthropic Claude, model `claude-fable-5`) of the original English — official translations were **not** consulted and the texts are unverified; see [SOURCES.md](SOURCES.md). Obtain and compare the official version for your language before clinical use. Corrections: <samed@luckys.dev>.

## License

MIT
