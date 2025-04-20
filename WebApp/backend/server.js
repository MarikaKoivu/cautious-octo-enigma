const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Tuodaan SQLite-toiminnot
const { getAllMessages, addMessage, deleteMessage } = require('./models/messageModel');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//  GET: Hae kaikki viestit
app.get('/api/messages', (req, res) => {
  try {
    const messages = getAllMessages();
    res.json(messages);
  } catch (error) {
    console.error('Virhe viestien haussa:', error);
    res.status(500).json({ error: 'Viestien hakeminen epäonnistui' });
  }
});

// POST: Lisää uusi viesti
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

//  DELETE: Poista viesti ID:n perusteella
app.delete('/api/messages/:id', (req, res) => {
  const { id } = req.params;
  const numericId = Number(id);
  console.log(`➡️ Poistetaan viesti ID: ${numericId}`);

  try {
    const result = deleteMessage(numericId);
    console.log(`🧾 Poistettu rivejä: ${result.changes}`);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Viestiä ei löytynyt poistettavaksi' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Virhe viestin poistamisessa:', error.message);
    res.status(500).json({ error: 'Viestin poistaminen epäonnistui' });
  }
});

//  Palvelimen käynnistys
app.listen(PORT, () => {
  console.log(`🚀 Vieraskirjapalvelin käynnissä: http://localhost:${PORT}`);
});
