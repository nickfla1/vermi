const { Command } = require('commander')
const { name, version } = require('./package.json')

const program = new Command()

program
  .name(name)
  .version(version)
  .command('version', 'version bump')
  .executableDir('src/commands/')

program.parse(process.argv)
