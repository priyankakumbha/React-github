import React from 'react';
import ReactRouter, {Router, Route, IndexRoute, hashHistory } from'react-router';

import Main from '../components/Main.js';
import Home from '../components/Home.jsx';
import Search from '../components/Search.js';
import UserDetails from '../components/UserDetails.js';
import GitHubHelpers from '../utils/GitHubHelpers.js';
GitHubHelpers.getUserInfo('priyankakumbhar').then((data) =>{
  console.log(data);
});

const Routes = (
<Router history={hashHistory}>
<Route path="/" component={Main}>
<IndexRoute component={Home} />
<Route path="/home" component={Home} />
<Route path="/search" component={Search} />
<Route path="/details/:username" component={UserDetails} />
</Route>
</Router>
);
export default Routes;
