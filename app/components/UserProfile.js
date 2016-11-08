import React, {Component } from 'react';

class UserProfile extends Component {
  render(){
    if ( !this.props.user.login ){
      return(
        <div>Loading...</div>
      )
      // console.log("STILL LOADING!!");
    }

    return (
      <div>
      <h5>Stats</h5>
      <p>Followers:{this.props.user.followers}</p>
      <p>Following:{this.props.user.following}</p>
      <p>Public Repositieries:{this.props.user.public_repos}</p>
      <p>Public Gits:{this.props.user.public_gists}</p>
      <h3>This is the user profile</h3>
      </div>
    );
  }
}

export default UserProfile;
