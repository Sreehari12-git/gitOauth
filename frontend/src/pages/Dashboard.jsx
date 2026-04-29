import React from 'react'
import "./Dashboard.css"

const logoutUrl = import.meta.env.VITE_LOGOUT;
function Dashboard() {

  const handleLogout = () => {
    window.location.href = logoutUrl;
  }
  return (
     <div className="dashboard-container">
     <div className="dashboard-header">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    <div className="dashboard-content">
        <div className="dashboard-card">
          <h1>Welcome to Dashboard</h1>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
