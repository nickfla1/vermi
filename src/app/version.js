/**
 * @typedef {object} Options
 * @property {string} strategy
 * @property {string|null} packageDir
 */

const { SUPPORTED_VERSION_STRATEGIES } = require('../constants')
const { readPackageJson, savePackageJson } = require('../utils/package-json')
const { versionBump, validateBumpStrategy } = require('../utils/semver')

/**
 * Version-bumps a JavaScript package.
 *
 * @param {Options} options
 * @returns {Promise<void>}
 */
async function version (options) {
  if (!validateBumpStrategy(options.strategy)) {
    // TODO: proper logging
    console.log('invalid strategy, supported', SUPPORTED_VERSION_STRATEGIES)
    return
  }

  const pkgJson = await readPackageJson(options.packageDir)
  const bumpedVersion = versionBump(pkgJson.version, options.strategy)

  pkgJson.version = bumpedVersion

  await savePackageJson(pkgJson, options.packageDir)
}

module.exports = version
