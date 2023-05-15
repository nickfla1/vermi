# Vermi 🪱

A bare-bone and flexible versioning tool for JavaScript.

> Vermi (IPA: /'vɛrmi/) means "worms" in italian and it comes from the contraction of the words "version" and "me".

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Coverage Status](https://coveralls.io/repos/github/nickfla1/vermi/badge.svg)](https://coveralls.io/github/nickfla1/vermi)

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

Vermi does not currently support versioning monorepos on an higher level.

You can work around this limitation by installing Vermi globally and running it where necessary.

## Usage

### Version bump

#### As CLI

```sh
npx vermi version <strategy>
```

Supported strategies are `patch`, `minor`, `major` and `prerelease`.

> Vermi uses is powered by the [semver] package and follows [SemVer][semver-specs] specifications.

[semver]: https://www.npmjs.com/package/semver
[semver-specs]: https://semver.org/

#### As a library

```js
const vermi = require('vermi')

// ...

try {
    vermi.version({
    strategy: 'minor',
    packageDir: './my/subfolder/',
    })
} catch (error) {
  if (error instanceof vermi.errors.VermiError) {
    // handle error
  }
  
  // ...
}
```

