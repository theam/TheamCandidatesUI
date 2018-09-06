import React, { Component } from 'react';
import logo from './logo.svg';
import { NavBar } from './Components/NavBar.js';
import { List } from './Components/List.js';

import './Style/App.css';
import './Style/NavBar.css';

class App extends Component {

  _getCandidates = (e) => {

  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="wrapper">
          <List title="Candidates" content={["Candidate1", "Candidate2", "Candidate3"]}/>
          <List title="Users" content={["User1", "User2", "User3"]}/>
        </div>
      </div>
    );
  }
}

export default App;
