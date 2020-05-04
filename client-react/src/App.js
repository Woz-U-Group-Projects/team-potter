import React from "react";
<<<<<<< HEAD
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
import  Articles from "./components/Articles";
||||||||| merged common ancestors
import  Task from "./components/Task";
=========
=======

>>>>>>> c1e29c90b200f4e59ed03b2e260a98d62fd2bc80
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddArticle from "./components/AddArticle";
import Article from "./components/Article";
import Articles from "./components/Articles";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Articles} />
      <Route exact path="/article/:id" component={Article} />
      <Route path="/AddArticle" component={AddArticle} />
    </div>
  );
}

export default App;
