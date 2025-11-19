import React, { useState, useEffect } from 'react';


export default function UserForm({ onSubmit, initialData }) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');


useEffect(() => {
if (initialData) {
setName(initialData.name);
setEmail(initialData.email);
}
}, [initialData]);


const handleSubmit = (e) => {
e.preventDefault();
onSubmit({ name, email });
setName('');
setEmail('');
};


return (
<form onSubmit={handleSubmit}>
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
<button type="submit">Save</button>
</form>
);
}