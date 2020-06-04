import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddArticle from "./components/AddArticle";
import Article from "./components/Article";
import Articles from "./components/Articles";
import EditArticle from "./components/EditArticle";
import Creators from "./components/profiles/Creators";
import Dickson from "./components/profiles/Dickson";
import Malik from "./components/profiles/Malik";
import Logan from "./components/profiles/Logan";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/Creators" component={Creators} />
      <Route exact path="/Dickson" component={Dickson} />
      <Route exact path="/Malik" component={Malik} />
      <Route exact path="/Logan" component={Logan} />
      <Route exact path="/" component={Articles} />
      <Route exact path="/article/:id" component={Article} />
      <Route path="/AddArticle" component={AddArticle} />
      <Route path="/EditArticle/:id" component={EditArticle} />
    </div>
  );
}

export default App;
