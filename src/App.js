import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings';
import './App.css';
import './index.css';

function App() {
  const [page, setPage] = useState('dashboard');

  return (
    <div className="app-container">
      <Sidebar page={page} setPage={setPage} />

      <div className="main-wrapper">
        <div className="content">
          <div className="panel">
            <div className="header-row">
              <div>
                <h1 style={{marginBottom:4}}>{page[0].toUpperCase() + page.slice(1)}</h1>
                <div className="subtitle">Simple admin — clean modern look</div>
              </div>
              <div>
                {/* placeholder for header actions if you need later */}
                <button className="btn btn-ghost">Help</button>
                <button className="btn btn-primary" style={{marginLeft:8}}>New</button>
              </div>
            </div>

            {page === 'dashboard' && <Dashboard />}
            {page === 'users' && <Users />}
            {page === 'settings' && <Settings />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
