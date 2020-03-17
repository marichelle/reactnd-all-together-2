import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';

class ChatWindow extends Component {
  render() {
    const { messages, onAddMessage, user } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageHistory messages={messages} user={user} />
        <AddMessage onAddMessage={onAddMessage} user={user} />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired,
  onAddMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default ChatWindow;
