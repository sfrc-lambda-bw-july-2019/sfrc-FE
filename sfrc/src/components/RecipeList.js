import React from 'react';

class RecipeList extends React.Componet {
  constructor() {
    super();

    this.state = {
      recipes: [
        {
          id: 0,
          title: 'PBJ',
          source: 'Mother',
          ingredients: ['bread', 'peanut butter', 'jam'],
          instructions:
            '1. Get bread. 2. Get peanut butter and jam. 3. Put together.',
          category: ['snack', 'dinner', 'vegetarian', 'sandwich'],
          user_id: 1
        },
        {
          id: 1,
          title: 'Peanut Butter and Banana Sandwich',
          source: 'Uncle Steve',
          instructions:
            '1. Get bread. 2. Get peanut butter. 3. Slice banana. 4. Put together',
          ingredients: ['bread', 'peanut butter', 'banana', 'chocolate'],
          category: ['snack', 'dinner', 'vegetarian', 'sandwich'],
          user_id: 2
        }
      ],
      searchField: ''
    };
  }
  // routeToRecipes(e, user) {
  //   e.preventDefault();
  //   props.history.push(`/recipielist/${user.id}`);
  // }
  
  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <p>{recipes.title}</p>
        ))}
      </div>
    );
  }
}

export default RecipeList;
