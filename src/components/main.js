import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h3>Hello {this.props.name}</h3>
        <p>
          Do you want to open your profile <a href='/secret'>Click here!</a>
        </p> 

        {!this.props.auth.isAuthenticated() &&
        <div className='my-4'>
          <hr/>
          <p>Please login first</p>
          <button onClick={this.props.auth.login}>Login</button>
        </div>
        }
      </div>
    );
  }
}
