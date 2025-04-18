// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Ota käyttöön CORS ja JSON-datan käsittely
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

// Väliaikainen "tietokanta" muistissa
let messages = [];

// Reitti: hae kaikki viestit
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Reitti: lisää uusi viesti
app.post('/api/messages', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Nimi ja viesti vaaditaan' });
  }

  const newMessage = {
    id: Date.now(), // yksinkertainen ID
    name,
    message,
    timestamp: new Date().toISOString()
  };

  messages.unshift(newMessage); // lisää viesti listan alkuun

  res.status(201).json({ success: true });
});

// Käynnistä palvelin
app.listen(PORT, () => {
  console.log(`🚀 Vieraskirjapalvelin käynnissä: http://localhost:${PORT}`);
});
