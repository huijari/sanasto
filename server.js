require('dotenv').config()

const express = require('express')
const Telegram = require('telegraf/telegram')
const seedrandom = require('seedrandom')
const { readFileSync } = require('fs')

const token = process.env.SECRET
const telegram = new Telegram(token)
const send = (chat, message) =>
  process.env.DEBUG
    ? console.log({ chat, message })
    : telegram.sendMessage(chat, message)

function getWords(language) {
  const data = readFileSync(`./data/${language}.txt`, 'utf-8').split('\n')
  const rng = seedrandom(new Date().toDateString())
  const words = new Array(10)
    .fill(0)
    .map(() => data[Math.floor(data.length * rng())])
    .map(word => `- ${word}`)
    .join('\n')
  return words
}

const app = express()
app.use(express.json())
app.post(`/${token}`, (request, response) => {
  const { message } = request.body
  if (message && message.text && message.text.startsWith('/')) {
    switch (message.text) {
      case '/en':
      case '/english':
        send(message.chat.id, getWords('english'))
        break
      case '/es':
      case '/spanish':
        send(message.chat.id, getWords('spanish'))
        break
      case '/fi':
      case '/finnish':
        send(message.chat.id, getWords('finnish'))
        break
      case '/fr':
      case '/french':
        send(message.chat.id, getWords('french'))
        break
      case '/ru':
      case '/russian':
        send(message.chat.id, getWords('russian'))
        break
      default:
        send(message.chat.id, 'unknown command')
    }
  }
  response.send('')
})

const listener = app.listen(process.env.PORT, () =>
  console.log('Your app is listening on port ' + listener.address().port)
)
