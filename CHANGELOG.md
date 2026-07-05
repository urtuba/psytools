# Changelog

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
