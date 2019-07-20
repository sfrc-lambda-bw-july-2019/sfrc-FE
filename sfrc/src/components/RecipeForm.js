import React, {Component} from 'react';




class RecipeForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        recipe: this.props.selectedRecipe || {
          title: '',
          source: '',
          ingredients: '',
          instructions:'',
          category:'',
          user_id: localStorage.getItem("user_id")
        }
         
      };
      //}
    }

    componentDidUpdate(prevProps) {
      if (
        this.props.selectedRecipe &&
        prevProps.selectedRecipe != this.props.selectedRecipe
      ) {
        this.setState({
          recipe:this.props.selectedRecipe
        });
      }
    }
  
    submitRecipe = event => {
      event.preventDefault();
      const newRecipe = {
        title: this.state.recipe.title,
        source: this.state.recipe.source,
        ingredients: this.state.recipe.ingredients,
        instructions:this.state.recipe.instructions,
        category: this.state.recipe.category,
        user_id: this.state.recipe.user_id
      }
      if (this.props.selectedRecipe){
        this.props.updateRecipe(this.state.recipe)
      } else{
        this.props.addRecipe(newRecipe);
      }
      
      this.setState({
        recipe:{
          title: '',
          source: '',
          ingredients: '',
          instructions:'',
          category:'',
          user_id: localStorage.getItem("user_id")
        }
        }
      );
    
    }
  
    handleInputChange = e => {
      e.persist();
      this.setState(prevState =>({
        recipe: {
          ...prevState.recipe, 
          [e.target.name]: e.target.value 
        }
      }));
    };
  
    render() {
      return (
        <div>
          <form  onSubmit={this.submitRecipe}>
            <input
              onChange={this.handleInputChange}
              placeholder="title"
              value={this.state.recipe.title}
              name="title"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="source"
              value={this.state.recipe.source}
              name="source"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="ingredients"
              value={this.state.recipe.ingredients}
              name="ingredients"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="instructions"
              value={this.state.recipe.instructions}
              name="instructions"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="category"
              value={this.state.recipe.category}
              name="category"
            />
            <button type="submit">{this.props.selectedRecipe ? "Update Recipe":"Add Recipe to the Secret Cookbook!!!"}</button>
          </form>
        </div>
      );
    }
  }
  
  export default RecipeForm;


        // if(this.props.selectedRecipe){
      //   this.state = {
      //     title: this.props.selectedRecipe.title,
      //     source: this.props.selectedRecipe.source,
      //     ingredients: this.props.selectedRecipe.ingredients,
      //     instructions: this.props.selectedRecipe.instructions,
      //     category: this.props.selectedRecipe.category,
      //     user_id:this.props.selectedRecipe.user_id
      //   }
      // } else { 
      