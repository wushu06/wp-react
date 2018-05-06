import React, { Component } from 'react';
import {Route, browserHistroy} from 'react-router'
import Users from './component/Users/Users'
import Profile from './component/Profile/Profile'
import Posts from './component/WP/Posts/Posts'
import Pages from './component/WP/Pages/Pages'
import PageSingle from './component/WP/Pages/Single/Single'
import PostSingle from './component/WP/Posts/Single'
import Home from './component/Home/Home'
import Header from './component/Header/Header'
import './assets/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/pages" component={Pages}/>
        <Route path="/page-single/:id" component={PageSingle}/>
        <Route path="/post-single/:id" component={PostSingle}/>
      </div>
    );
  }
}

export default App;
