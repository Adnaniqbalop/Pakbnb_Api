const express = require('express')
const data = require('./apidata')

const api = express()

const HOST = 'localhost'
const PORT = 8888

api.get('/', (req,res) => {
    res.send('Welcome to this awesome API!')
})

api.get('/User', (req,res) => {
    res.status(200).json(data)
})


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))