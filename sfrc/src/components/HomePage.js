import React from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import {
  logout,
  getRecipes,
  addRecipe,
  deleteRecipe,
  selectRecipe,
  updateRecipe,
  search
} from '../actions';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: ''
    };
  }

  componentDidMount() {
    this.props.getRecipes();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.searchCriteria &&
      prevProps.searchCriteria != this.props.searchCriteria
    ) {
      this.setState({
        searchCriteria: this.props.searchCriteria
      });
    }
    //this.props.getRecipes();
    if (this.props.deletingRecipe || this.props.addingRecipe) {
      this.props.getRecipes();
    }
  }

  addRecipe = recipe => {
    this.props.addRecipe(recipe);
    this.props.getRecipes();
  };

  deleteRecipe = id => {
    this.props.deleteRecipe(id);
    //window.location.reload();
    this.props.getRecipes();
  };

  selectRecipe = recipe => {
    this.props.selectRecipe(recipe);
  };

  updateRecipe = recipe => {
    this.props.updateRecipe(recipe);
    this.props.getRecipes();
  };

  submitSearch = event => {
    event.preventDefault();
    this.props.search(this.state.searchCriteria);
    this.setState({
      searchCriteria: ''
    });
    this.props.getRecipes();
  };

  searchHandler = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  logoutButton = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className='homepage-container'>
        <h1>Find a Family Recipe</h1>
        <button onClick={this.logoutButton}>Logout</button>
        <form onSubmit={this.submitSearch} className='searchbar-form'>
          <input
            onChange={this.searchHandler}
            placeholder='Search Recipes'
            value={this.state.searchCriteria}
            name='searchCriteria'
          />

          <button type='submit'>SEARCH RECIPES (by title or category)</button>
        </form>
        <RecipeForm
          addRecipe={this.addRecipe}
          selectedRecipe={this.props.selectedRecipe}
          updateRecipe={this.updateRecipe}
        />
        {this.props.fetchingRecipes ? (
          <p>Loading Recipes...</p>
        ) : (
          <RecipeList
            deleteRecipe={this.deleteRecipe}
            selectRecipe={this.selectRecipe}
          />
        )}
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

export default connect(
  mapStateToProps,
  {
    logout,
    getRecipes,
    addRecipe,
    deleteRecipe,
    selectRecipe,
    updateRecipe,
    search
  }
)(HomePage);

/*
export default withRouter(
  connect(
    mapStateToProps,
    { logout,getRecipes, addRecipe, deleteRecipe }
  )(HomePage)
);

*/
