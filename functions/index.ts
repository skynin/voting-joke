import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
//import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

/*app.get('/', (c) => {
  return c.text('Hello Hono!')
})*/
app.get('/api/joke', (c) => {
  return c.text("It's joke!")
})
app.post('/api/joke', (c) => {
  return c.text('I heard you')
})

// Serve static files from public directory
app.get('/assets/*', serveStatic({ root: './', manifest: {} }))

// Serve frontend
app.get('*', serveStatic({ path: './index.html', manifest: {} }))

export default app

