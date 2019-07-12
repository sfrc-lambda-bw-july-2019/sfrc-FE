import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class App extends React.Component {
  render(){
    return (
    <div>
      <header>
        Secret Family Recipes Cookbook
      </header>
      <p>UNDER CONSTRUCTION</p>
      {this.props.recipes.map(recipe => <p>{recipe.title}</p>)}
    </div>
    );
  }
}

const mapStateToProps = state => (
  {
    smurfs: state.smurfs,
    recipes: state.recipes
  }
)



export default connect(mapStateToProps,{})(App);
