import React from 'react';
import './Sidebar.css';

export default function Sidebar({ setPage, page }) {
  return (
    <div className="sidebar">
      <h2>My Admin</h2>
      <div className="muted">Quick links</div>

      <button
        className={page === 'dashboard' ? 'active' : ''}
        onClick={() => setPage('dashboard')}
      >
        Dashboard
      </button>

      <button
        className={page === 'users' ? 'active' : ''}
        onClick={() => setPage('users')}
      >
        Users
      </button>

      <button
        className={page === 'settings' ? 'active' : ''}
        onClick={() => setPage('settings')}
      >
        Settings
      </button>

      {/* simple spacer */}
      <div style={{flex:1}}></div>
      <div style={{fontSize:12, color:'#bfc8db'}}>v1.0 • Simple React</div>
    </div>
  );
}
