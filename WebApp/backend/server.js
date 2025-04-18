const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// ✅ Tuodaan SQLite-tietokannan toiminnot
const { getAllMessages, addMessage } = require('./models/messageModel');

const app = express();
const PORT = 3001;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Staattisten tiedostojen tarjoaminen (esim. kuvat tai HTML)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ GET: Hae kaikki viestit tietokannasta
app.get('/api/messages', (req, res) => {
  try {
    const messages = getAllMessages();
    res.json(messages);
  } catch (error) {
    console.error('Virhe viestien haussa:', error);
    res.status(500).json({ error: 'Viestien hakeminen epäonnistui' });
  }
});

// ✅ POST: Lisää uusi viesti tietokantaan
app.post('/api/messages', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Nimi ja viesti vaaditaan' });
  }

  try {
    addMessage(name, message);
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Virhe viestin tallennuksessa:', error);
    res.status(500).json({ error: 'Viestin tallennus epäonnistui' });
  }
});

// ✅ Palvelimen käynnistys
app.listen(PORT, () => {
  console.log(`🚀 Vieraskirjapalvelin käynnissä: http://localhost:${PORT}`);
});
