import React, { Component } from 'react';
import ReactDOM from 'react';
import NavLink from './NavLink';

class Repos extends Component {
  render(){
    return(
      <div>
        Repos
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default Repos;
