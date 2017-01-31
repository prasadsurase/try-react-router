import React, { Component } from 'react';
import NavLink from './NavLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ul role="nav">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
