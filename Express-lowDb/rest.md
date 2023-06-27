# REST
- Abkürzung für "Representational State Transfer"

- REST ist eine Art von Webarchitektur, die HTTP nutzt. Es geht hauptsächlich um Ressourcen bzw. Daten. 
- Ein REST-Server bietet Zugang zu diesen Ressourcen und ein REST-Client (z.B. Browser) verändert oder liest sie.

- Hauptmerkmal einer REST API ist, dass HTTP-Methoden verwendet werden. Z.B. 'GET' zum Abrufen, 'POST' zum Erstellen, 'PUT' zum Aktualisieren und 'DELETE' zum Löschen von Daten.

## Beispiel (Ausschnitt)

### REST-Server (express)

```javascript
...

// die Daten/Ressourcen
// (für gewöhnlich aus einer Datenbank geladen und mehr als nur ein Datensatz)
let data = {name: 'Max'};

// Eine GET Route, zum Bereitstellen der Daten
app.get('/data', (req, res) => {
  res.send(data);
});

// Eine PUT Route zum Ändern der Daten
app.put('/data', (req, res) => {
  data = req.body;
  res.send(data);
});

...
```

### REST-CLIENT, der eine Anfrage an diesen Server sendet
Der Rest-Client könnte z.B. eine React-App sein, die im Browser läuft

```javascript

// Eine GET Anfrage zu Lesen der Daten
axios.get('http://localhost:3000/data')
  .then(response => {
    console.log(response.data); // => {name: 'Max'};
  });

// Eine PUT Anfrage, zum Verändern der Daten
// hier wird der Name von ursprünglich 'Max' zu 'Anna' verändert
axios.put('http://localhost:3000/data', {name: 'Anna'})
  .then(response => {
    console.log(response.data); // =>{name: 'Anna'};
  });