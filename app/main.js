import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes.js'

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <h1>Hello World!!!</h1>
//     );
//   }
// }
// import Avatar from './components/Avatar.js';
// import Home from './components/Home.jsx';
// import Main from './components/Main.js';
// const USER_DATA ={
//   imageURL: 'https://avatars.githubusercontent.com/u/11083211?v=3',
//   username: 'priyankakumbha',
//   name: 'priyankakumbhar'
// };
ReactDOM.render(
  Routes ,
  document.getElementById('app')
)
