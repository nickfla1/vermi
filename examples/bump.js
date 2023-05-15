const vermi = require('../index')

async function main () {
  await vermi.version({
    strategy: 'major'
  })

  console.log('version bumped, see package.json contents')
}

main().catch(console.error)
