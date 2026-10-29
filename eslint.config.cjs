const { defineConfig } = require('eslint/config')
const neostandard = require('neostandard')
const globals = require('globals')

module.exports = defineConfig([
  {
    ignores: ['dist']
  },
  neostandard({
    globals: {
      ...globals.browser,
      ...globals.node
    }
  })
])
