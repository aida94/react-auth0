import React, { Component } from 'react';

export default class Secret extends Component {

  render() {
    return (
      <div className="Secret">
        <p>This is a super secret are. Jump back to <a href='/'>Home</a></p>
        <hr/>
        <button onClick={this.props.auth.logout}> Logout</button>
      </div>
    );
  }
}
