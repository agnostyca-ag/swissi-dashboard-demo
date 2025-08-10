import React from 'react'

const StatsOverview: React.FC = () => {
  const stats = [
    { label: 'Active Research Projects', value: '12', trend: '+2 this month' },
    { label: 'Publications This Year', value: '8', trend: '+15% vs last year' },
    { label: 'Citations (H-Index)', value: '124', trend: '+8 this month' },
    { label: 'Collaboration Networks', value: '23', trend: 'Active worldwide' }
  ]

  return (
    <div className="stats-overview">
      <h2>Research Overview</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-trend">{stat.trend}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsOverview