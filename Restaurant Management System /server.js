import express from 'express';
import 'dotenv/config';
import { connectMongoose } from './util/connectMongoose.js';
import orderRouter from './routes/orderRoutes.js';

const port = process.env.PORT;
const app = express();

app.use(express.json())

app.use(orderRouter)

const mongooseConnect = await connectMongoose()

if(mongooseConnect) {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    } )
} else {
    console.error("Datenbankverbindung hat nicht geklappt.")
}