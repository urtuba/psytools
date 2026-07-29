# psytools

Give your app a validated psychological questionnaire — rendered, collected, and scored — in a few lines:

```ts
import { loadInventory } from "psytools";

const phq9 = await loadInventory("phq9");              // Patient Health Questionnaire-9
phq9.localize("en");                                   // render-ready questions & options for your UI

const response = phq9.createResponse();
response.answerAll([2, 1, 3, 1, 0, 1, 2, 0, 0]).submit();

phq9.evaluate(response);
// { score: 10, band: { id: "moderate", label: { en: "Moderate depression", ... } }, ... }
```

That's a complete depression screening: standardized items, answer validation, published severity cutoffs, and clinical flags (e.g. PHQ-9's self-harm item) — with zero dependencies.

## Why psytools

- **Batteries included** — twenty-six instruments (PHQ-9, PHQ-15, GAD-7, DASS-21, WHO-5, ASRS, AQ-10, AUDIT, Mini-IPIP, Mini-IPIP6, CES-D, ECR-R, ERQ, HSPS, SWLS, Flourishing, K10, K6, RSES, IPIP BIS/BAS, IPIP-NEO-60, IPIP-VIA-R, PCL-5, EAT-26, CSI-16, UCLA Loneliness Scale) ship ready to use in up to five languages (English, Turkish, German, Chinese, Spanish — see the table below), with published scoring rules, citations, and filtering metadata (category, target audience, respondent role).
- **Your tests too** — therapists and researchers can define their own instruments as one plain JSON object; psytools validates, localizes, and scores them the same way.
- **Everything is plain JSON** — assessments and responses `stringify()`/`parse()` losslessly, so definitions live in your database and travel between backend and frontend. Scoring rules are data, not code, and survive the round trip.
- **Safe by default** — every answer is validated against the option scale, incomplete responses can't be scored accidentally, and submitted responses are immutable.
- **Data minimization by default** — base definitions carry English only; other languages ship as per-inventory locale packs that are lazily imported (and only then enter memory or your bundle) when you request them.
- **Runs anywhere** — zero runtime dependencies; Node (>= 18), browsers, and edge runtimes; ESM + CommonJS with full TypeScript declarations.

## Install

```sh
npm install psytools
```

## Walkthrough

```ts
import { loadInventory } from "psytools";

// Locales are lazy: only the requested packs are loaded.
const phq9 = await loadInventory("phq9", { locales: ["tr"] });

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
phq9.evaluate(inProgressResponse, { allowIncomplete: true });

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

| Id | Instrument | Category | Items | Scoring | Locales |
| --- | --- | --- | --- | --- | --- |
| `phq9` | Patient Health Questionnaire-9 (depression) | depression | 9 | Sum 0–27, 5 severity bands, item-9 suicidality flag | en, tr, de, zh, es |
| `gad7` | Generalized Anxiety Disorder-7 | anxiety | 7 | Sum 0–21, 4 severity bands | en, tr, de, zh, es |
| `dass21` | Depression Anxiety Stress Scales (short form) | depression, anxiety, stress | 21 | 3 subscales × 7 items, sums doubled, banded per subscale | en, tr, de, zh, es |
| `who5` | WHO-5 Well-Being Index | well-being | 5 | Sum × 4 → 0–100 (higher is better), 3 well-being bands | en, tr, de, zh, es |
| `asrs6` | Adult ADHD Self-Report Scale (ASRS-v1.1) screener | adhd | 6 | Count of screen-positive items (per-item thresholds), ≥4 positive | en, tr, de, zh, es |
| `aq10` | Autism Spectrum Quotient (AQ-10, adult) | autism | 10 | 1 point per item in trait direction (agree/disagree), ≥6 refer | en, tr, de, zh, es |
| `audit` | Alcohol Use Disorders Identification Test (WHO) | substance-use | 10 | Sum 0–40 with per-question point systems, 4 WHO risk zones | en, tr, de, zh, es |
| `mini-ipip` | Mini-IPIP Big Five personality scale | personality | 20 | 5 trait subscales (4–20 each), 11 reverse-keyed, no cutoffs | en, tr, de, zh, es |
| `mini-ipip6` | Mini-IPIP6 Big Six personality scale | personality | 24 | 6 factor subscales (4–20 each), 15 reverse-keyed, no cutoffs | en, tr, de, zh, es |
| `cesd` | Center for Epidemiologic Studies Depression Scale (CES-D) | depression | 20 | Sum 0–60, 4 reverse-keyed items, elevated at ≥16 | en, tr, de, zh, es |
| `ecr-r` | Experiences in Close Relationships-Revised (adult attachment) | attachment, relationships | 36 | 2 subscales × 18 items (anxiety, avoidance), 14 reverse-keyed, no cutoffs | en, tr¹ |
| `erq` | Emotion Regulation Questionnaire | emotion-regulation | 10 | 2 subscales (reappraisal 6, suppression 4), no reversals, no cutoffs | en, tr, de, zh, es |
| `hsps` | Highly Sensitive Person Scale | sensory-processing, personality | 27 | Sum 27–189, no reversals, no cutoffs | en, tr¹ |
| `swls` | Satisfaction with Life Scale | well-being | 5 | Sum 5–35, Diener's 7 score groupings | en, tr, de, zh, es |
| `flourishing` | Flourishing Scale | well-being | 8 | Sum 8–56, no cutoffs | en, tr, de, zh, es |
| `k10` | Kessler Psychological Distress Scale (K10) | distress | 10 | Sum 10–50 (1–5 coding), 4 severity bands | en, tr, de, zh, es |
| `k6` | Kessler Psychological Distress Scale (K6) | distress | 6 | Sum 0–24 (0–4 coding), ≥13 serious distress | en, tr, de, zh, es |
| `rses` | Rosenberg Self-Esteem Scale | self-esteem | 10 | Sum 0–30, 5 reverse-keyed items, 15–25 normal range | en, tr, de, zh, es |
| `bis-bas` | IPIP BIS/BAS scales (approach and avoidance motivation) | personality, motivation | 36 | 4 subscales (BIS 10, fun-seeking 10, drive 10, reward responsiveness 6), 10 reverse-keyed, no cutoffs | en, tr, de, zh, es |
| `ipip-neo-60` | IPIP-NEO-60 personality inventory | personality | 60 | 5 domain subscales × 12 items (12–60 each), 23 reverse-keyed, no cutoffs | en, tr, de, zh, es |
| `ipip-via-r` | IPIP-VIA-R short scales (24 character strengths) | character-strengths, personality | 96 | 24 strength subscales × 4 items (4–20 each), balanced 2 positive / 2 reverse, no cutoffs | en, tr, de, zh, es |
| `phq15` | Patient Health Questionnaire-15 (somatic symptoms) | somatic-symptoms | 15 | Sum 0–30 (0–2 coding), 4 severity bands, item 4 optional (women only) | en, tr, de, zh, es |
| `pcl5` | PTSD Checklist for DSM-5 (PCL-5), standard form | post-traumatic-stress | 20 | Sum 0–80, no bands² | en, tr, de, zh, es |
| `eat26` | Eating Attitudes Test (EAT-26) | disordered-eating | 26 | Sum 0–78 on an asymmetric key, referral at ≥20 | en, tr, de, zh, es |
| `csi16` | Couples Satisfaction Index (CSI-16) | relationships | 16 | Sum 0–81, **higher is better**, dissatisfied below 51.5 | en, tr, de, zh, es |
| `ucla-ls3` | UCLA Loneliness Scale (Version 3) | loneliness | 20 | Sum 20–80, 9 reverse-keyed items, no bands² | en, tr, de, zh, es |
| `cbi` | Copenhagen Burnout Inventory (CBI) | burnout | 19 | Three scales scored separately, sums; published score is the mean on 0–100, no bands² | en, tr, de, zh, es |

¹ The `ecr-r` and `hsps` Turkish packs reproduce **published, validated Turkish adaptations** (Sümer and colleagues — see [SOURCES.md](SOURCES.md)); other locales can follow once verified sources are available. `ecr-r`, `erq`, and `hsps` are licensed for **non-commercial research use only** — check [SOURCES.md](SOURCES.md) before shipping them in a product. `asrs6` is free to ship, commercially included, but its license makes attribution mandatory: render `meta.attribution` wherever it appears. `eat26` is free for individual use but a **commercial web platform that charges user fees needs a licensing agreement** from its copyright holder — read its section in [SOURCES.md](SOURCES.md) before you build one. `cbi` has the thinnest licensing record of anything bundled — its steward publishes it openly but its rights holders have never granted anything in writing; read its section too.

² `pcl5`, `ucla-ls3` and `cbi` ship no severity bands, because their rights holders publish none to ship: the VA offers a cutoff *range* (31–33) it describes as initial research, Russell scores the loneliness scale continuously, and the CBI's authors publish population norms rather than thresholds. Each records what is published in `meta.scoringNote` so you can apply your own threshold. Note also that `csi16` runs the opposite way to every other inventory here — a high score is a good result — so do not wire it to a shared "higher is worse" display.

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

### Filtering metadata

Every definition carries three optional fields for picking the right instrument: `categories` (what it measures — e.g. `inventories` entries with `categories.includes("depression")`), `audience` (the age band(s) it is written and validated for — `adult`, `adolescent`, `child`), and `respondent` (whose report the answers are — `self`, `parent`, `teacher`, `clinician`). Bundled inventories draw from the vocabularies exported as `InventoryCategory`, `InventoryAudience`, and `InventoryRespondent`; the fields themselves are plain strings, so your own definitions can use their own taxonomy.

Audience and respondent are separate axes because instruments *about* children are commonly filled in by someone else — a parent-report ADHD scale is `audience: ["child"]`, `respondent: "parent"`. `audience` is an array, since one wording is often validated across bands; `respondent` is a single value, since a definition is written from exactly one point of view. Parent- and teacher-report forms of the same instrument say "your child" and "this student", so they are separate definitions with separate ids, not one definition with two respondents.

Neither field encodes the recall timeframe or the administration mode: a retrospective instrument answered by an adult about their own childhood is `["adult"]` + `"self"`, with the childhood framing in `instructions`, and a clinician reading items aloud to a client is still `"self"` because the answers are the client's own report. Every bundled inventory is `respondent: "self"` and `audience: ["adult"]`, except `rses` and `eat26`, which are both `["adolescent", "adult"]` — Rosenberg developed his scale on high-school students, Garner names high school and college among the EAT-26's screening populations, and neither instrument changes its wording between bands.

No bundled inventory is adolescent- or child-only yet, and none has a `respondent` other than `"self"`. That reflects who licenses their instruments freely, not what exists — the parent- and teacher-report scales that would fill those gaps are recorded, with their terms, under [instruments evaluated and not bundled](SOURCES.md#instruments-evaluated-and-not-bundled).

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

### Data minimization

Minimization is the default, at every layer:

- **Memory / runtime**: base definitions are English-only. `loadInventory(id, { locales })` dynamically imports just the requested locale packs and merges them — nothing else is ever loaded. `availableLocales(id)` lists what exists.
- **Bundles**: import a single inventory via `psytools/inventories/<id>` (~2 kB gzipped) and, for static bundling, a specific pack via `psytools/locales/<locale>/<id>`, merged with `applyLocale`:

  ```ts
  import { phq9 } from "psytools/inventories/phq9";        // en base
  import tr from "psytools/locales/tr/phq9";               // one language pack
  import { Assessment, applyLocale } from "psytools";

  const assessment = new Assessment(applyLocale(phq9, tr));
  ```

  Named root imports also tree-shake (`sideEffects: false`).
- **Payloads**: a loaded definition contains exactly the locales you asked for, so `res.json(assessment.definition)` is already minimal. To slim an existing multi-locale definition (e.g. a stored custom test), use `pickLocales(definition, [userLocale])`.

Merged definitions remain one self-contained JSON object — locale loading never breaks the `stringify → DB → parse` round trip.

### Local translation overrides

The bundled translations are unverified AI output (see [Translation provenance](#important-notes) below) — you may want to reword a specific question, option label, or instruction locally without forking the inventory. `loadInventory` accepts `overrides`: one or more partial locale packs, applied **after** the built-in packs, later-wins:

```ts
const phq9 = await loadInventory("phq9", {
  locales: ["tr"],
  overrides: {
    id: "phq9",
    locale: "tr",
    // Only the bits you want to change — everything else keeps the
    // bundled tr text (or falls back to English if tr was never loaded).
    questions: {
      "phq9-3": { text: "Uykuya dalmakta veya uykuyu sürdürmekte güçlük" },
    },
  },
});
```

An override pack has the same shape as a bundled `InventoryLocalePack` (see [`applyLocale`](#data-minimization) above), but every field except `id`/`locale`/`questions` is optional, and `questions` only needs entries for what you're changing. Pass an array to apply several overrides in order; option-count mismatches and unknown question ids still throw `invalid_argument`, same as a bundled pack. This is a local, in-memory concern — psytools doesn't track override provenance or verification status; that's still on you and your own docs.

### Missing answers

Declarative scoring takes an optional missing-data policy governing how incomplete answer sets are scored (they reach the scorer via raw answer maps or `allowIncomplete`):

```ts
scoring: {
  kind: "sum",
  missing: { strategy: "prorate", minAnswered: 7 }, // or "ignore" (default) / "require-complete"
  ...
}
```

`ignore` sums what is answered (partial totals understate severity — use deliberately); `prorate` scales the raw score up to the full item count (rounded) and refuses to score below `minAnswered`; `require-complete` throws unless every contributing non-optional item is answered. For subscale scoring the policy applies to each subscale independently.

The bundled inventories ship with policies (PHQ-9/GAD-7/DASS-21 and the five IPIP inventories prorate with thresholds, WHO-5/ASRS/AQ-10/CSI-16 require-complete, AUDIT ignores to match its skip logic, PHQ-15 ignores because its item 4 is marked women-only on the instrument) — see [SOURCES.md](SOURCES.md#missing-data-policies) for the rationale and how to override.

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

assessment.evaluate(response, { evaluator: attachmentStyle });
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
| `evaluate(definition, answers, { evaluator? })` | Standalone scoring (also available as `Assessment#evaluate`) |
| `validateDefinition(input)` | Non-throwing structural validation of definitions |
| `loadInventory(id, { locales?, overrides? })` / `inventories` | Predefined instruments (async; English-only base definitions also exported by name); `overrides` applies local partial locale packs after the built-in ones |
| `applyLocale(definition, pack)` / `availableLocales(id)` / `localePacks` | Lazy per-inventory locale packs |
| `localizeText(text, locale, fallback?)` / `collectLocales(texts)` / `pickLocales(definition, locales)` | Locale helpers |
| `PsytoolsError` | All errors carry a `code` typed as `PsytoolsErrorCode` (e.g. `invalid_value`, `already_submitted`) |

## Development

```sh
npm install
npm test        # node:test on TypeScript sources (no test framework needed)
npm run build   # ESM + CJS + type declarations into dist/
```

## Important notes

- **Not a diagnostic tool.** Scores, severity bands, and flags implement the published scoring rules of screening instruments; they are not diagnoses and do not replace clinical judgment.
- **Crisis-relevant answers.** PHQ-9 item 9 raises a `suicidality` flag — applications should surface this to a responsible clinician and provide crisis resources to respondents.
- **Instrument licensing.** [SOURCES.md](SOURCES.md) records who holds the rights to each bundled instrument and flags it **Free** (PHQ-9, GAD-7, DASS-21, WHO-5, AUDIT, CES-D, K10, K6, and the five IPIP inventories — usable without permission, including commercially), **Free with conditions** (ASRS screener, AQ-10, SWLS, Flourishing Scale, RSES — free as distributed, but the conditions differ per instrument: the ASRS screener requires attribution, the AQ-10's commercial terms are unstated), or **Research only** (ECR-R, ERQ, HSPS — not licensed for clinical products or personnel selection). Each inventory's `meta.licenseFlag` carries the flag programmatically; read the instrument's section before shipping it.
- **Required attribution.** Where a license fixes the exact credit line that must be displayed, the inventory carries it verbatim in `meta.attribution` — render it wherever the instrument or its results appear. Today only `asrs6` sets it (© New York University and the President and Fellows of Harvard College). It is deliberately separate from `meta.reference`, which is the scientific citation: an academic reference is not a copyright attribution, and only one of the two is a license obligation.
- **Translation provenance.** English texts are reproduced from the original instruments. Turkish, German, Simplified Chinese, and Spanish texts are AI translations (Anthropic Claude — the exact model is named per inventory in `meta.translationProvenance`) of the original English — official translations were **not** consulted and the texts are unverified. This status is documentation-only: psytools does not track or expose per-pack verification programmatically (no `verified` field, no gating option, no status API) — read [SOURCES.md](SOURCES.md) and decide for yourself whether the bundled wording is fit for your use case. If it isn't for a specific item, use [local overrides](#local-translation-overrides) rather than forking the package. Obtain and compare the official version for your language before clinical use. Corrections: <samed@luckys.dev>.

## License

The code is MIT — Samed Kahyaoglu, 2026. See [LICENSE](LICENSE).

The bundled instrument text is a separate matter: each of the twenty-one instruments is licensed by its own rights holder, on terms that differ instrument to instrument. The quick answer:

- **Thirteen ship free, including in commercial products, no permission needed:** PHQ-9, GAD-7, DASS-21, WHO-5, AUDIT, CES-D, K10, K6, and the five International Personality Item Pool inventories — Mini-IPIP, Mini-IPIP6, IPIP BIS/BAS, IPIP-NEO-60, IPIP-VIA-R. The IPIP five carry the least conditional terms in the package: "Because the IPIP has been placed in the public domain, permission has already been automatically granted for any person to use IPIP items, scales, and inventories for any purpose, commercial or non-commercial" — no attribution required, no one to ask.
- **The ASRS-v1.1 screener (`asrs6`) ships free, including commercially, with one mandatory condition — attribution.** Render the credit line psytools ships in `meta.attribution` wherever the screener or its results appear.
- **Three ship for non-commercial research only: ECR-R, ERQ, and HSPS.** Commercial use of any of these needs permission directly from that instrument's own rights holder (R. C. Fraley for the ECR-R; the Stanford Psychophysiology Laboratory for the ERQ; Elaine Aron for the HSPS) — that permission is theirs to give, not psytools'.
- **AQ-10, RSES, SWLS, and the Flourishing Scale ship free with conditions of their own, and the conditions aren't uniform.** AQ-10's and RSES's rights holders haven't addressed commercial use (confirm with them before shipping commercially). SWLS's and the Flourishing Scale's rights holder (Ed Diener and co-authors) licenses them for non-commercial purposes only — treat those two like the research-only three for commercial shipping.

[SOURCES.md](SOURCES.md) has the full record for every instrument — rights holder, citation, exact conditions, translation provenance. Read the relevant section before you ship an instrument, especially any instrument outside the first two bullets above.
