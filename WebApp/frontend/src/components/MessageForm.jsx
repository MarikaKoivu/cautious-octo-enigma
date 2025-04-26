import React, { useState } from "react";

function MessageForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!name.trim() || !message.trim()) {
      alert("Täytä nimi ja viesti.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        setName("");
        setMessage("");
        document.dispatchEvent(new CustomEvent("message-sent"));
      } else {
        alert("Viestin lähetys epäonnistui.");
      }
    } catch (err) {
      console.error("Virhe lähetettäessä:", err);
    }
  };

  return (
    <div className="message-form">
      <input
        type="text"
        placeholder="Nimesi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Viestisi"
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Lähetä</button>
    </div>
  );
}

export default MessageForm;
