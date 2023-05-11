# Vermi 🪱

A bare-bone and flexible versioning tool for JavaScript.

> Vermi (IPA: /'vɛrmi/) means "worms" in italian and it comes from contraction of the words "version" and "me".

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

Vermi can be either installed globally or locally as a dev dependency.

```sh
npm install vermi -g
npm install vermi --save-dev

yarn global add vermi
yarn add vermi -D

pnpm add vermi -g
pnpm add vermi -D
```

## Monorepo support

Vermi does not currently support versioning monorepos on an higher.

You can work around this limitation by installing Vermi globally and running it where necessary.

## Usage

### Version bump

```sh
npx vermi version <strategy>
```

Supported strategies are `patch`, `minor`, `major` and `prerelease`.

> Vermi uses is powered by the [semver] package and follows [SemVer][semver-specs] specifications.

[semver]: https://www.npmjs.com/package/semver
[semver-specs]: https://semver.org/