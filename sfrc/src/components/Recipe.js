import React from 'react';
import styled from 'styled-components';

const RecipeCard = styled.div`
    width:30%;
    margin: 2%;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    padding:2%;
    border: 2px dashed black;
    font-size: 1.2rem;
    h4{
        align-self: right;
        text-align:left;
        width:100%;
        margin-top: 1%;
        margin-bottom:4%;
        border-bottom: 1px solid black;
    }
    h5{
        margin: 0.5%;
        text-align:right;
    }
    p{
        margin: 1%;
        padding: 2%;
    }

    div {
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        width: 100%;
        align-self:center;
        margin-top: 2%;
    }
    div button {
        margin: 2%;
        width: 40%;
        font-size: 0.6rem;
        padding: 2%;
    }

    @media (max-width: 500px){
        width: 70%;
       margin: 3%;
    }

`

const Recipe = props =>{
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
            <div>
                <button onClick = {() => props.deleteRecipe(props.recipe.id)}> Delete Recipe</button>
                <button onClick={()=>props.selectRecipe(props.recipe)}>Update Recipe</button>
            </div>
        </RecipeCard>
    )
}

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
 