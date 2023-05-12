/**
 * @typedef {object} Options
 * @property {string} strategy
 * @property {string|null} packageDir
 */

const { InvalidStrategyError } = require('../errors')
const { readPackageJson, savePackageJson } = require('../utils/package-json')
const { versionBump, validateBumpStrategy } = require('../utils/semver')

/**
 * Version-bumps a JavaScript package.
 *
 * @param {Options} options
 * @returns {Promise<void>} Returns true if the operation was successful
 */
async function version (options) {
  if (!validateBumpStrategy(options.strategy)) {
    throw new InvalidStrategyError(options.strategy)
  }

  const pkgJson = await readPackageJson(options.packageDir)
  const bumpedVersion = versionBump(pkgJson.version, options.strategy)

  pkgJson.version = bumpedVersion

  await savePackageJson(pkgJson, options.packageDir)
}

module.exports = version
