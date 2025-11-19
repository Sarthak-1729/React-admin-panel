import React from 'react';
import './Sidebar.css';


export default function Sidebar({ setPage }) {
return (
<div className="sidebar">
<h2>Admin</h2>
<button onClick={() => setPage('dashboard')}>Dashboard</button>
<button onClick={() => setPage('users')}>Users</button>
<button onClick={() => setPage('settings')}>Settings</button>
</div>
);
}