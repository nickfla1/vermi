class VermiError extends Error {
  /**
   * @param {string} message
   * @param {unknown|undefined} originalError
   */
  constructor (message, originalError) {
    super(message)
    this.name = 'VermiError'

    this.originalError = originalError
  }
}

class InvalidStrategyError extends VermiError {
  constructor (strategy) {
    super(`invalid strategy '${strategy}'`)
  }
}

class FileNotFoundError extends VermiError {
  constructor (file) {
    super(`file '${file}' could not be found`)
  }
}

module.exports = { FileNotFoundError, InvalidStrategyError, VermiError }
