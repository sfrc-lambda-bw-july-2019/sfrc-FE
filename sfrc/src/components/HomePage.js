import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

class HomePage extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('user.id')) {
      const user_id = parseInt(localStorage.getItem('userid'));
      this.props.getData(user_id);
    }
  }

  routeToRecipes = e => {
    e.preventDefault();
    this.props.history.push('/recipeform');
  };

  logoutButton = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <h1>Find a Family Recipe</h1>
        <button onClick={this.routeToRecipes}>Make Recipes</button>
        <button onClick={this.logoutButton}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // recipes: state.recipes,
  fetchingUsers: state.fetchingUsers
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(HomePage)
);
