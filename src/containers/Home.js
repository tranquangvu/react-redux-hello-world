import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/home.scss'

class App extends Component {
  render() {
    return (
      <div className="home-container">
        <h2 className="header-title">Welcome to React!</h2>
        <Link to='/login'>Login</Link>
        <Link to='/dealstage'>Deal Stage</Link>
      </div>
    );
  }
}

export default App;
