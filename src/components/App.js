import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ul role="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
