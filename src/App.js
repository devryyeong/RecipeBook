import styled from 'styled-components';
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./page/homePage";
import AddRecipe from "./page/AddRecipe";
import Category from "./page/Category";

function App(){
  return (
    <div>
      <Route path="/" exact={true} component={HomePage}/>
      <Route path="/add" component={AddRecipe}/>
      <Route path="/category" component={Category}/>

    </div>

  );
}

export default App;