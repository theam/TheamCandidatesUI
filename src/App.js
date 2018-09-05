import React, { Component } from 'react';
import logo from './logo.svg';
import { NavBar } from './Components/NavBar.js';
import { CandidatesList } from './Components/CandidatesList.js';

import './Style/App.css';
import './Style/NavBar.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
