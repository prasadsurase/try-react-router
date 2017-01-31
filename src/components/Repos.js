import React, { Component } from 'react';
import ReactDOM from 'react';
import { Link } from 'react-router';

class Repos extends Component {
  render(){
    return(
      <div>
        Repos
        <ul>
          <li><Link path='/repos/reactjs/react-router'>React Router</Link></li>
          <li><Link path='/repos/facebook/react'>Facebook React</Link></li>
        </ul>
      </div>
    );
  }
}

export default Repos;
