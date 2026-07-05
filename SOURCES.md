# Sources, licenses & translations

psytools is integrated into real products, so this file states precisely — per instrument — where every text comes from, who holds the rights, and what you are allowed to do with it. Each inventory also carries a machine-readable summary in its `meta` field.

**Corrections and requests:** if you find a wording that deviates from an official version, hold rights to an instrument, or want an instrument added, corrected, or removed, email <samed@luckys.dev> or open an issue at <https://github.com/urtuba/psytools/issues>.

## License flags

| Flag | Meaning |
| --- | --- |
| **Free** | Public domain or explicitly free for any use, including commercial products, without permission. |
| **Free with conditions** | Free for clinical and research use as distributed; embedding in commercial products is not explicitly licensed — verify with the rights holder before shipping. |
| **Research only** | Usable in research contexts only. *(No bundled instrument currently carries this flag, and none will be added without it being stated here.)* |

## Translation provenance — read this before clinical use

The same provenance applies to every bundled inventory. If an inventory ever deviates (e.g. an official translation is adopted and verified), it will be stated in its section below.

| Language | Text source | Verified against an official version |
| --- | --- | --- |
| en | Reproduced from the original published instrument | Yes |
| tr | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |
| de | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |
| zh | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |
| es | AI translation (Anthropic Claude, `claude-fable-5`) from the original English | No |

Official validated translations exist for most of these instruments, but they were **not consulted** in preparing the bundled texts, so they are deliberately not cited as sources. The packaged Turkish and German wording has not been checked against them and has not been psychometrically validated. Validated instruments are only validated for their exact wording — before clinical or research use, obtain the official version for your language and compare or replace the text. Verification contributions from native speakers are very welcome.

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
