import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Callback from './components/callback';
import Secret from './components/secret';
import NotFound from './components/notFound';


class App extends Component {
  render() {
    let mainComponent = '';
    switch(this.props.location){
      case '':
        mainComponent = <Main {...this.props} />;
        break;
      case 'callback':
        mainComponent = <Callback/>;
        break; 
      case 'secret':
        mainComponent = this.props.auth.isAuthenticated()? <Secret {...this.props}/> : <NotFound/>;
        break;
      default:
        mainComponent = <NotFound/>   
    }

    return (
      <div className="App">
        <header className="App-header">
          <a href='/'><h2>React Oauth</h2></a>
        </header>

        {mainComponent}

      </div>
    );
  }
}

export default App;
