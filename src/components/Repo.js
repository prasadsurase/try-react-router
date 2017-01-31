import React, { Component } from 'react';

class Repo extends Component{
  render(){
    return(
      <div>{ this.props.params.repoName }</div>
    );
  }
}

export default Repo;
