const semver = require('semver')
const { SUPPORTED_VERSION_STRATEGIES } = require('../constants')

/**
 * Bumps a version using a versioning strategy.
 *
 * @param {string} originalVersion Raw version found in the package.json
 * @param {semver.ReleaseType} strategy Versioning strategy used to bump the original version
 * @returns {string} Original version after bump
 */
function versionBump (originalVersion, strategy) {
  const newVersion = semver.inc(originalVersion, strategy)
  if (!newVersion) {
    // TODO: handle error
  }

  return newVersion
}

/**
 * Validates a version strategy string.
 *
 * @param {string} strategy Raw bump strategy to validate
 * @returns {boolean} True if the strategy is valid
 */
function validateBumpStrategy (strategy) {
  return SUPPORTED_VERSION_STRATEGIES.includes(strategy)
}

module.exports = { validateBumpStrategy, versionBump }
