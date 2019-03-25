# react oauth

## Requirements

<b>react oauth</b> is a simple Authentification APP built in React using Auth0 library. You can login with Google, Github or with Username-Password-Authentication

## Requirements

For development, you will only need Node.js and npm  installed on your environement.<br/>
Also you need to have an account in [Auth0](https://auth0.com/), so you can have your own keys.

## Install

    $ git clone https://github.com/aida94/react-oauth.git
    $ cd react-oauth
    $ npm install

### Start & watch

    $ npm start
    
### Link App with your Auth0 keys

In 'src/Auth.js' file make these changes as below:

    auth0 = new auth0.WebAuth({
      domain: *YOUR DOMAIN*,
      clientID: *YOUR CLIENTID*,
      redirectUri: *YOUR REDIRECTURI*,
      responseType: 'token id_token',
      scope: 'openid profile'
    });

### Simple build for production

    $ npm run build
    
## Features   

  <li>Auth0</li>
  <li>BootStrap 4</li>
  <li>Jwt Decode</li>
