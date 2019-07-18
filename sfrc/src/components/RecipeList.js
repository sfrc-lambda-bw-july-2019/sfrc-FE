import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class RecipeList extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <Recipe recipe = {recipe} key={recipe.id} deleteRecipe={this.props.deleteRecipe}/> 
        ))}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  recipes: state.recipes
})

export default connect(mapStatetoProps, {})(RecipeList);
