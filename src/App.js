import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings';
import './App.css';


function App() {
const [page, setPage] = useState('dashboard');


return (
<div className="app-container">
<Sidebar setPage={setPage} />
<div className="content">
{page === 'dashboard' && <Dashboard />}
{page === 'users' && <Users />}
{page === 'settings' && <Settings />}
</div>
</div>
);
}


export default App;