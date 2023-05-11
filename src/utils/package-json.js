/** @type {import('fs/promises')} */
const fs = require('fs/promises')
/** @type {import('path')} */
const path = require('path')

/**
 * @typedef {object} MetaPackageJson
 * @property {string} version
 */

/**
 * Finds and parses a package.json from a directory.
 *
 * @param {string|null} dir Directory where the package.json should be found, defaults to 'process.cwd()'
 * @returns {Promise<MetaPackageJson|null>} Either the parsed package.json file or null if not found
 */
async function readPackageJson (dir = process.cwd()) {
  try {
    const content = await fs.readFile(path.join(dir, 'package.json'))

    return JSON.parse(content.toString())
  } catch (error) {
    // TODO: use proper logger
    console.error(error)

    return null
  }
}

/**
 * Saves a package.json object as a file.
 *
 * @param {MetaPackageJson} metaPkg package.json to save
 * @param {string} dir Directory where the package.json will be saved, defaults to 'process.cwd()'
 * @returns {Promise<void>}
 */
async function savePackageJson (metaPkg, dir = process.cwd()) {
  const content = JSON.stringify(metaPkg, undefined, 2)

  await fs.writeFile(path.join(dir, 'package.json'), content + '\n')
}

module.exports = { readPackageJson, savePackageJson }
