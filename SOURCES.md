# Sources, licenses & translations

psytools is integrated into real products, so this file states precisely — per instrument — where every text comes from, who holds the rights, and what you are allowed to do with it. Each inventory also carries a machine-readable summary in its `meta` field.

**Corrections and requests:** if you find a wording that deviates from an official version, hold rights to an instrument, or want an instrument added, corrected, or removed, email <samed@luckys.dev> or open an issue at <https://github.com/urtuba/psytools/issues>.

## License flags

| Flag | Meaning |
| --- | --- |
| **Free** | Public domain or explicitly free for any use, including commercial products, without permission. |
| **Free with conditions** | Free to use as distributed, but the rights holder attaches conditions — mandatory attribution, limits on modification, or commercial terms that are simply unstated. The conditions differ per instrument, so read that instrument's section below before shipping. |
| **Research only** | Usable in non-commercial research contexts only; not licensed for clinical products, diagnosis, or personnel selection. Carried by the ECR-R, ERQ, and HSPS — see their sections. |

## Translation provenance — read this before clinical use

The same provenance applies to every bundled inventory **except where an inventory's section below states otherwise**. Two inventories deviate: the ECR-R and HSPS Turkish packs reproduce published, validated Turkish adaptations (see their sections) instead of AI translations.

| Language | Text source | Verified against an official version |
| --- | --- | --- |
| en | Reproduced from the original published instrument | Yes |
| tr | AI translation (Anthropic Claude) from the original English | No |
| de | AI translation (Anthropic Claude) from the original English | No |
| zh | AI translation (Anthropic Claude) from the original English | No |
| es | AI translation (Anthropic Claude) from the original English | No |

The exact translating model is stated per inventory in `meta.translationProvenance` (`claude-fable-5` for the original batch, `claude-sonnet-5` for later additions, `claude-opus-5` for the IPIP batch).

Official validated translations exist for most of these instruments, but they were **not consulted** in preparing the bundled texts, so they are deliberately not cited as sources. The packaged non-English wording has not been checked against them and has not been psychometrically validated. Validated instruments are only validated for their exact wording — before clinical or research use, obtain the official version for your language and compare or replace the text.

Non-English texts live as one file per inventory per language under [`src/locales/<locale>/`](src/locales) — exactly the unit a native-speaker reviewer needs. Verification contributions are very welcome.

This table is the only place translation status is tracked — psytools has no `verified` field, no gating option, and no API to query pack status at runtime; that would overstate a confidence level nobody has confirmed. If you've corrected a specific item's wording for your own use and don't want to wait on an upstream fix, apply it locally with `loadInventory(id, { overrides })` (see the README's [local translation overrides](README.md#local-translation-overrides)) rather than forking the package — or, better, send the correction upstream so everyone benefits.

## Target audience & respondent

Each inventory declares two independent axes in its definition: `audience`, the age band(s) the instrument is written and validated for — who it is *about* — and `respondent`, whose report the answers are. They are separate because instruments about children are commonly completed by a parent or a teacher rather than by the child.

**Every bundled inventory is `respondent: "self"` and `audience: ["adult"]`, except where its section below states otherwise.** One deviates today: the RSES is `["adolescent", "adult"]`.

Two things `audience` and `respondent` deliberately do *not* encode:

- **The recall timeframe.** A retrospective instrument answered by an adult about their own childhood is `audience: ["adult"]`, `respondent: "self"` — the childhood framing lives in `instructions` and `meta.timeframe`, not here.
- **The administration mode.** An interviewer-read self-report — the K10's full interview form, for example — is still `respondent: "self"`, because the answers are the client's own report. `"clinician"` is reserved for instruments where the clinician is the informant, rating the client from their own observation.

## Missing-data policies

Bundled inventories ship with declarative missing-data policies (`scoring.missing`). **The prorating thresholds are implementation choices reflecting common research practice — they are not part of the instruments' official scoring rules.** Override by cloning the definition if your protocol differs.

| Inventory | Policy | Rationale |
| --- | --- | --- |
| `phq9` | prorate, ≥7 of 9 answered | Common research practice (≈75% completion) |
| `gad7` | prorate, ≥6 of 7 answered | Common research practice |
| `dass21` | prorate, ≥6 of 7 per subscale | DASS manual tolerates occasional missing items |
| `mini-ipip` | prorate, ≥3 of 4 per trait | IPIP scoring is mean-based; prorating is equivalent |
| `who5`, `asrs6`, `aq10` | require-complete | Short instruments; cutoffs/counts are undefined for partial data |
| `audit` | ignore | Unanswered items score 0, matching the instrument's skip logic (e.g. non-drinkers skipping items 2–8) |
| `cesd` | prorate, ≥16 of 20 answered | Common research practice (≈80% completion) |
| `ecr-r` | prorate, ≥14 of 18 per subscale | Subscales are mean-based in the literature; prorating is equivalent |
| `erq` | require-complete | Short subscales (6 and 4 items); partial means are unstable |
| `hsps` | prorate, ≥21 of 27 answered | Total is mean-based in the literature; prorating is equivalent |
| `swls`, `flourishing`, `k10`, `k6` | require-complete | Short instruments; cutoffs are undefined for partial data (K10 note: the interview form scores skipped items 1 — see its section) |
| `rses` | prorate, ≥8 of 10 answered | Common research practice (80% completion) |
| `mini-ipip6` | prorate, ≥3 of 4 per factor | Same as `mini-ipip` |
| `bis-bas` | prorate, ≥5 per subscale | One threshold serves subscales of 10, 10, 10, and 6 items, so it is pinned to the strictest value the 6-item subscale allows — 5 of 6 there, 5 of 10 on the others |
| `ipip-neo-60` | prorate, ≥9 of 12 per domain | Common research practice (75% completion) |
| `ipip-via-r` | prorate, ≥3 of 4 per strength | 75% completion; note that dropping one item of a balanced 2-positive/2-negative scale reintroduces acquiescence bias |

## PHQ-9 — Patient Health Questionnaire-9 (`phq9`)

**License: Free.** Developed with an educational grant from Pfizer Inc. The copyright holders state that no permission is required to reproduce, translate, display, or distribute the PHQ screeners. Official repository: <https://www.phqscreeners.com>.

- **Citation:** Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure. *Journal of General Internal Medicine, 16*(9), 606–613.
- **Scoring:** Sum 0–27; severity bands per Kroenke et al. (2001). The item-9 `suicidality` flag is an implementation aid, not part of the published instrument.

## GAD-7 — Generalized Anxiety Disorder Scale (`gad7`)

**License: Free.** Same rights statement and repository as the PHQ-9 (Pfizer educational grant; no permission required).

- **Citation:** Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: The GAD-7. *Archives of Internal Medicine, 166*(10), 1092–1097.
- **Scoring:** Sum 0–21; severity bands per Spitzer et al. (2006).

## DASS-21 — Depression Anxiety Stress Scales, short form (`dass21`)

**License: Free.** The official DASS site states the questionnaires and their translations are in the public domain and may be used without permission. Official site: <http://www2.psy.unsw.edu.au/dass/>.

- **Citation:** Lovibond, S. H., & Lovibond, P. F. (1995). *Manual for the Depression Anxiety Stress Scales* (2nd ed.). Sydney: Psychology Foundation of Australia.
- **Scoring:** Three 7-item subscales; sums doubled to match DASS-42 severity cutoffs, per the DASS manual.

## WHO-5 — World Health Organization Well-Being Index (`who5`)

**License: Free.** The WHO-5 may be used without permission; official versions and translations are distributed by the Psychiatric Research Unit, Mental Health Centre North Zealand (on behalf of the WHO Regional Office for Europe).

- **Citation:** Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015). The WHO-5 Well-Being Index: A systematic review of the literature. *Psychotherapy and Psychosomatics, 84*(3), 167–176.
- **Scoring:** Raw sum (0–25) × 4, reported 0–100 (higher is better); cutoffs (≤50 reduced well-being, ≤28 likely depression) per Topp et al. (2015).

## AUDIT — Alcohol Use Disorders Identification Test (`audit`)

**License: Free.** Developed by the World Health Organization; the WHO's AUDIT manual permits reproduction and use of the questionnaire without permission.

- **Citation:** Babor, T. F., Higgins-Biddle, J. C., Saunders, J. B., & Monteiro, M. G. (2001). *AUDIT: The Alcohol Use Disorders Identification Test — Guidelines for Use in Primary Care* (2nd ed.). Geneva: World Health Organization.
- **Scoring:** Sum 0–40 with item-specific point systems (items 1–8 score 0–4, items 9–10 score 0/2/4); interpreted in the four risk zones of the WHO manual.

## Mini-IPIP — Big Five personality scale (`mini-ipip`)

**License: Free.** The International Personality Item Pool (Lewis Goldberg; <https://ipip.ori.org>) was created explicitly as a public-domain alternative to copyrighted commercial personality tests — items are free for any use, including commercial, without permission.

- **Citation:** Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006). The Mini-IPIP scales: Tiny-yet-effective measures of the Big Five factors of personality. *Psychological Assessment, 18*(2), 192–203.
- **Scoring:** Five trait subscales (extraversion, agreeableness, conscientiousness, neuroticism, openness) of 4 items each on a 1–5 accuracy scale, 11 of the 20 items reverse-keyed; scores 4–20 per trait are descriptive — no clinical cutoffs exist, so no bands are defined. See [the IPIP shared record](#the-international-personality-item-pool--shared-record) for the license text, item rendering, and scoring rule this instrument shares with the other four IPIP inventories.

## ASRS v1.1 — Adult ADHD Self-Report Scale, 6-item screener (`asrs6`)

**License: Free with conditions.** Copyright is held by **New York University and the President and Fellows of Harvard College**; licensing is administered by NYU Technology Opportunities & Ventures (<https://license.tov.med.nyu.edu/product/asrs6Qscreener>). The WHO's name is in the instrument's title, not on its copyright. The licensing page states: "The screener is freely available for clinical and non-clinical use, including commercial use, but does require attribution. This is an evidence-based tool, and as such no other modifications, other than creating electronic versions, are permitted." Commercial use therefore needs no separate permission; the two conditions below are what the flag refers to.

- **Attribution is mandatory.** Display this credit line, verbatim, wherever the screener or its results appear. It ships in `meta.attribution` so applications can render it:

  > The 6-question Adult Self-Report Scale-Version1.1 (ASRS-V1.1) Screener is a subset of the 18-question Adult ADHD Self-Report Scale-Version1.1 (Adult ASRSV1.1) Symptom Checklist. © New York University and the President and Fellows of Harvard College.

  This is the copyright attribution the license demands, which is a different thing from the scientific citation below — hence two fields, `meta.attribution` and `meta.reference`.
- **Whether translation is a permitted "modification" is unresolved.** The license permits no modifications "other than creating electronic versions" and says nothing about translation in either direction. psytools ships `asrs6` in tr, de, zh, and es as AI translations, so their standing under that clause is an open question. Settling it takes a direct question to NYU TOV, which has not been put to them yet; this file will be updated when there is an answer. One fact that bears on it without settling it: NYU TOV distributes its own official translations of the screener in about fifteen languages (Arabic, Chinese, Dutch, French, German, Hebrew, Italian, Japanese, Norwegian, Portuguese, Russian, Serbian, Spanish, Swedish, Thai — Turkish is not among them). A rights holder that maintains its own translations cuts somewhat against reading third-party translation as freely permitted. The English text is unaffected either way.
- **Citation:** Kessler, R. C., Adler, L., Ames, M., Demler, O., Faraone, S., Hiripi, E., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): A short screening scale for use in the general population. *Psychological Medicine, 35*(2), 245–256.
- **Scoring:** Count of screen-positive items (items 1–3 from "Sometimes", items 4–6 from "Often"); ≥4 positives = positive screen, per the ASRS-v1.1 screener key.

*Correction, 2026-07-29:* psytools up to and including 0.5.3 named the World Health Organization and the Workgroup on Adult ADHD as the rights holders, carried no attribution, and hedged on commercial use. All three were wrong. The record above follows the rights holder's current licensing page.

## AQ-10 — Autism Spectrum Quotient, 10-item adult version (`aq10`)

**License: Free with conditions.** Copyright is held by the Autism Research Centre (ARC), University of Cambridge. ARC distributes its measures free of charge and the AQ-10 is recommended by NICE (CG142) for adult screening in clinical practice. Commercial redistribution is not explicitly licensed — verify with ARC before shipping commercially.

- **Citation:** Allison, C., Auyeung, B., & Baron-Cohen, S. (2012). Toward brief "Red Flags" for autism screening: The Short Autism Spectrum Quotient and the Short Quantitative Checklist in 1,000 cases and 3,000 controls. *Journal of the American Academy of Child & Adolescent Psychiatry, 51*(2), 202–212.
- **Scoring:** 1 point per item in the trait direction (agree on items 1, 7, 8, 10; disagree on the rest); ≥6 suggests specialist referral, per Allison et al. (2012).
- **Audience:** Allison et al. (2012) published three AQ-10 forms — adult, adolescent, and child. psytools bundles the **adult self-report** form only (`audience: ["adult"]`, `respondent: "self"`); the adolescent and child forms are completed by a parent and are not included.

## CES-D — Center for Epidemiologic Studies Depression Scale (`cesd`)

**License: Free.** Developed by Lenore Radloff at the U.S. National Institute of Mental Health; as a work of the U.S. government it is in the public domain and may be used without permission. The English text was taken from the NIDA "Seek, Test, Treat and Retain" data harmonization packet (<https://nida.nih.gov/sites/default/files/Mental_HealthV.pdf>).

- **Citation:** Radloff, L. S. (1977). The CES-D Scale: A self-report depression scale for research in the general population. *Applied Psychological Measurement, 1*(3), 385–401.
- **Scoring:** Sum 0–60 with items 4, 8, 12, 16 reverse-scored. The bundled bands split at the classic cutoff — scores ≥16 indicate elevated depressive symptoms (Radloff, 1977). The cutoff screens for risk; it is not a diagnosis.

## ECR-R — Experiences in Close Relationships-Revised (`ecr-r`)

**License: Research only.** Per the authors, the items "were published in a scientific journal for use in the public domain" and may be used **in non-commercial research without permission; commercial use requires permission** (R. C. Fraley, <https://labs.psychology.illinois.edu/~rcfraley/measures/>). The Turkish adaptation is distributed at <http://www.nebisumer.com> for scientific research only — explicitly not for clinical diagnosis, psychological evaluation, or personnel selection.

- **Citation:** Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000). An item response theory analysis of self-report measures of adult attachment. *Journal of Personality and Social Psychology, 78*(2), 350–365.
- **Turkish adaptation (validated, reproduced):** Selçuk, E., Günaydın, G., Sümer, N., & Uysal, A. (2005). Yetişkin bağlanma boyutları için yeni bir ölçüm: Yakın İlişkilerde Yaşantılar Envanteri-II'nin Türk örnekleminde psikometrik açıdan değerlendirilmesi. *Türk Psikoloji Yazıları, 8*, 1–11. The `tr` locale pack **deviates from the global provenance table**: it reproduces this published adaptation's wording (via nebisumer.com) rather than an AI translation. The Turkish source presents the same 36 items interleaved (odd = anxiety, even = avoidance); the bundled definition keeps the original English item order, with each Turkish wording attached to its matching item — the item-level reverse keys of both published versions agree under this mapping. The pack's description and final instruction sentence are adapted for on-screen rendering.
- **Scoring:** Two 18-item subscales (attachment anxiety: items 1–18; avoidance: items 19–36), 14 items reverse-scored. psytools reports subscale sums (18–126); the published convention is the item mean (divide by 18). No clinical cutoffs exist.

## ERQ — Emotion Regulation Questionnaire (`erq`)

**License: Research only.** Distributed by the authors free of charge for non-commercial research (Stanford Psychophysiology Laboratory, <https://spl.stanford.edu>); commercial use is not licensed.

- **Citation:** Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes: Implications for affect, relationships, and well-being. *Journal of Personality and Social Psychology, 85*(2), 348–362.
- **Scoring:** Two subscales, no reversals: cognitive reappraisal (items 1, 3, 5, 7, 8, 10) and expressive suppression (items 2, 4, 6, 9). psytools reports sums; the published convention is item means. The authors instruct not to change the item order (items 1 and 3 define "positive emotion" and "negative emotion").
- **Turkish note:** A validated Turkish adaptation exists (Ulaşan Özgüle, E. T., 2011, unpublished Ph.D. dissertation, METU; distributed at nebisumer.com), but it uses a **6-point "how true of me" scale and a different item order**, so its wording cannot be attached to this 7-point agreement definition without misrepresenting the validated form. The bundled `tr` pack is therefore an AI translation like the other locales.

## HSPS — Highly Sensitive Person Scale (`hsps`)

**License: Research only.** HSP Scale © 1997 Elaine Aron; the scale is distributed for research use (see Aron & Aron, 1997, and <https://hsperson.com>). The Turkish adaptation is distributed at <http://www.nebisumer.com> for scientific research only — explicitly not for clinical diagnosis, psychological evaluation, or personnel selection.

- **Citation:** Aron, E. N., & Aron, A. (1997). Sensory-processing sensitivity and its relation to introversion and emotionality. *Journal of Personality and Social Psychology, 73*(2), 345–368.
- **Turkish adaptation (validated, reproduced):** Şengül-İnal, G., & Sümer, N. (2017). Exploring the multidimensional structure of sensory processing sensitivity in Turkish samples. *Current Psychology.* The `tr` locale pack **deviates from the global provenance table**: items, title, and option anchors reproduce this published adaptation (via nebisumer.com) rather than an AI translation; only the pack's description and instructions are adapted for on-screen rendering. The Turkish item order matches the original 1:1.
- **Scoring:** Sum over all 27 items (27–189), no reverse-scored items; the literature commonly reports the item mean (divide by 27). Sensory-processing sensitivity is a continuous trait — no clinical cutoffs are defined.

## SWLS — Satisfaction with Life Scale (`swls`)

**License: Free with conditions.** Copyrighted by Ed Diener and co-authors; per the authors' site the scale may be used "without permission or charge by all professionals (researchers and practitioners)" as long as credit is given, **for non-commercial purposes only** (<https://eddiener.com/scales/>). Embedding in commercial products is not licensed.

- **Citation:** Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. *Journal of Personality Assessment, 49*(1), 71–75.
- **Scoring:** Sum 5–35 on a fully labeled 1–7 agreement scale; interpreted against Diener's published groupings (5–9 extremely dissatisfied … 20 neutral … 31–35 extremely satisfied).

## FS — Flourishing Scale (`flourishing`)

**License: Free with conditions.** Same rights statement as the SWLS (copyright Ed Diener and co-authors; free for researchers and practitioners with credit, non-commercial purposes only).

- **Citation:** Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R. (2010). New well-being measures: Short scales to assess flourishing and positive and negative feelings. *Social Indicators Research, 97*(2), 143–156.
- **Scoring:** Sum 8–56; higher scores indicate more self-perceived psychological resources. No published cutoffs.

## K10 — Kessler Psychological Distress Scale, 10 items (`k10`)

**License: Free.** The K10/K6 scales are in the public domain and free for clinical and research use (Kessler and colleagues; distributed via the Harvard NCS site and government health surveys worldwide).

- **Citation:** Kessler, R. C., Andrews, G., Colpe, L. J., Hiripi, E., Mroczek, D. K., Normand, S.-L. T., Walters, E. E., & Zaslavsky, A. M. (2002). Short screening scales to monitor population prevalences and trends in non-specific psychological distress. *Psychological Medicine, 32*(6), 959–976.
- **Scoring:** Items scored 1–5, sum 10–50. The bundled severity groupings (10–19 likely well, 20–24 mild, 25–29 moderate, 30–50 severe) follow the widely used Australian convention; other groupings exist. The full interview administration skips items 3/6 after a "none of the time" answer and scores them 1; this simple form administers all items.

## K6 — Kessler Psychological Distress Scale, 6 items (`k6`)

**License: Free.** Same public-domain status as the K10.

- **Citation:** Kessler et al. (2002), as above. Serious-distress cutoff: Kessler, R. C., Barker, P. R., Colpe, L. J., et al. (2003). Screening for serious mental illness in the general population. *Archives of General Psychiatry, 60*(2), 184–189. Moderate band: Prochaska, J. J., Sung, H.-Y., Max, W., Shi, Y., & Ong, M. (2012). Validity study of the K6 scale as a measure of moderate mental distress based on mental health treatment need and utilization. *International Journal of Methods in Psychiatric Research, 21*(2), 88–97.
- **Scoring:** U.S. convention — items scored 0–4, sum 0–24; ≥13 indicates serious psychological distress, 5–12 moderate distress.

## RSES — Rosenberg Self-Esteem Scale (`rses`)

**License: Free with conditions.** The Rosenberg family (Morris Rosenberg Foundation) permits use of the scale for educational and professional research without charge or explicit permission, with attribution; see the University of Maryland Department of Sociology FAQ (<https://socy.umd.edu/rosenberg-scale-faq>). Commercial use is not explicitly licensed.

- **Citation:** Rosenberg, M. (1965). *Society and the Adolescent Self-Image.* Princeton, NJ: Princeton University Press.
- **Scoring:** Items scored 0–3 (Strongly disagree = 0 … Strongly agree = 3), items 2, 5, 6, 8, 9 reverse-scored, sum 0–30. Scores 15–25 are commonly described as the normal range (University of Maryland scoring guidance).
- **Audience — deviates from the default:** `audience: ["adolescent", "adult"]`. Rosenberg developed the scale on high-school students (*Society and the Adolescent Self-Image*), and the same ten items are the standard self-esteem measure for adolescents and adults alike — the wording does not change between bands.

## The International Personality Item Pool — shared record

Five bundled inventories are drawn from the International Personality Item Pool (IPIP), a public-domain item bank maintained by Lewis Goldberg at the Oregon Research Institute: `mini-ipip`, `mini-ipip6`, `bis-bas`, `ipip-neo-60`, and `ipip-via-r`. What they have in common is recorded once here; each has its own section below.

- **License: Free — the least conditional in this package.** IPIP's permissions page states it in full: "Because the IPIP has been placed in the public domain, permission has already been automatically granted for any person to use IPIP items, scales, and inventories for any purpose, commercial or non-commercial" (<https://ipip.ori.org/newPermission.htm>). There is no attribution requirement, no commercial carve-out, and no need to contact anyone. The scientific citation in each `meta.reference` is scholarly courtesy, not a license condition.
- **Item source.** English item text is transcribed from IPIP's own scoring-key pages, fetched 2026-07-29; each inventory's section names the page it came from and `meta.translationProvenance` carries the URL. Secondary sources and reconstructions from memory were not used.
- **Item rendering.** IPIP publishes item stems without the subject ("Am the life of the party."). psytools renders them as first-person sentences by prepending "I", lower-casing the stem's first letter, and dropping the trailing period — "I am the life of the party". The transformation is mechanical and applied uniformly; it reproduces the shipped `mini-ipip` wording exactly, which is how it was checked.
- **Response scale.** All five use IPIP's 1–5 accuracy scale (Very inaccurate … Very accurate), shared as `ipipAccuracyOptions`.
- **Scoring.** psytools reports subscale **sums**, which is IPIP's own published rule: reverse-keyed items are inverted (6 − answer), then all values in a scale are summed (<https://ipip.ori.org/newScoringInstructions.htm>). Divide by the item count for the item mean if you prefer it. None of the five has clinical cutoffs, so none defines bands.
- **Reverse keys.** IPIP marks reverse-keyed items with a minus sign on its key pages. A mis-keyed item produces a plausible but wrong score that no test would otherwise catch, so the counts are asserted in `test/ipip-inventories.test.ts`: `mini-ipip` 11 of 20, `mini-ipip6` 15 of 24, `bis-bas` 10 of 36, `ipip-neo-60` 23 of 60, `ipip-via-r` 48 of 96.
- **Item order.** IPIP publishes its keys grouped by scale and recommends mixing items when administering them. `bis-bas`, `ipip-neo-60`, and `ipip-via-r` keep the key page's grouped order because no authoritative mixed order is published; shuffle the questions in your own presentation layer if order effects matter for your use.

## Mini-IPIP6 — Big Six personality scale (`mini-ipip6`)

**License: Free.** Public domain via the IPIP grant quoted above — any use, commercial or non-commercial, no permission and no attribution required.

- **Citation:** Sibley, C. G., Luyten, N., Purnomo, M., Mobberley, A., Wootton, L. W., Hammond, M. D., Sengupta, N., Perry, R., West-Newman, T., Wilson, M. S., McLellan, V. L., Hoverd, W. J., & Robertson, A. (2011). The Mini-IPIP6: Validation and extension of a short measure of the Big-Six factors of personality in New Zealand. *New Zealand Journal of Psychology, 40*(3), 142–159.
- **Item source:** IPIP scoring key, <https://ipip.ori.org/MiniIPIP6Key.htm>.
- **Scoring:** Six factor subscales of 4 items each on the 1–5 accuracy scale — extraversion, agreeableness, conscientiousness, neuroticism, openness to experience, honesty-humility. **15 of the 24 items are reverse-keyed** (2 per factor for the first four, 3 for openness, all 4 for honesty-humility). Sums of 4–20 per factor are descriptive; no clinical cutoffs exist, so no bands are defined.
- **Item order — deviates from the group note above:** items 1–20 keep the order the bundled `mini-ipip` uses (Donnellan et al., 2006), so the two inventories line up item for item and share their translations; the four honesty-humility items are appended as 21–24. Every one of the 20 shared items appears verbatim on the Mini-IPIP6 key page with the same key, which is asserted in the tests.
- **Relation to `mini-ipip`:** the Mini-IPIP6 is the Mini-IPIP plus a sixth factor. Both are bundled because the Big Five form is the one most consumers expect; use `mini-ipip6` when honesty-humility matters.

## IPIP BIS/BAS Scales — approach and avoidance motivation (`bis-bas`)

**License: Free.** Public domain via the IPIP grant quoted above.

- **Citation:** Goldberg, L. R., Johnson, J. A., Eber, H. W., Hogan, R., Ashton, M. C., Cloninger, C. R., & Gough, H. G. (2006). The International Personality Item Pool and the future of public-domain personality measures. *Journal of Research in Personality, 40*(1), 84–96. Constructs after Carver, C. S., & White, T. L. (1994). Behavioral inhibition, behavioral activation, and affective responses to impending reward and punishment: The BIS/BAS scales. *Journal of Personality and Social Psychology, 67*(2), 319–333.
- **Item source:** IPIP scoring key, <https://ipip.ori.org/newBIS_BASkey.htm>; scale statistics from the comparison table at <https://ipip.ori.org/newBIS_BAStable.htm>.
- **Scoring:** Four subscales on the 1–5 accuracy scale — BIS/anxiety (10 items, 10–50), BAS fun-seeking (10, 10–50), BAS drive (10, 10–50), BAS reward responsiveness (6, 6–30). **10 of the 36 items are reverse-keyed** (2, 3, 3, and 2 respectively). Descriptive trait scores; no cutoffs, so no bands.
- **These are IPIP's *preliminary* scales, and they are proxies.** IPIP's own pages label them "the Preliminary IPIP Scales Measuring the Constructs in Gray's Behavioral Inhibition and Activation Systems". They measure constructs *similar to* those of Carver and White's BIS/BAS scales — they are not that instrument and are not a translation of it. IPIP reports correlations with the original scales of .69 (BIS), .63 (fun-seeking), .54 (drive), and .41 (reward responsiveness); corrected for unreliability, .86, .92, .72, and .59. The reward-responsiveness proxy is the weakest of the four and its alpha (.68) is the lowest — read that subscale with more caution than the other three. If your protocol requires the Carver and White instrument specifically, these items are not a substitute for it.

## IPIP-NEO-60 — 60-item personality inventory (`ipip-neo-60`)

**License: Free.** Public domain via the IPIP grant quoted above.

- **Citation:** Maples-Keller, J. L., Williamson, R. L., Sleep, C. E., Carter, N. T., Campbell, W. K., & Miller, J. D. (2019). Using item response theory to develop a 60-item representation of the NEO PI-R using the International Personality Item Pool: Development of the IPIP-NEO-60. *Journal of Personality Assessment, 101*(1), 4–15.
- **Item source:** IPIP scoring key, <https://ipip.ori.org/IPIP-NEO-60ScoringKeys.htm>.
- **Scoring:** Five domain subscales of 12 items each on the 1–5 accuracy scale — neuroticism, extraversion, openness to experience, agreeableness, conscientiousness. **23 of the 60 items are reverse-keyed** (4, 1, 7, 6, and 5 by domain). Sums of 12–60 per domain are descriptive; no cutoffs, so no bands.
- **Facets are documented but not scored.** Each domain draws two items from each of six facets (neuroticism: anxiety, anger, depression, self-consciousness, immoderation, vulnerability; extraversion: friendliness, gregariousness, assertiveness, activity level, excitement-seeking, cheerfulness; openness: imagination, artistic interests, emotionality, adventurousness, intellect, liberalism; agreeableness: trust, morality, altruism, cooperation, modesty, sympathy; conscientiousness: self-efficacy, orderliness, dutifulness, achievement-striving, self-discipline, cautiousness). Two items are far too few for a reliable facet score, so psytools scores the five domains only and records the facet composition in `meta.scoringNote`.
- **Naming.** `IPIP-NEO-60` is IPIP's own scale label and the name the authors gave the measure, which is what IPIP's citation guidance says to use. psytools describes it only as measuring constructs *similar to* five broad personality domains, built from public-domain IPIP items — the framing IPIP itself uses. It is **not** a version, edition, or short form of any commercially published inventory, and psytools claims no relationship with or endorsement by any test publisher. "NEO" and related marks belong to their owners; the one place the string appears in psytools' data is inside `meta.reference`, where it is part of the authors' own article title and is reproduced accurately rather than rewritten. A test asserts that psytools' own prose about this instrument stays clear of it.

## IPIP-VIA-R Short Scales — 24 character strengths (`ipip-via-r`)

**License: Free.** Public domain via the IPIP grant quoted above.

- **Citation:** Bluemke, M., Partsch, M. V., Saucier, G., & Lechner, C. M. (2021, December 16). *Human character in the IPIP: Towards shorter, more content-valid, and cross-culturally comparable IPIP-VIA character strength scales.* PsyArXiv. <https://doi.org/10.31234/osf.io/k79qf>. Strengths taxonomy after Peterson, C., & Seligman, M. E. P. (2004). *Character Strengths and Virtues: A Handbook and Classification.* New York: Oxford University Press / Washington, DC: American Psychological Association.
- **Item source:** IPIP scoring key, <https://ipip.ori.org/IPIP-VIA-R_Key.html>; reliability figures from <https://ipip.ori.org/IPIP-VIA-R_Table.html>.
- **Scoring:** Twenty-four strength subscales of 4 items each on the 1–5 accuracy scale, sums of 4–20. **48 of the 96 items are reverse-keyed — exactly half, by design.** Every scale is balanced with two positively and two negatively worded items so that acquiescent responding cancels within the scale; that balance is the instrument's defining feature, and a prorated score computed from three of the four items no longer has it. No cutoffs exist, and scores are most often read as a rank order across a person's strengths rather than against a norm.
- **Reliability is modest for several scales, by construction.** Four items divided between two wordings buys balance at the cost of internal consistency. The authors report McDonald's ω between .57 and .84 across German and UK samples and argue that Cronbach's α is the wrong estimate for a balanced scale of this shape; α runs as low as .42 (self-regulation, UK). Treat single-strength scores as indicative, not precise. The 2–3 week retest reliabilities (.53–.84) are the more useful number for most applications.
- **Scale labels.** IPIP lists several strengths under two or three names (for example "Industry/Perseverance/Persistence"). psytools keeps a descriptive label carrying the alternatives and uses a single short id (`perseverance`); the mapping is visible in the definition.

## Instruments evaluated and not bundled

Instruments considered for inclusion and not shipped, each checked against the rights holder's own published terms. Recorded so the same ground is not covered twice. Today's entries all come from one sweep of widely used ADHD instruments (July 2026); five are blocked by their licensing and one is waiting on a permission request.

- **ASRS v1.1, full 18-item Symptom Checklist** — © New York University and the President and Fellows of Harvard College. A separate product on the same NYU TOV platform from the 6-item screener, and the screener's free-commercial grant does not extend to it: clinical use is routed to a different site, research use requires an institutional signatory, and no commercial tier is offered. Not bundled.
- **ASRS-5 (DSM-5-aligned, 6 items)** — © New York University / NYU Langone Health. A different instrument from the v1.1 screener despite the similar name and length. Only a research-and-academic license is publicly offered, and the rights holder's own product listing calls the scoring rules proprietary. Not bundled.
- **WURS-25 (Wender Utah Rating Scale)** — American Psychiatric Association Publishing (*American Journal of Psychiatry*, 1993). No free-redistribution grant could be found; the "public domain" claim repeated across the web traces to no source. Not bundled.
- **SNAP-IV** — James M. Swanson / University of California, Irvine. Neither the instrument nor the developer's own published history of the scale carries a copyright or license statement at all. The absence of a grant is not a grant. Not bundled.
- **NICHQ Vanderbilt Assessment Scales (parent and teacher forms)** — © 2012 American Academy of Pediatrics, printed "All Rights Reserved" on the instrument. Free to download and administer, which is not the same as licensed to redistribute inside a package. Not bundled.
- **WFIRS-P / WFIRS-S (Weiss Functional Impairment Rating Scale)** — © Margaret Danielle Weiss, MD PhD. Permissive terms, but the notice asks that the author be contacted before translation. **Blocked on a permission request we intend to make, not on a refusal** — so this one may yet arrive.

Hold rights to any of these, or know of a grant we missed? Please write to <samed@luckys.dev> — a correction here is as welcome as one to a bundled instrument.
