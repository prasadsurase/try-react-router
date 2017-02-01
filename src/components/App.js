import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
            <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
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
