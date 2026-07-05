# Sources & credits

The inventories bundled with psytools implement published, freely usable instruments. This file records where each one comes from, its usage terms, and how the bundled translations were prepared — so you can judge their provenance and cite the original authors properly.

**Corrections and requests:** if you find a wording that deviates from an official version, hold rights to an instrument, or want an instrument added or removed, please email <samed@luckys.dev> or open an issue at <https://github.com/urtuba/psytools/issues>.

## Translation policy

- English texts follow the original published instruments.
- Turkish and German texts follow published validated translations where available; minor editorial normalization (punctuation, quotation style) may have been applied.
- Translations have **not** been re-validated in this packaged form. Before clinical or research use, verify the wording against the official version for your language and population.

## PHQ-9 — Patient Health Questionnaire-9 (`phq9`)

- **Original:** Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure. *Journal of General Internal Medicine, 16*(9), 606–613.
- **Rights:** Developed with an educational grant from Pfizer Inc.; free to use, no permission required. Official screener repository: <https://www.phqscreeners.com>.
- **Translations:** Turkish and German texts follow the validated translations distributed via the official PHQ screeners; the German wording follows the PHQ-D (Löwe et al.).
- **Scoring:** Sum of 9 items (0–27); severity bands per Kroenke et al. (2001). Item 9 (self-harm ideation) raises a `suicidality` flag — this threshold behavior is an implementation aid, not part of the published instrument.

## GAD-7 — Generalized Anxiety Disorder Scale (`gad7`)

- **Original:** Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: The GAD-7. *Archives of Internal Medicine, 166*(10), 1092–1097.
- **Rights:** Developed with an educational grant from Pfizer Inc.; free to use, no permission required. Official screener repository: <https://www.phqscreeners.com>.
- **Translations:** Turkish text follows the validated Turkish adaptation (Konkan et al., 2013); German text follows the validated German version (Löwe et al., 2008).
- **Scoring:** Sum of 7 items (0–21); severity bands per Spitzer et al. (2006).

## DASS-21 — Depression Anxiety Stress Scales, short form (`dass21`)

- **Original:** Lovibond, S. H., & Lovibond, P. F. (1995). *Manual for the Depression Anxiety Stress Scales* (2nd ed.). Sydney: Psychology Foundation of Australia.
- **Rights:** Public domain per the authors; official site and translation index: <http://www2.psy.unsw.edu.au/dass/>.
- **Translations:** Turkish text follows the validated short-form adaptation (Sarıçam, 2018); German text follows the published German DASS (Nilges & Essau, 2015).
- **Scoring:** Three 7-item subscales (depression, anxiety, stress); sums doubled to match DASS-42 severity cutoffs, per the DASS manual.
