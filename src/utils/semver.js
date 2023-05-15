const semver = require('semver')
const { SUPPORTED_VERSION_STRATEGIES } = require('../constants')
const { VermiError } = require('../errors')

/**
 * Bumps a version using a versioning strategy.
 *
 * @param {string} originalVersion Raw version found in the package.json
 * @param {import('../../index').VersionStrategy} strategy Versioning strategy used to bump the original version
 * @returns {string} Original version after bump
 */
function versionBump (originalVersion, strategy) {
  const newVersion = semver.inc(originalVersion, strategy)
  if (!newVersion) {
    throw new VermiError(`unexpected. could not bump version '${originalVersion}'`)
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
