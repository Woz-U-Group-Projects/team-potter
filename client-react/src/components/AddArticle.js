<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import axios from "axios";
import '../task.min.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    this.articleTitle = React.createRef();
    this.articleArticle = React.createRef();
    this.articleAuthorName = React.createRef();
    this.state = {chars_left: null, max_chars: 500};
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

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({chars_left: charLength});
  }

  render() {
    return (
      <>
        <Header />
      <div className="container addArticle">         
         <h2>Add New Article</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input type="text" className="form-control" id="title" aria-describedby="titleField" placeholder="Enter the title of your article here" ref={this.articleTitle}/>
          </div>
          <div className="form-group">
            <label htmlFor="article">Article: </label>
              <textarea type="text" className="form-control" id="article" placeholder="Enter your article content here" rows="30" maxLength={this.state.max_chars}
          required
          onChange={this.handleWordCount} ref={this.articleArticle} />
              <div className="float-right">{this.state.chars_left}</div>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author name:</label>
            <input type="text" className="form-control" id="author" placeholder="Enter your name here" ref={this.articleAuthorName}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.addArticle}>Submit</button>
          </form>
        </div>
        <Footer />
        </>
    );
  }
}

export default Articles;
||||||| merged common ancestors
=======
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
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
      <div>
         <Header />
        <h3>Add New Article</h3>
        Tittle:<input ref={this.articleTitle} /> <br />
        Article:<input ref={this.articleArticle} /> <br />
        Author name:<input ref={this.articleAuthorName} /> <br />
        <button type="button" className="btn btn-primary" onClick={this.addArticle}>add</button>
      </div>
    );
  }
}

export default Articles;
||||||||| merged common ancestors
=========
=======
>>>>>>> c1e29c90b200f4e59ed03b2e260a98d62fd2bc80
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
      <div>
         <Header />
        <h3>Add New Article</h3>
        Tittle:<input ref={this.articleTitle} /> <br />
        Article:<input ref={this.articleArticle} /> <br />
        Author name:<input ref={this.articleAuthorName} /> <br />
        <button type="button" className="btn btn-primary" onClick={this.addArticle}>add</button>
      </div>
    );
  }
}

export default Articles;
<<<<<<< HEAD
>>>>>>> d4edfa22a5b13d11a8a31d5b16c7fc2dcc2f6e35
||||||| merged common ancestors
>>>>>>>>> Temporary merge branch 2
=======
>>>>>>> c1e29c90b200f4e59ed03b2e260a98d62fd2bc80
