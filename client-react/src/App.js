import React from "react";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AddArticle from "./components/AddArticle";
import Articles from "./components/Articles";


import "./App.css";

function App() {
  return (
    
      <div className="App">     
      
        <Route exact path="/" component={Articles} />
        <Route path="/AddArticle" component={AddArticle} />
      </div>
    
  );
}

export default App;
