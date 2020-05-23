import React from 'react';
import ChatLayout from 'components/ChatLayout';
import Form from './Form';
import SEO from 'components/seo';

const Chat = () => (
  <ChatLayout>
    <SEO title="Chat | WeBuild Community" />
    <Form />
  </ChatLayout>
);

export default Chat;
