import express from 'express'
import { getAlbum } from './controller/albumController.js'
import { notFound } from './controller/generalController.js'

const app = express()
app.use(express.json());

app.use('/', (request, response) => {
    response.send('Hallo welt!')
})

app.get('/albums', getAlbum)

app.use('*', notFound)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})