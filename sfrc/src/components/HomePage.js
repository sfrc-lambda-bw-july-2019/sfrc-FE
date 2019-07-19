import React from 'react';
import { connect } from 'react-redux';
import { logout, getRecipes, addRecipe, deleteRecipe, selectRecipe, updateRecipe} from '../actions';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  addRecipe = recipe => {
    this.props.addRecipe(recipe);
    this.props.getRecipes();
  }

  deleteRecipe = id => {
    this.props.deleteRecipe(id);
    //window.location.reload();
    this.props.getRecipes();
  }

  selectRecipe = recipe =>{
    this.props.selectRecipe(recipe);
  }

  updateRecipe = recipe => {
    this.props.updateRecipe(recipe);
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
        {this.props.fetchingRecipes ? <p>Wait a minute...</p> : <RecipeList deleteRecipe={this.deleteRecipe} selectRecipe={this.selectRecipe}/>}
        <RecipeForm addRecipe = {this.addRecipe} selectedRecipe={this.props.selectedRecipe} updateRecipe={this.updateRecipe}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  fetchingRecipes: state.fetchingRecipes,
  addingRecipe: state.addingRecipe,
  deletingRecipe: state.deletingRecipe,
  updatingRecipe: state.updatingRecipe,
  selectedRecipe: state.selectedRecipe
});

export default
  connect(
    mapStateToProps,
    { logout,getRecipes, addRecipe, deleteRecipe, selectRecipe, updateRecipe}
  )(HomePage);

/*
export default withRouter(
  connect(
    mapStateToProps,
    { logout,getRecipes, addRecipe, deleteRecipe }
  )(HomePage)
);

*/ 