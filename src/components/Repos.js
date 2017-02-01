import React, { Component } from 'react';
import NavLink from './NavLink';
import { browserHistory } from 'react-router';

class Repos extends Component {
  handleSubmit(event){
    event.preventDefault();
    var userName = event.target.elements[0].value;
    var repo = event.target.elements[1].value;
    var path = `/repos/${userName}/${repo}`;
    console.log(path);
    browserHistory.push(path);
  }

  render(){
    return(
      <div>
        Repos
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default Repos;
