import React from "react";
import axios from "axios";
import '../task.min.css';
import { Link } from 'react-router-dom';
import Header from "./layouts/Header";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    this.articleTitle = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/articles";
    axios.get(url).then(response => this.setState({ articles: response.data }));
  };

  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron">
          <h1 className="display-3">LifeStyle Blog</h1>
        </div>
        
        <div className="container-fluid">
          {this.state.articles.map(p => (
            <div key={p._id}>
              <h2 className="display-5 text-center">{p.title}</h2>
              <p>{p.article}</p>
              <span>{p.authorname}</span> <br />
              <Link className="btn btn-success" to="/article">Read more</Link>
            </div>
          ))}
        </div>        
      </div>
    );
  }
}

export default Articles;
