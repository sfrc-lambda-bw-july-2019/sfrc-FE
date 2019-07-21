import React from 'react';
import styled from 'styled-components';

const RecipeCard = styled.div`
  width: 30%;
  margin: 2%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 2%;
  border: 1px solid lightgray;
  font-size: 1.2rem;
  h4 {
    align-self: center;
    text-align: center;
    margin-top: 1%;
    margin-bottom: 0;
  }
  h5 {
    margin: 0.5%;
    text-align: right;
  }
  p {
    margin: 1%;
    padding: 2%;
  }
  button {
    margin: 2%;
    align-self: center;
    font-size: 0.9rem;
    padding: 2%;

    &:hover {
      color: #fff;
      background: #58a5bd;
      font-weight: bold;
    }
  }
`;
const Recipe = props => {
  return (
    <RecipeCard>
      <h4>{props.recipe.title}</h4>
      <h5>Source:</h5>
      <p>{props.recipe.source}</p>
      <h5>Ingredients:</h5>
      <p>{props.recipe.ingredients}</p>
      <h5>Instructions:</h5>
      <p>{props.recipe.instructions}</p>
      <h5>Category:</h5>
      <p>{props.recipe.category}</p>
      <button onClick={() => props.deleteRecipe(props.recipe.id)}>
        {' '}
        Delete Recipe
      </button>
      <button onClick={() => props.selectRecipe(props.recipe)}>
        Update Recipe
      </button>
    </RecipeCard>
  );
};

export default Recipe;

// recipes: [
//   {
//     id: 0,
//     title: 'PBJ',
//     source: 'Mother',
//     ingredients: "bread peanut butter jam
//     instructions:
//       '1. Get bread. 2. Get peanut butter and jam. 3. Put together.',
//     category: "snack dinner vegetarian sandwich"
//     user_id: 1
//   },
