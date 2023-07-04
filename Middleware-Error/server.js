const express = require('express')
const app = express()

app.use('/', (request, response) => {
    // res.send => sendet den Text als Antwort an den Client
    response.send('Hallo welt!')
})

app.get('/contact', (req, res) => {
    // res.send('you are on the path conatc')
    res.send(`you are on the path conatc', ${error.message}`)
})

app.get('/random.text', (req, res) => {
    res.sendFile('random.text')
})

app.get('/contact/json', (req, res) => {
    // res.send() => allgemeine Funktion, die erkennt was man macht
    res.send({ "completed": "false", "todo": "sleep" })
})

app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
})