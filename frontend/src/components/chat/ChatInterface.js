import React, { useState, useEffect } from 'react';
import styles from './ChatInterface.module.css';

const ChatInterface = ({ embedded = false }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant for the Physical AI & Humanoid Robotics textbook. Ask me anything about the content!", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(!embedded);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call the backend RAG API
      const response = await fetch('http://localhost:8000/chat/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      const botMessage = {
        id: messages.length + 2,
        text: data.response,
        sender: 'bot',
        sources: data.sources || []
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I encountered an error processing your request. Please try again.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (embedded) {
    return (
      <div className={styles.embeddedChatContainer}>
        <div className={styles.chatMessages}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${styles[message.sender]}`}
            >
              {message.text}
              {message.sources && message.sources.length > 0 && (
                <div className={styles.sources}>
                  <details>
                    <summary>Sources</summary>
                    <ul>
                      {message.sources.map((source, idx) => (
                        <li key={idx}>
                          <small>Score: {source.score.toFixed(2)}</small>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.bot}`}>
              Thinking...
            </div>
          )}
        </div>

        <div className={styles.chatInputArea}>
          <textarea
            className={styles.chatInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question about this content..."
            rows={2}
          />
          <button
            className={styles.chatSendButton}
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
          >
            Send
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chatWidget}>
      {isOpen ? (
        <>
          <div className={styles.chatHeader}>
            <h3>Textbook AI Assistant</h3>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${styles[message.sender]}`}
              >
                {message.text}
                {message.sources && message.sources.length > 0 && (
                  <div className={styles.sources}>
                    <details>
                      <summary>Sources</summary>
                      <ul>
                        {message.sources.map((source, idx) => (
                          <li key={idx}>
                            <small>Score: {source.score.toFixed(2)}</small>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                Thinking...
              </div>
            )}
          </div>
          <div className={styles.chatInputArea}>
            <textarea
              className={styles.chatInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
              rows={2}
            />
            <button
              className={styles.chatSendButton}
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
            >
              Send
            </button>
          </div>
        </>
      ) : (
        <button className={styles.openButton} onClick={() => setIsOpen(true)}>
          💬 Ask AI
        </button>
      )}
    </div>
  );
};

export default ChatInterface;