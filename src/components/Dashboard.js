import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link className="nav-link" to="/news">
              News
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/payout">
              Payout
            </Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Select an option from the sidebar.</h1>
      </div>
    </div>
  );
}

export default Dashboard;