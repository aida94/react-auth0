import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h3>Hello {this.props.name}</h3>
        <p>
          
          Do you want to see the secret area <a href='/secret'>Click here!</a>
        </p> 

        {!this.props.auth.isAuthenticated() &&
        <div>
          <hr/>
          Please login first
          <hr/>
          <button onClick={this.props.auth.login}>Login</button>
        </div>
        }
      </div>
    );
  }
}
