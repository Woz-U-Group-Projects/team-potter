import React from "react";
import axios from "axios";
import '../task.min.css';
import Header from "./layouts/Header";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    this.articleTitle = React.createRef();
    this.articleArticle = React.createRef();
    this.articleAuthorName = React.createRef();
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

  addArticle = () => {
    let url = "http://localhost:3001/articles";
    axios.post(url, {
      title: this.articleTitle.current.value,
      article: this.articleArticle.current.value,
      authorname: this.articleAuthorName.current.value,
    }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.articleTitle.current.value = "";
      this.articleArticle.current.value = "";
      this.articleAuthorName.current.value = "";
    });
  };

  render() {
    return (
      <div className="container addArticle">
         <Header />
         <h1>Add New Article</h1>
        <form>
          <div className="form-group">
            <label for="title">Title: </label>
            <input type="text" className="form-control" id="title" aria-describedby="titleField" placeholder="Enter the title of your article here" ref={this.articleTitle}/>
          </div>
          <div className="form-group">
            <label for="article">Article: </label>
            <textarea type="text" className="form-control" id="article" placeholder="Enter your article content here" rows="30" ref={this.articleArticle}/>
          </div>
          <div className="form-group">
            <label for="author">Author name:</label>
            <input type="text" className="form-control" id="author" placeholder="Enter your name here" ref={this.articleAuthorName}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.addArticle}>Submit</button>
          </form>
        </div>
    );
  }
}

export default Articles;
