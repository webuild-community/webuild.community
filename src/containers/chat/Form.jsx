import React, { useState } from 'react';
import classnames from 'classnames';
import './chat.css';

const ChatForm = () => {
  const [loading, setLoading] = useState(true);
  return (
    <section className="chat-section">
      <div className="chat-box flex">
        <div
          className={classnames('spinner transition-opacity duration-200', {
            'opacity-0 invisible': !loading
          })}
        >
          <div className="bounce"></div>
        </div>
        <iframe
          scrolling="no"
          className={classnames('chat-iframe transition-opacity duration-200', {
            'opacity-0': loading
          })}
          onLoad={() => {
            setLoading(false);
          }}
          src="https://chat.webuild.community/"
        />
      </div>
    </section>
  );
};

export default ChatForm;
