import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, getRecipes, addRecipe} from '../actions';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  addRecipe = recipe => {
    this.props.addRecipe(recipe);
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
        <RecipeForm addRecipe = {this.addRecipe}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  fetchingRecipes: state.fetchingRecipes,
  addingRecipe: state.addingRecipe,
  deletingRecipe: state.deletingRecipe,
  updatingRecipe: state.updatingRecipe
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout,getRecipes, addRecipe }
  )(HomePage)
);
