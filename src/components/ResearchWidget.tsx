import React from 'react'

const ResearchWidget: React.FC = () => {
  const recentPapers = [
    {
      title: 'Federated AI Infrastructure for Educational ESG Compliance',
      authors: 'W. Kurz, M. Malara',
      journal: 'Swiss AI Research Journal',
      date: '2024-08-15',
      status: 'Published'
    },
    {
      title: 'AGNO Address System: Multi-Jurisdictional Blockchain Identity',
      authors: 'W. Kurz, V. Dedic',
      journal: 'Blockchain & Society',
      date: '2024-07-22', 
      status: 'Under Review'
    },
    {
      title: 'Cross-Border Academic Credential Verification Using DAG Technology',
      authors: 'M. Malara, W. Kurz',
      journal: 'Education Technology Review',
      date: '2024-06-10',
      status: 'Draft'
    }
  ]

  return (
    <div className="research-widget">
      <h2>Recent Publications</h2>
      <div className="papers-list">
        {recentPapers.map((paper, index) => (
          <div key={index} className="paper-card">
            <div className="paper-header">
              <h3 className="paper-title">{paper.title}</h3>
              <span className={`paper-status ${paper.status.toLowerCase().replace(' ', '-')}`}>
                {paper.status}
              </span>
            </div>
            <div className="paper-details">
              <p className="paper-authors">{paper.authors}</p>
              <p className="paper-journal">{paper.journal} • {paper.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="research-actions">
        <button className="btn-primary">Add New Paper</button>
        <button className="btn-secondary">View All Research</button>
      </div>
    </div>
  )
}

export default ResearchWidget