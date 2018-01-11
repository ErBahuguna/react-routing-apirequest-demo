import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import Main from './main/main';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Main/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Hi
        </p>
      </div>
    );
  }
}

export default App;
