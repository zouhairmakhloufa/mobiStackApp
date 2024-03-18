import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  const formStyles = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyles = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={formStyles}>
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <div>

        <label>
          Nom :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyles}
          />
        </label>
        </div>
        <div>

        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyles}
          />
        </label>
        </div>
        <div>

        <label>
          Message :
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ ...inputStyles, height: '100px' }}
          />
        </label>
        </div>
        <button type="submit" style={buttonStyles}>Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
