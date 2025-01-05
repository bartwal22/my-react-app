import React from 'react';
import './Sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/payout">Payout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;