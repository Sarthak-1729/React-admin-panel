import React, { useState, useEffect } from 'react';

export default function UserForm({ onSubmit, initialData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    if (!initialData) {
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom:14}}>
      <div className="form-row">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
          {initialData ? 'Save' : 'Add'}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={() => { /* parent can clear edit state by submitting empty update or by handling edit state */ }}
            className="btn btn-ghost"
            style={{marginLeft:8}}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
