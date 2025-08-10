import React, { useState } from 'react'

interface SwissiChatProps {
  isOpen: boolean
  onToggle: () => void
}

const SwissiChat: React.FC<SwissiChatProps> = ({ isOpen, onToggle }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Grüezi! I\'m Swissi, your AI research assistant. How can I help you with your academic work today?' }
  ])

  const sendMessage = () => {
    if (!message.trim()) return
    
    setMessages(prev => [...prev, 
      { role: 'user', content: message },
      { role: 'assistant', content: 'This is a demo response from Swissi. In the full AGNO platform, I would provide intelligent research assistance, help with citations, and answer academic questions using the latest AI models.' }
    ])
    setMessage('')
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button className="chat-toggle" onClick={onToggle}>
        🤖 Swissi
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-title">
              🇨🇭 Swissi AI Assistant
            </div>
            <button className="chat-close" onClick={onToggle}>×</button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask Swissi anything about your research..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}

export default SwissiChat