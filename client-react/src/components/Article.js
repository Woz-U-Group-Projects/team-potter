<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import axios from "axios";
// import{ Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../task.min.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
    this.articleTitle = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  // componentDidMount() {
  //   this.deleteData();
  // }


  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/articles";
    axios
      .get(`${url}/` + this.props.match.params.id)
      .then((response) => this.setState({ article: response.data }));
  };

  deleteData = (id) => {
    let url = "http://localhost:3001/articles";
    axios
      .delete(`${url}/` + this.props.match.params.id)
      .then((response) => this.setState({ article: response.data }));
    console.log(id)
  }
   

  render() {
    const article = this.state.article;
    return (
      <div>
        <Header />
        <h1>{article.title}</h1>
        <p>{article.article}</p>
        <span className="badge badge-secondary p-2">{article.authorname}</span>
        <button type="button" className="btn btn-primary">
          Edit
        </button>
        <Button onClick={this.deleteData}type="button" className="btn btn-danger" href='/'>
          Delete
        </Button>
        <Footer />
      </div>
    );
  }
}

export default Article;
||||||| merged common ancestors
=======
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
import React from "react";
import axios from "axios";
import "../task.min.css";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [] };
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
    axios
      .get(url)
      .then((response) => this.setState({ article: response.data }));
  };

  render() {
    return (
      <div>
        <div>
        <h2>{this.title}</h2>
          {this.state.article.map((p) => (
            <div key={p._id}>
              <h2>{p.title}</h2>
              <p>{p.article}</p>
              <span>{p.authorname}</span> <br />
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Article;
||||||||| merged common ancestors
=========
=======
>>>>>>> c1e29c90b200f4e59ed03b2e260a98d62fd2bc80
import React from "react";
import axios from "axios";
import "../task.min.css";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [] };
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
    axios
<<<<<<< HEAD
      .get(url)
||||||| merged common ancestors
      .get(`${url}/` + this.props.match.params.id)
=======

      .get(`${url}/` + this.props.match.params.id)
>>>>>>> c1e29c90b200f4e59ed03b2e260a98d62fd2bc80
      .then((response) => this.setState({ article: response.data }));
  };

  render() {
    return (
      <div>
        <div>
        <h2>{this.title}</h2>
          {this.state.article.map((p) => (
            <div key={p._id}>
              <h2>{p.title}</h2>
              <p>{p.article}</p>
              <span>{p.authorname}</span> <br />
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Article;
<<<<<<< HEAD
>>>>>>> d4edfa22a5b13d11a8a31d5b16c7fc2dcc2f6e35
||||||| merged common ancestors
>>>>>>>>> Temporary merge branch 2
=======
>>>>>>> c1e29c90b200f4e59ed03b2e260a98d62fd2bc80
