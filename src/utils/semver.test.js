const tap = require('tap')
const { versionBump, validateBumpStrategy } = require('./semver')

tap.test('versionBump()', (t) => {
  t.equal(versionBump('1.0.0', 'major'), '2.0.0')
  t.equal(versionBump('1.0.0', 'minor'), '1.1.0')
  t.equal(versionBump('1.0.0', 'patch'), '1.0.1')
  t.equal(versionBump('1.0.0', 'prerelease'), '1.0.1-0')
  t.equal(versionBump('1.0.0-1', 'prerelease'), '1.0.0-2')

  t.throws(() => {
    versionBump('not-a-version', 'major')
  })

  t.end()
})

tap.test('validateBumpStrategy()', (t) => {
  t.equal(validateBumpStrategy('major'), true)
  t.equal(validateBumpStrategy('minor'), true)
  t.equal(validateBumpStrategy('patch'), true)
  t.equal(validateBumpStrategy('prerelease'), true)
  t.equal(validateBumpStrategy('not-a-strategy'), false)

  t.end()
})
