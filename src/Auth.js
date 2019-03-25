/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

const LOGIN_SUCCESS_PAGE = '/profile';
const LOGIN_FAILURE_PAGE = '/';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-aida.auth0.com',
    clientID: 'm1T4YG3BLIcxGG4uqgq7z1SxwxaX0xec',
    redirectUri: 'http://localhost:3000/callback',
    // audience: 'http://dev-aida.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
  
  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken){
        let expiresAt = JSON.stringify((authResults.expiresIn)* 1000 + new Date().getTime());
        localStorage.setItem('access_token', authResults.accessToken);
        localStorage.setItem('id_token', authResults.idToken);
        localStorage.setItem('expires_at', expiresAt);
        location.hash = '';
        location.pathname = LOGIN_SUCCESS_PAGE;
      }else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
      }
    })
  }
  
  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getProfile() {
    if (localStorage.getItem('id_token')) {
      return jwtDecode(localStorage.getItem('id_token'));
    } else {
      return {}
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    location.pathname = LOGIN_FAILURE_PAGE;
  }
}