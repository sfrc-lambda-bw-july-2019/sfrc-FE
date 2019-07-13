import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Secret Family Recipes Cookbook</h1>
        <Router>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Sign Up</Link>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute path='/homepage' component={HomePage} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  recipes: state.recipes
});

export default connect(
  mapStateToProps,
  {}
)(App);
