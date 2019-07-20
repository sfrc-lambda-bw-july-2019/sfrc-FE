import React from 'react';
import './App.css';
import { connect } from 'react-redux';
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

const TopNavBar= styled.header`
  border: 2px dashed black;
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  
`;

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="app-title">Secret Family Recipes Cookbook</h1>
        <h2><em>“Family is forever. Family Recipes Should Be Forever"</em></h2>
        <Router>
          <TopNavBar>
            {this.props.token ? null : <NavLink className="top-nav-link" to='/login'>Login</NavLink>}
            {this.props.token ? null :<NavLink className="top-nav-link" to='/register'>Sign Up</NavLink>}
          </TopNavBar>
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
  token:state.token
});

export default connect(
  mapStateToProps,
  {}
)(App);
