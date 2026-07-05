# Sources, licenses & translations

psytools is integrated into real products, so this file states precisely — per instrument and per language — where every text comes from, who holds the rights, and what you are allowed to do with it. Each inventory also carries a machine-readable summary in its `meta` field.

**Corrections and requests:** if you find a wording that deviates from an official version, hold rights to an instrument, or want an instrument added, corrected, or removed, email <samed@luckys.dev> or open an issue at <https://github.com/urtuba/psytools/issues>.

## License flags

| Flag | Meaning |
| --- | --- |
| **Free** | Public domain or explicitly free for any use, including commercial products, without permission. |
| **Free with conditions** | Free for clinical and research use as distributed; embedding in commercial products is not explicitly licensed — verify with the rights holder before shipping. |
| **Research only** | Usable in research contexts only. *(No bundled instrument currently carries this flag, and none will be added without it being stated here.)* |

## Translation provenance — read this before clinical use

- **English** item texts are reproduced from the original published instruments.
- **Turkish and German** texts were prepared with AI assistance — **Anthropic Claude, model `claude-fable-5`** — written to follow the published validated translations cited in the tables below, from the model's knowledge of those publications. They have **not been verified word-for-word against the official documents**, and psytools' packaged wording has not been psychometrically re-validated.
- The "Verified" column below means: checked word-for-word against the official source document by a human. Contributions from native speakers with access to the official versions are very welcome.

Validated instruments are only validated for their exact wording. Before clinical or research use, compare the bundled text against the official version for your language and population.

## PHQ-9 — Patient Health Questionnaire-9 (`phq9`)

**Instrument license: Free.** Developed with an educational grant from Pfizer Inc. The copyright holders state that no permission is required to reproduce, translate, display, or distribute the PHQ screeners. Official repository: <https://www.phqscreeners.com>.

- **Citation:** Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure. *Journal of General Internal Medicine, 16*(9), 606–613.
- **Scoring:** Sum 0–27; severity bands per Kroenke et al. (2001). The item-9 `suicidality` flag is an implementation aid, not part of the published instrument.

| Language | Basis | Translation rights | Preparation | Verified |
| --- | --- | --- | --- | --- |
| en | Original instrument (phqscreeners.com) | Free | Reproduced from the original | Yes |
| tr | Validated Turkish PHQ-9 distributed via phqscreeners.com | Free | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |
| de | PHQ-D (Löwe et al.) distributed via phqscreeners.com | Free | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |

## GAD-7 — Generalized Anxiety Disorder Scale (`gad7`)

**Instrument license: Free.** Same rights statement and repository as the PHQ-9 (Pfizer educational grant; no permission required).

- **Citation:** Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: The GAD-7. *Archives of Internal Medicine, 166*(10), 1092–1097.
- **Scoring:** Sum 0–21; severity bands per Spitzer et al. (2006).

| Language | Basis | Translation rights | Preparation | Verified |
| --- | --- | --- | --- | --- |
| en | Original instrument (phqscreeners.com) | Free | Reproduced from the original | Yes |
| tr | Validated Turkish GAD-7 (Konkan et al., 2013) | Free | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |
| de | Validated German GAD-7 (Löwe et al., 2008) | Free | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |

## DASS-21 — Depression Anxiety Stress Scales, short form (`dass21`)

**Instrument license: Free.** The official DASS site states the questionnaires and their translations are in the public domain and may be used without permission. Official site: <http://www2.psy.unsw.edu.au/dass/>.

- **Citation:** Lovibond, S. H., & Lovibond, P. F. (1995). *Manual for the Depression Anxiety Stress Scales* (2nd ed.). Sydney: Psychology Foundation of Australia.
- **Scoring:** Three 7-item subscales; sums doubled to match DASS-42 severity cutoffs, per the DASS manual.

| Language | Basis | Translation rights | Preparation | Verified |
| --- | --- | --- | --- | --- |
| en | Original instrument (DASS site) | Free (public domain) | Reproduced from the original | Yes |
| tr | Turkish DASS-21 (Sarıçam, 2018; Turkish versions listed on the DASS site) | Free (public domain per DASS site) | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |
| de | German DASS (Nilges & Essau, 2015) | Free (public domain per DASS site) | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |

## WHO-5 — World Health Organization Well-Being Index (`who5`)

**Instrument license: Free.** The WHO-5 may be used without permission; official versions and translations are distributed by the Psychiatric Research Unit, Mental Health Centre North Zealand (on behalf of the WHO Regional Office for Europe).

- **Citation:** Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015). The WHO-5 Well-Being Index: A systematic review of the literature. *Psychotherapy and Psychosomatics, 84*(3), 167–176.
- **Scoring:** Raw sum (0–25) × 4, reported 0–100 (higher is better); cutoffs (≤50 reduced well-being, ≤28 likely depression) per Topp et al. (2015).

| Language | Basis | Translation rights | Preparation | Verified |
| --- | --- | --- | --- | --- |
| en | Official English WHO-5 (1998 revision) | Free | Reproduced from the original | Yes |
| tr | Validated Turkish WHO-5 (Eser et al., 2019; official translation exists) | Free | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |
| de | Official German WHO-5 (Psychiatric Research Unit distribution) | Free | AI-assisted (Claude, `claude-fable-5`), following the official version | No |

## ASRS v1.1 — Adult ADHD Self-Report Scale, 6-item screener (`asrs6`)

**Instrument license: Free with conditions.** Copyright is held by the World Health Organization and the Workgroup on Adult ADHD (Harvard Medical School / NYU). The screener is distributed free of charge for clinical and research use. Embedding in commercial products is not explicitly covered by the public distribution terms — verify with the rights holders (Harvard NCS/ASRS distribution) before shipping commercially.

- **Citation:** Kessler, R. C., Adler, L., Ames, M., Demler, O., Faraone, S., Hiripi, E., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): A short screening scale for use in the general population. *Psychological Medicine, 35*(2), 245–256.
- **Scoring:** Count of screen-positive items (items 1–3 from "Sometimes", items 4–6 from "Often"); ≥4 positives = positive screen, per the ASRS-v1.1 screener key.

| Language | Basis | Translation rights | Preparation | Verified |
| --- | --- | --- | --- | --- |
| en | Official ASRS-v1.1 screener (WHO / Workgroup on Adult ADHD) | Free with conditions (as above) | Reproduced from the original | Yes |
| tr | Validated Turkish ASRS (Doğan et al., 2009) | Free with conditions (follows instrument terms) | AI-assisted (Claude, `claude-fable-5`), following the validated version | No |
| de | WHO German ASRS-v1.1 distribution | Free with conditions (follows instrument terms) | AI-assisted (Claude, `claude-fable-5`), following the official version | No |

## AQ-10 — Autism Spectrum Quotient, 10-item adult version (`aq10`)

**Instrument license: Free with conditions.** Copyright is held by the Autism Research Centre (ARC), University of Cambridge. ARC distributes its measures free of charge and the AQ-10 is recommended by NICE (CG142) for adult screening in clinical practice. Commercial redistribution is not explicitly licensed — verify with ARC before shipping commercially.

- **Citation:** Allison, C., Auyeung, B., & Baron-Cohen, S. (2012). Toward brief "Red Flags" for autism screening: The Short Autism Spectrum Quotient and the Short Quantitative Checklist in 1,000 cases and 3,000 controls. *Journal of the American Academy of Child & Adolescent Psychiatry, 51*(2), 202–212.
- **Scoring:** 1 point per item in the trait direction (agree on items 1, 7, 8, 10; disagree on the rest); ≥6 suggests specialist referral, per Allison et al. (2012).

| Language | Basis | Translation rights | Preparation | Verified |
| --- | --- | --- | --- | --- |
| en | Official AQ-10 (Autism Research Centre) | Free with conditions (as above) | Reproduced from the original | Yes |
| tr | Turkish AQ-50 adaptation (Köse et al.), condensed to the AQ-10 item set | Free with conditions; **provisional** — no published Turkish AQ-10 was followed | AI-assisted (Claude, `claude-fable-5`) | No |
| de | Published German AQ translations, condensed to the AQ-10 item set | Free with conditions; **provisional** — no official German AQ-10 was followed | AI-assisted (Claude, `claude-fable-5`) | No |
