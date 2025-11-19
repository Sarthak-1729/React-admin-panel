import React, { useState } from 'react';
import UserForm from './UserForm';


export default function Users() {
const [users, setUsers] = useState([]);
const [editIndex, setEditIndex] = useState(null);


const addUser = (user) => {
setUsers([...users, user]);
};


const updateUser = (updatedUser) => {
const newUsers = [...users];
newUsers[editIndex] = updatedUser;
setUsers(newUsers);
setEditIndex(null);
};


const deleteUser = (index) => {
setUsers(users.filter((_, i) => i !== index));
};


return (
<div>
<h1>Users</h1>


{/* Add or Edit Form */}
<UserForm
onSubmit={editIndex !== null ? updateUser : addUser}
initialData={editIndex !== null ? users[editIndex] : null}
/>


{/* Users List */}
{users.map((user, index) => (
<div key={index} className="user-card">
<p><strong>{user.name}</strong></p>
<p>{user.email}</p>
<button onClick={() => setEditIndex(index)}>Edit</button>
<button onClick={() => deleteUser(index)}>Delete</button>
</div>
))}
</div>
);
}