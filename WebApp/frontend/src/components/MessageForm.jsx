import { useState } from 'react';

function MessageForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const addEmoji = (emoji) => {
    setMessage((prev) => prev + emoji);
  };

  const sendMessage = async () => {
    if (!name.trim() || !message.trim()) {
      alert('Täytä nimi ja viesti.');
      return;
    }

    const res = await fetch('http://localhost:3001/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message })
    });

    if (res.ok) {
      setName('');
      setMessage('');
      document.dispatchEvent(new CustomEvent('message-sent'));
    } else {
      alert('Viestin lähetys epäonnistui.');
    }
  };

  return (
    <div className="message-form" id="messageForm" style={{ backgroundColor: bgColor }}>
      <input
        type="text"
        id="name"
        placeholder="Nimesi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        id="message"
        placeholder="Viestisi"
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="controls">
        <div className="emojis">
          <span onClick={() => addEmoji('😊')}>😊</span>
          <span onClick={() => addEmoji('🎉')}>🎉</span>
          <span onClick={() => addEmoji('❤️')}>❤️</span>
        </div>
        <input
          type="color"
          id="bgColor"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          title="Valitse taustaväri"
        />
        <div className="buttons">
          <button className="send" onClick={sendMessage}>Lähetä</button>
          <button className="clear" onClick={() => {
            setName('');
            setMessage('');
          }}>Tyhjennä</button>
        </div>
      </div>
    </div>
  );
}

export default MessageForm;
