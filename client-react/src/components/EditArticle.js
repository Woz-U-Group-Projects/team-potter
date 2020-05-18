import React from "react";
import axios from "axios";
import '../task.min.css';
import Footer from "./layouts/Footer";
import MinifiedHeader from "./layouts/MinifiedHeader";
// import { withRouter } from "react-router-dom";

class EditArticle extends React.Component {
  constructor(props) {
      super(props);
        this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
        this.onChangeArticleArticle = this.onChangeArticleArticle.bind(this);
        this.onChangeArticleAuthorName = this.onChangeArticleAuthorName.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
          title: '',
          article: '',
          authorname: ''
      };
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
    axios

      .get(`${url}/` + this.props.match.params.id)
        .then((response) => this.setState({
            // id: response.data.id,
            title: response.data.title,
            article: response.data.article,
            authorname: response.data.authorname
        }));
  };
            
  
  onChangeArticleTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeArticleArticle(e) {
    this.setState({ article: e.target.value })
  }

  onChangeArticleAuthorName(e) {
    this.setState({ authorname: e.target.value })
  }

  onSubmit(e) {
      e.preventDefault()

    const articleObject = {
      title: this.state.title,
      article: this.state.article,
      authorname: this.state.authorname
    };
     
    axios
      .put('http://localhost:3001/articles/edit-article/'+this.props.match.params.id, articleObject)
        .then(response => {
           
            console.log('Article successfully updated')
        }).catch((error) => {
            console.log(error);
        })
      // Redirect to Article List 
    this.props.history.push('/');
     
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
        <MinifiedHeader />
      <div className="container addArticle">         
         <h2>Edit Article</h2>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input type="text" className="form-control" id="title" aria-describedby="titleField" value={this.state.title || ""} onChange={this.onChangeArticleTitle}/>
          </div>
          <div className="form-group">
            <label htmlFor="article">Article: </label>
              <textarea type="text" className="form-control" id="article" placeholder="Enter your article content here" rows="30" maxLength={this.state.max_chars}
          required value={this.state.article}
          onChange={this.onChangeArticleArticle}/>
              <div className="float-right">{this.state.chars_left || this.state.max_chars}</div>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author name:</label>
            <input type="text" className="form-control" id="author" value={this.state.authorname || ""}
                onChange={this.onChangeArticleAuthorName}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <Footer />
        </>
    );
  }
}

export default EditArticle;
