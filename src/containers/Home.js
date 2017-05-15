import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault();
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="" onClick={this.onClick}>Login</a>
      </div>
    );
  }
}

export default App;
