import express from 'express';
import { connectMongoose } from './util/connectMongoose.js';
import 'dotenv/config';
import cors from 'cors';
import generalRouter from './routes/generalRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import reservationRouter from './routes/reservationRoutes.js';


const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(express.json())

app.use(roomRouter)
app.use(reservationRouter)
app.use(generalRouter)

const mongooseConnect = await connectMongoose()

if(mongooseConnect) {
    app.listen(PORT, () => {
        console.log(`Listen on port: ${PORT}`)
    })
} else {
    console.error("Datenbankverbindung hat nicht geklappt.")
}