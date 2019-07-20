import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_START,
  REG_SUCCESS,
  REG_FAILURE,
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  DELETE_RECIPE_START,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  SELECT_RECIPE_START,
  UPDATE_RECIPE_START,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAILURE,
  SEARCH_STARTED,
  LOGOUT
} from '../actions';

const initialState = {
  users: [],
  logginIn: false,
  error: '',
  errorStatusCode: null,
  fetchingRecipes: false,
  addingRecipe: false,
  deletingRecipe: false,
  updatingRecipe:false,
  token: localStorage.getItem('token'),
  success: false,
  registerUser: false,
  recipes:[],
  selectedRecipe:null,
  filteredRecipes:[]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn:false,
        error:action.payload
      }


    case REG_START:
      return {
        ...state,
        registerUser: false,
        error: null
      };

    case REG_SUCCESS:
      return {
        ...state,
        registerUser: true,
        users: action.payload
      };

    case REG_FAILURE:
      return {
        ...state,
        registerUser:false,
        error: action.payload
      }

    case FETCH_RECIPES_START:
      return {
        ...state,
        fetchingRecipes:true,
      }
    case FETCH_RECIPES_SUCCESS: 
      return {
        ...state,
        fetchingRecipes:false,
        recipes: action.payload
      }
    case FETCH_RECIPES_FAILURE:
        return {
          ...state,
          fetchingRecipes:false,
          error: action.payload
        }
    
    case ADD_RECIPE_START:
        return {
          ...state,
          addingRecipe:true
        }
    case ADD_RECIPE_SUCCESS:
        return {
          ...state,
          addingRecipe:false,
          recipes: action.payload,
          filteredRecipes:[]
        }
    case ADD_RECIPE_FAILURE:
        return {
            ...state,
            addingRecipe:false,
            error: action.payload
        }
    
    case UPDATE_RECIPE_START:
        return {
          ...state,
          updatingRecipe: true,
        }
        
    case UPDATE_RECIPE_SUCCESS:
        return {
          ...state,
          updatingRecipe: false,
          selectedRecipe:null
        }
    
    case UPDATE_RECIPE_FAILURE:
        return {
          ...state,
          updatingRecipe: false,
          selectedRecipe: null,
          error: action.payload
        }
    

    
    case DELETE_RECIPE_START:
        return {
          ...state,
          deletingRecipe:true
        }
    case DELETE_RECIPE_SUCCESS:
        return {
          ...state,
          deletingRecipe:false,
          filteredRecipes: []
          //recipes: [...action.payload]
        }
    case DELETE_RECIPE_FAILURE:
        return {
            ...state,
            deletingRecipe:false,
            error: action.payload
        }
    
    case SELECT_RECIPE_START:
        return {
          ...state,
          selectedRecipe: action.payload
        }
    
    case SEARCH_STARTED:
      return {
        ...state,
        filteredRecipes: state.recipes.filter( recipe => {
            if(action.payload.length <= 0){
              return false;
            }
            else if (recipe.title.toLowerCase().includes(action.payload.toLowerCase()) || recipe.category.toLowerCase().includes(action.payload.toLowerCase()) ){
              return recipe;
            } else {
              return false;
            }
            }
          )
      }

    case LOGOUT:
      return{
        ...state,
        token: null
      }
      

    default:
      return state;
  }
}

export default reducer;


  //For Reference here is what a recipe should look like. 
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
 
