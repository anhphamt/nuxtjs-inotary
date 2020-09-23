const { Nuxt, Builder } = require('nuxt')
const axios = require('axios')
const fastify = require('fastify')({
  logger: true,
})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

// Declare a route
fastify.get('/api/validate-recaptcha', async (req, res, next) => {
  const response = await axios.get('https://njim.compamoda.com/api/categories')
  return await res.json(response.data)
})

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000,
  } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  fastify.use(nuxt.render)

  fastify.listen(port, host, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

start()
