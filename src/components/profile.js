import React, { Component } from 'react';

export default class Profile extends Component {

  render() {
    return (
      <div className='Profile'>
        {this.props.auth.isAuthenticated() &&
          <div className='my-4'>
            <p>This is your profile:</p>

            <div> 
              <p> First Name:<b> {this.props.userData.firstName} </b></p>
              <p> Last Name:<b> {this.props.userData.lastName} </b></p>
              <p> NickName:<b> {this.props.userData.nickName} </b></p>
              <p> Name:<b> {this.props.userData.name} </b></p>
              <p> Picture: <img style={{width: 100, height: 100}} src={this.props.userData.picture} alt='profile img'/> </p>

            </div>

            <hr/>
            <button onClick={this.props.auth.logout}> Logout</button>
          </div>
        }

        {!this.props.auth.isAuthenticated() &&
          <div className='my-4'>
            <p> <b> You should login first </b> <br/> Go back to <a href='/'>home </a>page</p>
          </div>
        }

      </div>
    );
  }
}
