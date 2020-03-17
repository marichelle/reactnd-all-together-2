import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
  state = {
    message: {
      username: '',
      text: ''
    }
  };

  addMessage = e => {
    e.preventDefault();

    this.props.onAddMessage(this.state.message);
    this.clearMessage();
  };

  clearMessage = () =>
    this.setState({
      message: {
        username: '',
        text: ''
      }
    });

  // If the user did not type anything, he/she should not be allowed to submit.
  isDisabled = () => {
    return this.state.message.text.trim() === '';
  };

  onInputChange = e => {
    e.preventDefault();

    this.setState({
      message: {
        username: this.props.user.username,
        text: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.addMessage}>
          <input
            type="text"
            className="form-control"
            onChange={this.onInputChange}
            placeholder="Enter your message..."
            value={this.state.message.text}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMessage.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default AddMessage;
