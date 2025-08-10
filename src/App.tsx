import React, { useState } from 'react'
import SwissiChat from './components/SwissiChat'
import DashboardHeader from './components/DashboardHeader'
import StatsOverview from './components/StatsOverview'
import ResearchWidget from './components/ResearchWidget'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="app">
      {/* Background */}
      <div className="swiss-background"></div>
      
      {/* Header */}
      <DashboardHeader />
      
      {/* Main Dashboard */}
      <main className="dashboard-main">
        <div className="dashboard-grid">
          <StatsOverview />
          <ResearchWidget />
        </div>
      </main>

      {/* Swissi AI Chat */}
      <SwissiChat 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />
      
      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <span>🇨🇭 Built in Switzerland by Agnostyca AG</span>
          <span>Powered by AGNO Platform</span>
        </div>
      </footer>
    </div>
  )
}

export default App