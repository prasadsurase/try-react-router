import React, { Component } from 'react';
import NavLink from './NavLink';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>
          { this.props.children || Home }
        </div>
      </div>
    );
  }
}

export default App;
