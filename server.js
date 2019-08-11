const express = require('express')
const Telegram = require('telegraf/telegram')
const seedrandom = require('seedrandom')

const english = require('./data/english.json')

const token = process.env.SECRET
const telegram = new Telegram(token)
const send = (chat, message) => telegram.sendMessage(chat, message)

const rng = seedrandom(new Date().toDateString())
const words = new Array(10)
  .fill(0)
  .map(() => english[Math.floor(english.length * rng())])
  .map(word => `- ${word}`)
  .join('\n')

const app = express()
app.use(express.json())
app.post(`/${token}`, (request, response) => {
  const { message } = request.body
  if (message && message.text && message.text === '/en')
    send(message.chat.id, words)
  response.send('')
})
const listener = app.listen(process.env.PORT, () =>
  console.log('Your app is listening on port ' + listener.address().port)
)
