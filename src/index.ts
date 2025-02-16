import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/joke', (c) => {
  return c.text("It's joke!")
})
app.post('/api/joke', (c) => {
  return c.text('I heard you')
})


export default app

