import React, { useState } from 'react';

const DedicatedSupportInteraction = () => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      setChat([...chat, { message: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setChat([...chat, { message: 'This is a simulated response from support.', sender: 'support' }]);
      }, 2000);
    }
  };

  return (
    <div className="dedicated-support-interaction">
      <h2>Dedicated Support Interaction</h2>
      <div className="chat-window">
        {chat.map((chatMessage, index) => (
          <div key={index} className={`chat-message ${chatMessage.sender}`}>
            <p>{chatMessage.message}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={input} onChange={handleInputChange} placeholder="Type your message here..." />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default DedicatedSupportInteraction;