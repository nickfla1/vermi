/** @type {import('fs/promises')} */
const fs = require('fs/promises')
/** @type {import('path')} */
const path = require('path')

const { FileNotFoundError } = require('../errors')

/**
 * Finds and parses a package.json from a directory.
 *
 * @param {string|null} dir Directory where the package.json should be found, defaults to 'process.cwd()'
 * @returns {Promise<import('../../index').MetaPackageJson>} The parsed package.json file
 */
async function readPackageJson (dir = process.cwd()) {
  const filepath = path.join(dir, 'package.json')

  try {
    const content = await fs.readFile(filepath)
    return JSON.parse(content.toString())
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new FileNotFoundError(filepath)
    }

    throw error
  }
}

/**
 * Saves a package.json object as a file.
 *
 * @param {import('../../index').MetaPackageJson} metaPkg package.json to save
 * @param {string} dir Directory where the package.json will be saved, defaults to 'process.cwd()'
 * @returns {Promise<void>}
 */
async function savePackageJson (metaPkg, dir = process.cwd()) {
  const content = JSON.stringify(metaPkg, undefined, 2)

  await fs.writeFile(path.join(dir, 'package.json'), content + '\n')
}

module.exports = { readPackageJson, savePackageJson }
