import React, { Component } from 'react';
import GitHubHelpers from '../utils/GitHubHelpers.js';
import UserProfile from './UserProfile.js';
import UserRepositories from './UserRepositories.js';


class UserDetailsContainer extends Component {
  constructor(){
    super();
    this.state ={
      user: {}
    };
    console.log( this );
  }
  componentWillMount(){
    const username = this.props.routeParams.username;
    GitHubHelpers.getUserInfo(username).then( function (info){
      this.setState({
        user: info.data
      });
      console.log( info );
    }.bind(this) );

    GitHubHelpers.getUserRepos(username).then( function (info){
    this.setState({
      repos:info.data
    });

    }.bind(this));
    // console.log( this.props.routeParams.username );
  }
  render(){
    return(
      <div>
      <h1>User Details</h1>
      <UserProfile user={this.state.user}/>
      <UserRepositories repos={this.state.repos}/>
      </div>
    );
  }
}

export default UserDetailsContainer;
