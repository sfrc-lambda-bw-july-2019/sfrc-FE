import React, {Component} from 'react';


class RecipeForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        source: '',
        ingredients: '',
        instructions:'',
        category:''
      };
    }
  
    addRecipe = event => {
      event.preventDefault();
      this.props.addRecipe(this.state);
      this.setState({
        title: '',
        source: '',
        ingredients: '',
        instructions:'',
        category:''
      });
    
    }
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      return (
        <div>
          <form  onSubmit={this.addRecipe}>
            <input
              onChange={this.handleInputChange}
              placeholder="title"
              value={this.state.title}
              name="title"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="source"
              value={this.state.source}
              name="source"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="ingredients"
              value={this.state.ingredients}
              name="ingredients"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="instructions"
              value={this.state.instructions}
              name="instructions"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="category"
              value={this.state.category}
              name="category"
            />
            <button type="submit">Add Recipe to the Secret Cookbook!!!</button>
          </form>
        </div>
      );
    }
  }
  
  export default RecipeForm;