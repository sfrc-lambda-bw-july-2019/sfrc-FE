import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

const TopNavBar = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

class App extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <h1 className='app-title'>Secret Family Recipes Cookbook</h1>
        <Router>
          <TopNavBar>
            <NavLink className='top-nav-link' to='/'>
              LOGO
            </NavLink>
            <NavLink className='top-nav-link' to='/homepage'>
              Recipes
            </NavLink>
            {this.props.token ? null : (
              <NavLink className='top-nav-link' to='/login'>
                Login
              </NavLink>
            )}
            {this.props.token ? null : (
              <NavLink className='top-nav-link' to='/register'>
                Sign Up
              </NavLink>
            )}
          </TopNavBar>
          <Route exact path='/' component={LandingPage} />
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
  recipes: state.recipes,
  token: state.token
});

export default connect(
  mapStateToProps,
  {}
)(App);
