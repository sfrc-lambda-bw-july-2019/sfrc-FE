import React from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import { logout, getRecipes, addRecipe, deleteRecipe, selectRecipe, updateRecipe, search} from '../actions';
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

  search = event => {
    event.preventDefault();
    this.props.search("Search at home page started");
    
  }

  logoutButton = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="homepage-container">
        <h1>Find a Family Recipe</h1>
        <button onClick={this.logoutButton}>Logout</button>
        <form className="searchbar-form">
          <input type="text" name="searchCriteria"></input>
          <button onClick={this.search}>SEARCH TEST</button>
        </form>
        <RecipeForm addRecipe = {this.addRecipe} selectedRecipe={this.props.selectedRecipe} updateRecipe={this.updateRecipe}/>
        {this.props.fetchingRecipes ? <p>Wait a minute...</p> : <RecipeList deleteRecipe={this.deleteRecipe} selectRecipe={this.selectRecipe}/>}
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
  selectedRecipe: state.selectedRecipe,
  filteredRecipes: state.filteredRecipes
});

export default
  connect(
    mapStateToProps,
    { logout,getRecipes, addRecipe, deleteRecipe, selectRecipe, updateRecipe, search}
  )(HomePage);

/*
export default withRouter(
  connect(
    mapStateToProps,
    { logout,getRecipes, addRecipe, deleteRecipe }
  )(HomePage)
);

*/ 