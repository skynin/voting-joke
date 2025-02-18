import { Hono } from 'hono'
import { handle } from "hono/cloudflare-pages"

const app = new Hono()

const route = app.get('/api/joke', (c) => {
  return c.json({value:"It's joke! api/joke"})
}).get('/api/moke', (c) => {
  return c.json({value:"It's moke! /api/moke"})
})

export type ApiJoke = typeof route

export const onRequest = handle(app)
