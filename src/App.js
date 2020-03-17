import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatWindow from './ChatWindow';

const users = [{ username: 'Maya' }, { username: 'Romy' }];

class App extends Component {
  state = {
    messages: [
      { username: 'Maya', text: 'Hi, Romy!' },
      { username: 'Maya', text: 'How are you?' },
      { username: 'Romy', text: 'Hi, Maya! Good, you?' }
    ]
  };

  handleAddMessage = message => {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              onAddMessage={this.handleAddMessage}
              messages={messages}
              user={user}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
