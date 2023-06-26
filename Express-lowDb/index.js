import express, { request, response } from "express";
import db from "./lowdbConfig.js";

await db.read(); // db.data bekommt Inhalt von db.json

// *** Express-App erstellen ***

const app = express();
const PORT = 3000;

// Alle Filme an Client senden
app.get("/", (request,response) => {
    response.send(db.data)
})

// zufälligen Film senden
app.get("/random", (request,response) => {
    // erzeuge einen zufälligen Index für das array
    const randomIndex = Math.floor(Math.random() * db.data.length)

    // speichere in randomMovie ein zufälliges Element
    const randomMovie = db.data[randomIndex];
    response.send(randomMovie)
})

// Film mit bestimmten Titel senden 
app.get("/title", (request, response) => {
    const movieTitle = request.params.title;

    // .toLowerCase: damit wir groß und Kleinschreibung ignorieren
    const movie = db.data.fimd(movie => {
        return movie.title.toLowerCase() === movieTitle.toLowerCase()
    })
})

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`)
})