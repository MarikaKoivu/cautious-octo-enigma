import { useEffect, useState } from 'react';

function MessageList() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch('http://localhost:3001/api/messages');
    const data = await res.json();
    setMessages(data);
  };

  //  Poista viesti palvelimelta
  const deleteMessage = async (id) => {
    const res = await fetch(`http://localhost:3001/api/messages/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      fetchMessages();
    } else {
      alert('Viestin poistaminen epäonnistui.');
    }
  };

  useEffect(() => {
    fetchMessages();
    document.addEventListener('message-sent', fetchMessages);
    return () => document.removeEventListener('message-sent', fetchMessages);
  }, []);

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} className="message">
          <strong>{msg.name}</strong>
          <p>{msg.message}</p>
          <small>{new Date(msg.timestamp).toLocaleString()}</small>

          {/*  Poista-nappi */}
          <button onClick={() => deleteMessage(msg.id)} style={{
            marginTop: '5px',
            padding: '4px 8px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Poista
          </button>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
