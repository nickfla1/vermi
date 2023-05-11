const { Command } = require('commander')
const version = require('../app/version')
const logger = require('../logger')

const program = new Command()

program
  .name('version')
  .argument('<strategy>')
  .option('-p --package-dir <dir>', 'directory containing the package.json file to version bump')
  .action(async (strategy, options) => {
    try {
      await version({
        strategy,
        packageDir: options.packageDir
      })
    } catch (error) {
      logger.error(error.toString())
    }
  })

program.parse(process.argv)
