import React from "react";
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
