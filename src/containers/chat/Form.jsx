import React from 'react';
import './chat.css';

const ChatForm = () => (
  <section className="chat-section">
    <div className="chat-box">
      <iframe
        scrolling="no"
        className="chat-iframe"
        src="https://chat.webuild.community/"
      />
    </div>
  </section>
);

export default ChatForm;
