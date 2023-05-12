const tap = require('tap')
const fs = require('fs')
const path = require('path')

const version = require('./version')
const { VermiError } = require('../errors')

tap.test('version() updates a package.json file', async (t) => {
  const dir = t.testdir({
    'package.json': '{"name": "foo", "version":"1.2.3"}'
  })

  await version({
    strategy: 'minor',
    packageDir: dir
  })

  const content = fs.readFileSync(path.join(dir, 'package.json')).toString('utf-8')

  t.equal(content, `{
  "name": "foo",
  "version": "1.3.0"
}\n`)
})

tap.test('version() throws if it could not validate the bump strategy', (t) => {
  t.rejects(version({
    strategy: 'not-a-strategy'
  }, VermiError))

  t.end()
})
