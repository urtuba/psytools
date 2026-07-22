# Sources, licenses & translations

psytools is integrated into real products, so this file states precisely — per instrument — where every text comes from, who holds the rights, and what you are allowed to do with it. Each inventory also carries a machine-readable summary in its `meta` field.

**Corrections and requests:** if you find a wording that deviates from an official version, hold rights to an instrument, or want an instrument added, corrected, or removed, email <samed@luckys.dev> or open an issue at <https://github.com/urtuba/psytools/issues>.

## License flags

| Flag | Meaning |
| --- | --- |
| **Free** | Public domain or explicitly free for any use, including commercial products, without permission. |
| **Free with conditions** | Free for clinical and research use as distributed; embedding in commercial products is not explicitly licensed — verify with the rights holder before shipping. |
| **Research only** | Usable in non-commercial research contexts only; not licensed for clinical products, diagnosis, or personnel selection. Carried by the ECR-R, ERQ, and HSPS — see their sections. |

## Translation provenance — read this before clinical use

The same provenance applies to every bundled inventory **except where an inventory's section below states otherwise**. Two inventories deviate: the ECR-R and HSPS Turkish packs reproduce published, validated Turkish adaptations (see their sections) instead of AI translations.

| Language | Text source | Verified against an official version |
| --- | --- | --- |
| en | Reproduced from the original published instrument | Yes |
| tr | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |
| de | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |
| zh | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |
| es | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |

Official validated translations exist for most of these instruments, but they were **not consulted** in preparing the bundled texts, so they are deliberately not cited as sources. The packaged non-English wording has not been checked against them and has not been psychometrically validated. Validated instruments are only validated for their exact wording — before clinical or research use, obtain the official version for your language and compare or replace the text.

Non-English texts live as one file per inventory per language under [`src/locales/<locale>/`](src/locales) — exactly the unit a native-speaker reviewer needs. Verification contributions are very welcome.

This table is the only place translation status is tracked — psytools has no `verified` field, no gating option, and no API to query pack status at runtime; that would overstate a confidence level nobody has confirmed. If you've corrected a specific item's wording for your own use and don't want to wait on an upstream fix, apply it locally with `loadInventory(id, { overrides })` (see the README's [local translation overrides](README.md#local-translation-overrides)) rather than forking the package — or, better, send the correction upstream so everyone benefits.

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
- **Scoring:** Five trait subscales (extraversion, agreeableness, conscientiousness, neuroticism, openness) of 4 items each on a 1–5 accuracy scale, half reverse-keyed; scores 4–20 per trait are descriptive — no clinical cutoffs exist, so no bands are defined.

## ASRS v1.1 — Adult ADHD Self-Report Scale, 6-item screener (`asrs6`)

**License: Free with conditions.** Copyright is held by the World Health Organization and the Workgroup on Adult ADHD (Harvard Medical School / NYU). The screener is distributed free of charge for clinical and research use. Embedding in commercial products is not explicitly covered by the public distribution terms — verify with the rights holders (Harvard NCS/ASRS distribution) before shipping commercially.

- **Citation:** Kessler, R. C., Adler, L., Ames, M., Demler, O., Faraone, S., Hiripi, E., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): A short screening scale for use in the general population. *Psychological Medicine, 35*(2), 245–256.
- **Scoring:** Count of screen-positive items (items 1–3 from "Sometimes", items 4–6 from "Often"); ≥4 positives = positive screen, per the ASRS-v1.1 screener key.

## AQ-10 — Autism Spectrum Quotient, 10-item adult version (`aq10`)

**License: Free with conditions.** Copyright is held by the Autism Research Centre (ARC), University of Cambridge. ARC distributes its measures free of charge and the AQ-10 is recommended by NICE (CG142) for adult screening in clinical practice. Commercial redistribution is not explicitly licensed — verify with ARC before shipping commercially.

- **Citation:** Allison, C., Auyeung, B., & Baron-Cohen, S. (2012). Toward brief "Red Flags" for autism screening: The Short Autism Spectrum Quotient and the Short Quantitative Checklist in 1,000 cases and 3,000 controls. *Journal of the American Academy of Child & Adolescent Psychiatry, 51*(2), 202–212.
- **Scoring:** 1 point per item in the trait direction (agree on items 1, 7, 8, 10; disagree on the rest); ≥6 suggests specialist referral, per Allison et al. (2012).

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
