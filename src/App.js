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
        mainComponent = <Secret {...this.props}/>;
        break;
      default:
        mainComponent = <NotFound/>   
    }

    return (
      <div className='container'>
        <a href='/'>
          <h2 className='text-center m-4'>React Oauth</h2>
        </a>
        {mainComponent}
      </div>
    );
  }
}

export default App;
