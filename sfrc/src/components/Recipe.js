import React from 'react';

const Recipe = props =>{
    return (
        <div>
            <h4>{props.recipe.title}</h4>
            <p>Source: {props.recipe.source}</p>
            <p>{props.recipe.ingredients}</p>
            <p>{props.recipe.instructions}</p>
            <p>{props.recipe.category}</p>
            <button onClick = {() => props.deleteRecipe(props.recipe.id)}> Delete Recipe</button>
            <button onClick={()=>props.selectRecipe(props.recipe)}>Update Recipe</button>
        </div>
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
 