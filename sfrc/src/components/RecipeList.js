import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import styled from 'styled-components';

const RecipeContainer = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:center;
  width: 100%;
  border: 2px dashed black;
  margin-top: 2%;
  margin-bottom: 2%;

  @media (max-width: 500px){
    flex-flow: column wrap;
    align-items: center;
  }
`

class RecipeList extends React.Component {
  
  render() {
    return (
      <RecipeContainer>
        
        {this.props.filteredRecipes.length > 0 ? 
                this.props.filteredRecipes.map(
                  recipe =>  <Recipe recipe = {recipe} 
                                     key={recipe.id} 
                                     deleteRecipe={this.props.deleteRecipe} 
                                      selectRecipe={this.props.selectRecipe}
                                      selectedRecipe={this.props.selectedRecipe}
                                      /> ): 
                this.props.recipes.map(
                  recipe => (
                    <Recipe recipe = {recipe} 
                            key={recipe.id} 
                            deleteRecipe={this.props.deleteRecipe} 
                            selectRecipe={this.props.selectRecipe}
                            selectedRecipe={this.props.selectedRecipe}
                            /> 
                  ))}
      </RecipeContainer>
    );
  }
}

const mapStatetoProps = state => ({
  recipes: state.recipes,
  filteredRecipes: state.filteredRecipes,
  selectedRecipe: state.selectRecipe
})

export default connect(mapStatetoProps, {})(RecipeList);
