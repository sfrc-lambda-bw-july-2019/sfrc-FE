
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// import SignUp from "./components/SignUp";
import Login from './components/Login'
import MainPage from "./components/MainPage";
import Recipe from "./components/Recipe";
import RecipeForm from "./components/RecipeForm";
import { connect } from 'react-redux';

 class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <div className="nav-links">
          <a className="home-link" href="https://blackhole-chaz-landing.netlify.com/" target='_blank' rel="noopener noreferrer">blackh0le</a>
          <div className={this.props.loggedIn ? 'none': 'displayed'}>
            {/* <NavLink exact to="/">
              SignUp
            </NavLink> */}
            <NavLink to="/login">Login</NavLink>
          </div>
          <div className={this.props.loggedIn ? 'displayed': 'none'}>
            <NavLink exact to="/main-page">
              Storage
            </NavLink>
          </div>
          </div>
        </nav>
        <div>
          {/* <Route exact path="/" component={SignUp} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/main-page" component={MainPage} />
          <Route path="/notes/:id" component={Recipe} />
          <Route path="/main-page/note-form" component={RecipeForm} />
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: state.loggedIn
 
});

export default
  connect(
    mapStateToProps,
    {}
  )(App);