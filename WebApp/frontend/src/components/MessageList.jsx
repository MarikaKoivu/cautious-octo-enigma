import { useEffect, useState } from 'react';

function MessageList() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch('http://localhost:3001/api/messages');
    const data = await res.json();
    setMessages(data);
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
        </div>
      ))}
    </div>
  );
}

export default MessageList;
