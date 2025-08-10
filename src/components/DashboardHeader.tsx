import React from 'react'

const DashboardHeader: React.FC = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="logo-section">
          <h1 className="app-title">🏔️ Swissi Dashboard</h1>
          <span className="subtitle">AI-Powered University Platform</span>
        </div>
      </div>
      
      <div className="header-center">
        <nav className="main-nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Research</button>
          <button className="nav-item">Calendar</button>
          <button className="nav-item">Analytics</button>
        </nav>
      </div>
      
      <div className="header-right">
        <div className="user-info">
          <span className="user-name">Prof. Michel Malara</span>
          <div className="user-avatar">MM</div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader