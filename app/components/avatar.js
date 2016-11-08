import React, {Component} from 'react';
const USER_DATA ={
  imageURL: 'https://avatars.githubusercontent.com/u/11083211?v=3',
  username: 'priyankakumbha',
  name: 'priyankakumbhar'
};

class ProfilePic extends Component {
  render(){
    return(
      <img src={this.props.imageURL}/>
    );
  }
}

class ProfileName extends Component {
  render(){
    return(
      <h3>{this.props.name}</h3>
    );
  }
}



class ProfileLink extends Component{
  render(){
    return(
      <div><a href={`https://github.com/${this.props.username}`}>{this.props.username}</a></div>
    );
  }
}
class Paragraph extends Component {
  render(){
    console.log(this);
    return(
    <p>{this.props.children}</p>
  );
  }
}
class Avatar extends Component {
  render() {
    console.log(this);
    return (
      <div>
      <ProfilePic  imageURL={this.props.user.imageURL}/>
      <ProfileName name={this.props.user.name}/>
      <ProfileLink username={this.props.user.username}/>
      <Paragraph>Hello from inside a component === this.props.children</ Paragraph>
      </div>
    );
  }
}
export default Avatar;
