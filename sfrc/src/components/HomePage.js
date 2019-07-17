import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, getRecipes} from '../actions';
import RecipeList from './RecipeList';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }



  logoutButton = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <h1>Find a Family Recipe</h1>
        <button onClick={this.logoutButton}>Logout</button>
        {this.props.fetchingRecipes ? <p>Wait a minute...</p> : <RecipeList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  fetchingRecipes: state.fetchingRecipes
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout,getRecipes }
  )(HomePage)
);
