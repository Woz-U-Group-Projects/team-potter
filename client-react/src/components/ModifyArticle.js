import React from "react";
import axios from "axios";
import '../task.min.css';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

class ModifyArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      article: '',
      authorname: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/articles'+this.props.match.params.id)
      .then(res =>  {
        this.setState({
          title: res.data.title,
          article: res.data.article,
          authorname: res.data.authorname
        })
      })
    .catch(err => {
      console.log("Error from ModifyArticle")
    })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      article: this.state.article,
      authorname: this.state.authorname
    };

    axios
      .put('http://localhost:3001/articles'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error from ModifyArticle")
      })
  };

  render() {
    return (
      <>
      <Header />
    <div className="container addArticle">         
       <h2>Edit {this.state.title} Article</h2>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input type="text" className="form-control" id="title" aria-describedby="titleField" value={this.state.title} onChange={this.onChangeArticleTitle}/>
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
          <input type="text" className="form-control" id="author" value={this.state.authorname}
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

export default ModifyArticle;