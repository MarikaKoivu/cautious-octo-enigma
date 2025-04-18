const Database = require('better-sqlite3');
const path = require('path');

// Luodaan yhteys tietokantaan
const dbPath = path.resolve(__dirname, '../db/database.sqlite');
const db = new Database(dbPath);

// Luodaan taulu, jos sitä ei ole
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    timestamp TEXT NOT NULL
  )
`);

// Hae kaikki viestit (uusin ensin)
function getAllMessages() {
  const stmt = db.prepare('SELECT * FROM messages ORDER BY id DESC');
  return stmt.all();
}

// Lisää uusi viesti
function addMessage(name, message) {
  const timestamp = new Date().toISOString();
  const stmt = db.prepare('INSERT INTO messages (name, message, timestamp) VALUES (?, ?, ?)');
  stmt.run(name, message, timestamp);
}

module.exports = { getAllMessages, addMessage };
