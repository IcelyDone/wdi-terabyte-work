const express = require('express')
const PORT = process.env.PORT || 1134

const app = express()

app.listen(PORT, () => {
    console.log('The server is running')
})

app.get('/', (req, res) => {
  res.send('This is great!')
})

app.get('/favorite-movie', (req, res) => {
  res.send('Forrest Gump')
})

app.get('/posts/:id', (req,res) => {
  const post = req.params.post
  if (post === 'sequelize') {
    res.send('Nooooo')
  }
  res.send(`Requested: ${req.params.id}`)
})

app.get('/student/:name', (req,res) => {
  const names = ['alane', 'aradom', 'charles', 'ed', 'liz', 'felicity', 'galbert', 'imani', 'jeremy', 'juniper', 'maddy', 'sean', 'daniel', 'solito', 'soren', 'teigan']
  const name = req.params.name
  const cappedName = name.slice(0,1).toUpperCase() + name.slice(1)
  if (names.includes(name.toLowerCase())) {
    res.send(`${cappedName} is in our class.`)
  } else {
    res.send(`Who is ${cappedName}?`)
  }
})

app.get('/year/:num', (req,res) => {
  const num = req.params.num
  if (isNaN(num)) {
    res.send(`Nope, ${num} is not a year`)
  } else if (num == 2019) {
    res.send(`${num} is this year!`)
  } else if (num == 2018) {
    res.send(`${num} was 1 year ago!`)
  } else if (num == 2017) {
    res.send(`${num} is in 1 year!`)
  } else if (num < 2019) {
    res.send(`${num} was ${2019 - num} years ago!`)
  } else if (num > 2019) {
    res.send(`${num} is in ${num - 2019} years!`)
  }
})
