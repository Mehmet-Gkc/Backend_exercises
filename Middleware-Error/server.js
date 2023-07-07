import express, { json } from 'express';
import cors from 'cors';
import { isAdult, validateKeys } from './middleware/validateUser.js';
import { sanitizationResponse, validationResponse } from './controller/userController.js';
import { sanitizeName, sortBands, stringsToNumber } from './middleware/sanitization.js';

const app = express()

// express middleware
app.use(json())
app.use(cors())

// routes
app.post("/validateUser", validateKeys, isAdult, validationResponse)
app.post("/sanitizeUser", sanitizeName,stringsToNumber,sortBands,sanitizationResponse)

app.use(function errorHandler(err,req,res,next) {
    console.log("Error during request proccessing", err)
    res.status(err.status || 500)
    res.send({
        error: {
            message: err.message
        }
    })
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})