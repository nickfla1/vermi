const { Command } = require('commander')
const version = require('../app/version')

const program = new Command()

program
  .name('version')
  .argument('<strategy>')
  .option('-p --package-dir <dir>', 'directory containing the package.json file to version bump')
  .action(async (strategy, options) => {
    await version({
      strategy,
      packageDir: options.packageDir
    })
  })

program.parse(process.argv)
