const chalk = require('chalk')

const log = (icon, msg) => console.log(`• ${icon} :: ${msg}`)

const logger = {
  error: (msg) => log(chalk.red('ERR'), chalk.cyan(msg)),
  info: (msg) => log(chalk.blue('INF'), chalk.cyan(msg)),
  warn: (msg) => log(chalk.orange('WRN'), chalk.cyan(msg))
}

module.exports = logger
