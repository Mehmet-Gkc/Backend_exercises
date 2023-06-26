import express from 'express'
import { getAlbum,findAlbum, postAlbum, deleteAlbum} from './controller/albumController.js'
import { notFound } from './controller/generalController.js'

const app = express()
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hallo Albums!')
})

app.get('/api/albums', getAlbum)
app.get('/api/albums/:year', findAlbum)
app.post('/api/albums', postAlbum)
app.delete('/api/albums/:title', deleteAlbum)
app.use('*', notFound)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})