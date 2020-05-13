import React from "react";
import axios from "axios";
import{ Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import "../task.min.css";
import MinifiedHeader from "./layouts/MinifiedHeader";
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
        <MinifiedHeader />
        <div className="container article">
          <h1>{article.title}</h1>

          <p>{article.article}</p>

          <span className="badge badge-secondary p-2">{article.authorname}</span>

          <Link className="btn btn-primary" to={`/EditArticle/${article._id}`}>
            Edit
          </Link>

          <Link onClick={this.deleteData}className="btn btn-danger" to='/'>
            Delete
          </Link>
          
          
            <div className="form-group"></div>
          </div>
        <Footer />
      </div>

    );
  }
}

export default Article;