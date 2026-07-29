# Changelog

## [0.6.0](https://github.com/urtuba/psytools/compare/v0.5.4...v0.6.0) (2026-07-29)


### ⚠ BREAKING CHANGES

* psytools is no longer offered as a wholly MIT-licensed package, and `package.json`'s license field no longer reads `"MIT"`.

  **There are no API changes.** What changes is the terms you hold this package under.

  The MIT text itself is unchanged, byte for byte. What changed is the scope it claims: `LICENSE` now states that the MIT grant covers psytools' own source, build output, type definitions, scoring engine, and schema — and that it does not cover the titles, descriptions, instructions, item wording, and answer-option labels of the third-party instruments the package bundles, in any language. Those are licensed by each instrument's own rights holder.

  If an automated license scan cleared psytools on the strength of the `"MIT"` string, that approval no longer describes the package, and the scan will likely now flag it for manual review. **That flag is correct.** The package has always bundled third-party instrument text that the MIT grant never covered, and the old field overstated what recipients received. Correcting the field is the point of this release.

  **What to check before upgrading** — whether the specific instruments you use are licensed for what you do with them:

  - **Free, including commercial use:** PHQ-9, GAD-7, DASS-21, WHO-5, AUDIT, Mini-IPIP, CES-D, K10, K6.
  - **Free including commercial use, attribution mandatory:** the ASRS-v1.1 screener. Its required credit line ships in `meta.attribution` — render it verbatim wherever the screener or its results appear.
  - **Not licensed for commercial use:** ECR-R, ERQ and HSPS are for non-commercial research only; SWLS and the Flourishing Scale are licensed by their rights holder for non-commercial purposes only.
  - **Commercial use not addressed either way by the rights holder:** AQ-10, RSES.

  [SOURCES.md](https://github.com/urtuba/psytools/blob/main/SOURCES.md) carries the full per-instrument record — rights holder, exact conditions, citation, and translation provenance. For any specific instrument, that file is the answer, not this one.

  Hold rights to a bundled instrument, or know of a grant recorded here incorrectly? Please write to <samed@luckys.dev> or open an issue.

### Features

* scope the MIT license to the code, not the bundled instrument text ([1687695](https://github.com/urtuba/psytools/commit/168769512ccbdde0a9c973747d97010f0f67745d))

## [0.5.4](https://github.com/urtuba/psytools/compare/v0.5.3...v0.5.4) (2026-07-29)


### Features

* **core:** target-audience and respondent axes on assessment definitions ([0850057](https://github.com/urtuba/psytools/commit/085005777f3653676846aec4bddd98840d9481ff))


### Bug Fixes

* **inventories:** name the correct asrs6 rights holder and carry its attribution ([269c37d](https://github.com/urtuba/psytools/commit/269c37d21b774e72f16f87e375d197e52c474e1a))

## [0.5.3](https://github.com/urtuba/psytools/compare/v0.5.2...v0.5.3) (2026-07-22)


### Features

* **core:** extend the category vocabulary with distress and self-esteem ([92853e7](https://github.com/urtuba/psytools/commit/92853e7e8e90af1caeb8d42d413f0087a5ed2ca3))
* **core:** first-class categories on assessment definitions ([bdb2bd8](https://github.com/urtuba/psytools/commit/bdb2bd8ec46ade152261d90914970c4d5d600b70))
* **inventories:** add CES-D depression scale (en, tr, de, zh, es) ([d69cd2f](https://github.com/urtuba/psytools/commit/d69cd2f594fcf0fa0fb3919e210b86399ce655be))
* **inventories:** add ECR-R, ERQ, and HSPS with validated Turkish adaptations ([fe090fc](https://github.com/urtuba/psytools/commit/fe090fce05a115513bb6d9366791c9ac32665ba8))
* **inventories:** add SWLS, Flourishing Scale, K10, K6, and RSES (en, tr, de, zh, es) ([72021af](https://github.com/urtuba/psytools/commit/72021af05adb880b303d91c028538a8729a4b5c3))

## [0.5.2](https://github.com/urtuba/psytools/compare/v0.5.1...v0.5.2) (2026-07-09)


### Features

* **i18n:** local translation override packs ([76ae2eb](https://github.com/urtuba/psytools/commit/76ae2eb25df97a1396682d477946cab8c0c0853e))

## [0.5.1](https://github.com/urtuba/psytools/compare/v0.5.0...v0.5.1) (2026-07-05)


### Features

* **inventories:** ship missing-data policies with bundled inventories ([3d70d43](https://github.com/urtuba/psytools/commit/3d70d433e2a71ca947d10b517c8a46a1338878c0))

## [0.5.0](https://github.com/urtuba/psytools/compare/v0.4.0...v0.5.0) (2026-07-05)


### ⚠ BREAKING CHANGES

* **core:** loadInventory is async and returns an English-only assessment unless locales are requested; named definition exports (phq9, gad7, ...) now contain English only.

### Features

* **core:** lazy locale packs — data minimization by default ([c75c1a4](https://github.com/urtuba/psytools/commit/c75c1a4dd5c0028f73541509338c681746ad9a40))
* **core:** pickLocales utility and per-inventory subpath exports ([8fc1f6b](https://github.com/urtuba/psytools/commit/8fc1f6b4fe3ec63ef4cd90fb195111b46c4abbe0))

## [0.4.0](https://github.com/urtuba/psytools/compare/v0.3.2...v0.4.0) (2026-07-05)


### ⚠ BREAKING CHANGES

* **core:** evaluate(definition, answers, evaluatorFn) and Assessment#evaluate(response, evaluatorFn, opts) no longer accept a positional evaluator; localize() is renamed localizeText().

### Features

* **core:** v1 API pass and missing-data scoring policy ([1494677](https://github.com/urtuba/psytools/commit/1494677157ec43cf3f76a460ae290012e56d0cc7))
* **i18n:** add Simplified Chinese and Spanish translations to all inventories ([34a8e34](https://github.com/urtuba/psytools/commit/34a8e347104eebde37ed5bebef12ceb2baddd86d))

## [0.3.2](https://github.com/urtuba/psytools/compare/v0.3.1...v0.3.2) (2026-07-05)


### Features

* **inventories:** add AUDIT alcohol use screener (en/tr/de) ([0eb4e7e](https://github.com/urtuba/psytools/commit/0eb4e7ee27b2c5d918b08939f007011439a8db42))
* **inventories:** add Mini-IPIP Big Five personality scale (en/tr/de) ([85ec59f](https://github.com/urtuba/psytools/commit/85ec59f097759ce46c6fdc001cfd220d8cec1a27))


### Bug Fixes

* **inventories:** carry license flags and translation provenance in meta ([20748d7](https://github.com/urtuba/psytools/commit/20748d7936b1a3716ab8618ac7749ec466db6937))
* **inventories:** stop crediting unconsulted translation sources ([e5a7793](https://github.com/urtuba/psytools/commit/e5a7793817264dab778f0bfaf4b1c718d00a96f1))

## [0.3.1](https://github.com/urtuba/psytools/compare/v0.3.0...v0.3.1) (2026-07-05)


### Features

* **core:** add count scoring kind for threshold-based screeners ([7b7e97a](https://github.com/urtuba/psytools/commit/7b7e97a2014e92d084cd7805014751e2480a3e05))
* **core:** support multiplier in sum scoring ([ba634dd](https://github.com/urtuba/psytools/commit/ba634dd4fb03670630b97f250b2df4a5671b9ccf))
* **inventories:** add AQ-10 autism spectrum screener (en/tr/de) ([28bfbce](https://github.com/urtuba/psytools/commit/28bfbce4b5e47b59428de479df61fe28d288fce1))
* **inventories:** add ASRS v1.1 adult ADHD screener (en/tr/de) ([971afd1](https://github.com/urtuba/psytools/commit/971afd1637c9cbaf0eb3097a3f45540b9ae983f4))
* **inventories:** add WHO-5 Well-Being Index (en/tr/de) ([89c2ccf](https://github.com/urtuba/psytools/commit/89c2ccf08966006968bfd5c3842facbbaddb9ac4))


### Bug Fixes

* **core:** validate answer values and question ids in evaluate ([3c3f638](https://github.com/urtuba/psytools/commit/3c3f638065d9a61fdcfc8e38791e34cb1cd280ab))

## [0.3.0](https://github.com/urtuba/psytools/compare/v0.2.0...v0.3.0) (2026-07-05)


### ⚠ BREAKING CHANGES

* PsykitError is now PsytoolsError.

### Bug Fixes

* rename package to psytools ([1b3e342](https://github.com/urtuba/psytools/commit/1b3e3423df47afc90c523fb1862245b28b72c304))

## [0.2.0](https://github.com/urtuba/psykit/compare/v0.1.0...v0.2.0) (2026-07-05)


### ⚠ BREAKING CHANGES

* **core:** Assessment#evaluate throws incomplete_response for partially answered AssessmentResponse instances.

### Features

* **core:** add Assessment and AssessmentResponse classes with evaluation engine ([48d63b2](https://github.com/urtuba/psykit/commit/48d63b2e4c05f3563bd2aeba917ae88ae16bfd03))
* **core:** add serializable assessment data model and locale helpers ([57c0d54](https://github.com/urtuba/psykit/commit/57c0d546f30271821947485a2b1b2659c299beb4))
* **core:** track response lifecycle as a state machine and gate evaluation ([6c99a14](https://github.com/urtuba/psykit/commit/6c99a1419e5bbe9be3d0bbaa4075b773db286ed3))
* **inventories:** add PHQ-9, GAD-7, DASS-21 in English, Turkish, German ([e964ce6](https://github.com/urtuba/psykit/commit/e964ce6ca667a1ec1068a4496988996d05db8c1c))
* **schema:** publish JSON Schema for assessment definitions ([96eb9d4](https://github.com/urtuba/psykit/commit/96eb9d48d3de3caba10b389b3cae702397b74ccc))
