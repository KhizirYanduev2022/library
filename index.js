const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect("mongodb+srv://Khizir:Khizir123@cluster0.w6mzslx.mongodb.net/library?retryWrites=true&w=majority", {
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))



app.use(express.json())
app.use(require('./route/book.route'))
app.use(require('./route/genre.route'))
app.use(require('./route/client.route'))
app.use(require('./route/review.route'))



app.listen(3000, () => {
    console.log('Сервер запущен успешно')
  })