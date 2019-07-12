# Secret Family Recipes Front End Team, Lambda School, Build Week, July 2019

## Front-End Architects: Mariana, Oscar, Arthur Lei

## Pitch:

Anyone can go out and buy a cookbook these days, but I want a place to store all my secret family recipes, handed down from generation to generation. The little cards my grandma wrote the recipes on in her beautiful cursive are getting lost or are hard to read. I need somewhere secure to keep my recipes with me at all times!

## MVP:

- Onboarding process for a new user
- Ability to enter a new recipe, including:
  - title,
  - source (e.g. grandma ethel)
  - ingredients,
  - instructions,
  - category (dinner, chicken, dessert, pasta, etc.)
- Ability to edit or delete it later.
  -Homepage to view all entered recipes.
  -Ability to search for recipes by title or tagged categories

## Stretch:

Ability to upload a picture of the original recipe along with the recipe entry.
By default all recipes uploaded can only be viewed by the person loggin in, a stretch goal would add the ability to invite someone with the link to view the recipe.

## Fake Data/Mock JSON
```
const fakeDataRecipes = [
    {
        id:0,
        title:"PBJ",
        source:"Mother",
        ingredients:["bread", "peanut butter", "jam"],
        instructions: "1. Get bread. 2. Get peanut butter and jam. 3. Put together.",
        category:["snack", "dinner", "vegetarian", "sandwich"],
        user_id:1
    }, 
    {
        id:1,
        title:"Peanut Butter and Banana Sandwich",
        source:"Uncle Steve",
        instructions: "1. Get bread. 2. Get peanut butter. 3. Slice banana. 4. Put together",
        ingredients:["bread", "peanut butter", "banana", "chocolate"],
        category:["snack", "dinner", "vegetarian", "sandwich"],
        user_id:2
    }
];

const fakeDataUsers = [
    {
        user_id:1,
        username:"john_smith",
        password:"password"
    }, 
    {
        user_id:2,
        username:"jane_doe",
        password:"password"
    }
]

```

/*
To Add Later:
- Field for pictures/uploading pictures
- Field for personal ratings 
- Possible fields needed for access control/external linking
*/

