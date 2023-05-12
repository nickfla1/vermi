const tap = require('tap')
const { VermiError } = require('../errors')

tap.test('readPackageJson() can load json files', (t) => {
  const packageJson = t.mock('./package-json.js', {
    'fs/promises': {
      readFile: () => Promise.resolve('{"name": "foo"}')
    }
  })

  const result = packageJson.readPackageJson()
  t.resolveMatch(result, { name: 'foo' })

  t.end()
})

tap.test('readPackageJson() throws on non-json files', (t) => {
  const packageJson = t.mock('./package-json.js', {
    'fs/promises': {
      readFile: () => Promise.resolve('not-json')
    }
  })

  const result = packageJson.readPackageJson()
  t.rejects(result, SyntaxError)

  t.end()
})

tap.test('readPackageJson() throws on not found errors', (t) => {
  const packageJson = require('./package-json')

  const result = packageJson.readPackageJson('./not-existing/dir/')
  t.rejects(result, VermiError)

  t.end()
})

tap.test('savePackageJson() can write json files', (t) => {
  let resultContent

  const packageJson = t.mock('./package-json.js', {
    'fs/promises': {
      writeFile: (_, content) => {
        resultContent = content
        Promise.resolve()
      }
    }
  })

  const result = packageJson.savePackageJson({ name: 'foo', version: '1.2.3' })
  t.resolves(result)
  t.equal(resultContent, `{
  "name": "foo",
  "version": "1.2.3"
}
`)

  t.end()
})
