import React from "react";
import axios from "axios";
import{ Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../task.min.css";
import MinifiedHeader from "./layouts/MinifiedHeader";
import AddComment from "./AddComment";
import Comments from "./Comments";
import Footer from "./layouts/Footer";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
    this.articleTitle = React.createRef();
    this.articleCategory = React.createRef();
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

          <span className="badge badge-secondary font-italic">
            Author: {article.authorname}
            </span> <br />

          <span className="badge badge-secondary font-italic">
            Category: {article.category}
            </span> <br />

          <br />
          <Link className="btn btn-primary" to={`/EditArticle/${article._id}`}>
            Edit
          </Link>

          <Button onClick={this.deleteData} type="button" className="btn btn-danger ml-2" href='/Articles'>
            Delete
          </Button>

          <div className="form-group"></div>
        </div>
        <Comments id={this.props.match.params.id}/>
        <AddComment id={this.props.match.params.id}/>
         
        <Footer />
      </div>

    );
  }
}

export default Article;