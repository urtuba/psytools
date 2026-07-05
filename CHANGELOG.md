# Changelog

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
