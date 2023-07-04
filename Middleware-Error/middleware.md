---
Titel: Vorstellen - Middleware
Thema: 'Weiß'
---



# Middleware

"Eine Funktion, die zwischen einer empfangenen Anfrage und einer gesendeten Antwort ausgeführt wird"


- Using middleware: `app.use(<middleware>)`, `app.use(<path>, <middleware>)`
- Überprüfung der verwendeten Middleware: `logger()`, `express.json()`
- Middleware lesen (Verwendungsreihenfolge zählt)
- Signatur der Middleware-Funktion: `(req, res, next) => { ... }`
- Project organization II: The `middleware` directory



---




# was ist eine middleware?

> sind Funktionen in Express, die zwischen dem Empfangen einer Anfrage (request) und dem Senden einer Antwort (response) ausgeführt werden. 
> Sie bieten eine Möglichkeit, den Anfragen- und Antwortzyklus zu erweitern oder zu verändern.

- kann integriert werden oder von Drittnbieter stammen
- express verfügt über begrenzte Funktionalität, deshalb besteht express-app größtenteils aus mehreren Middleware-Funktionsaufrufen

Über Middlewarefunktionen lassen sich die folgenden Tasks ausführen:

    - aushändigen von statischen Dateien
    - Umgang mit Cookies &
    - Sessions
    - CORS
    - Cache-Handling
    - autorisierung usw


> jeder Request der über express rein kommt, durchläuft erstmal die middleware bevor er zu einen http-handler gelangt

---

# Wie erstellt man eine middleware?

In Express können Middleware-Funktionen mit der Methode `app.use()` registriert werden. 
Die einfachste Verwendung ist `app.use(<middleware>)`, wobei <middleware> die zu verwendende Middleware-Funktion ist. 
Diese wird dann für jede eingehende Anfrage aufgerufen. 
Eine spezifischere Verwendung ermöglicht `app.use(<path>, <middleware>)`, wobei <path> den Pfad angibt, für den die Middleware angewendet werden soll.

Die Middleware-Funktionen haben eine bestimmte Signatur, nämlich `(req, res, next) => { ... }`. 
_req_ ist das Anfrageobjekt, 
_res_ das Antwortobjekt und 
_next_ ist eine Funktion, die aufgerufen wird, um die Kontrolle an die nächste Middleware-Funktion zu übergeben. 

Middleware-Funktionen können Änderungen an der Anfrage oder der Antwort vornehmen und/oder weitere Middleware-Funktionen aufrufen.

Um eine Middleware in Express.js zu erstellen, müssen wir nur eine Funktion schreiben, die uns 3 Argumente liefert, **request**, **response** und **next**.

Wenn du die Funktion `next()` nicht aufrufst, stelle sicher, dass du eine `response` sendest, sonst antwortet dein Server nicht!

---

### Ein Beispiel einer Middleware-Funktion

```javascript
// Beispiel-Middleware-Funktion für Protokollierung
const logger = (req, res, next) => {
  console.log(`Anfrage empfangen: ${req.method} ${req.url}`);
  next(); // Ruft die nächste Middleware-Funktion auf
};

// Registrierung der Middleware mit app.use()
app.use(logger);
```

---

Einige Beispiele für häufig verwendete Middleware-Funktionen sind `logger()` und `express.json()`. 
Die `logger()`-Middleware protokolliert Informationen über jede Anfrage und deren Verarbeitung, 
während `express.json()` die Anfrageinhalte im JSON-Format verarbeitet.

---

# die Reihenfolge ist wichtig

Die **Reihenfolge**, in der Middleware-Funktionen registriert werden, **ist wichtig**, da sie nacheinander in der Reihenfolge ihrer Registrierung ausgeführt werden. 
Middlewarefunktionen, die zuerst geladen werden, werden auch zuerst ausgeführt.

---

Bei der Organisation eines Express-Projekts kann es hilfreich sein, die Middleware-Funktionen in einem **separaten Verzeichnis** zu speichern. 
Dies erleichtert die **Wiederverwendbarkeit** und die **Aufteilung des Codes in verschiedene Teile** der Anwendung.


Insgesamt bieten **Middleware-Funktionen in Express** eine flexible Möglichkeit, den Anfragen- und Antwortzyklus anzupassen und zu erweitern. 
Sie ermöglichen die **Verarbeitung** von Anfragen vor oder nach der Hauptverarbeitung und bieten damit eine Vielzahl von Einsatzmöglichkeiten 
zur **Verbesserung** der Funktionalität und **Erweiterbarkeit** von Express-Anwendungen.


---

# cors()

> Ermöglicht es dir, CORS mit verschiedenen Optionen zu aktivieren

Bei Express ist die CORS-Middleware dafür verantwortlich, das Cross-Origin Resource Sharing (CORS) zu handhaben. 
CORS ist ein Sicherheitsmechanismus, der in Webbrowsern implementiert ist und die Kommunikation zwischen verschiedenen 
Domains einschränkt, um potenzielle Sicherheitsrisiken zu minimieren.

Die CORS-Middleware in Express ermöglicht es, dass eine Website auf Ressourcen **von einer anderen Domain zugreifen** kann. 
Wenn eine Anfrage von einem Client an einen Server gesendet wird, überprüft der Server, ob die Anfrage von einer anderen 
Domain stammt als die, auf der die Ressource gehostet ist. 
Wenn dies der Fall ist, greift _CORS_ ein und setzt bestimmte _HTTP-Header_ in der Serverantwort, um die Anfrage zu 
autorisieren oder abzulehnen.

- cors muss installiert werden mit: `npm install cors`


```javascript
import express from 'express'
import cors from 'cors'

const app = express()

// CORS-Middleware aktivieren
app.use(cors())

// Eine Beispielroute
app.get('/api/daten', (req, res) => {
  // Hier kannst du deine Logik für den Datenabruf implementieren
  res.json({ message: 'Hallo Welt' })
})

// Server starten
app.listen(3000, () => {
  console.log('Der Server ist auf dem Port 3000 gestartet.')
})
```

In diesem Beispiel aktivieren wir die CORS-Middleware durch app.use(cors()). Dadurch werden die erforderlichen CORS-Header automatisch in die Antwort eingefügt. Der Server ist dann in der Lage, Anfragen von einer beliebigen Domain zu akzeptieren.

Die CORS-Middleware bietet auch Optionen, um die Konfiguration anzupassen, wie z.B. die erlaubten Domains, HTTP-Methoden oder benutzerdefinierte Header. Diese können in der Middleware-Konfiguration angegeben werden, um das Verhalten anzupassen.

Durch die Verwendung der CORS-Middleware kannst du also die Cross-Origin-Anfragen in deiner Express-Anwendung verwalten und sicherstellen, dass deine APIs sicher und kontrolliert zugänglich sind.


[video middleware](https://blog-webdevsimplified-com.translate.goog/2019-12/express-middleware-in-depth/?_x_tr_sl=auto&_x_tr_tl=de&_x_tr_hl=de)

[express.com](https://expressjs.com/de/guide/using-middleware.html)

[Express middleware](https://blog-logrocket-com.translate.goog/express-middleware-a-complete-guide/?_x_tr_sl=auto&_x_tr_tl=de&_x_tr_hl=de#what-is-express-middleware)