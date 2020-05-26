import React from "react";
import axios from "axios";
import '../task.min.css';
import MinifiedHeader from "./layouts/MinifiedHeader";
import Footer from "./layouts/Footer";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    this.articleTitle = React.createRef();
    this.articleArticle = React.createRef();
    this.articleAuthorName = React.createRef();
    this.state = { chars_left: null, max_chars: 500 };
    this.articleCategory = React.createRef();
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
      category: this.articleCategory.current.value
    }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.articleTitle.current.value = "";
      this.articleArticle.current.value = "";
      this.articleAuthorName.current.value = "";
      this.articleCategory.current.value = "";
    });
  };

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({ chars_left: charLength });
  }

  render() {
    return (
      <>
        <MinifiedHeader />
        <div className="container addArticle">
          <h2>Add New Article</h2>
          <form>

            <div className="form-group">
              <label htmlFor="title">Title: </label>
              <input type="text" className="form-control" id="title" aria-describedby="titleField" placeholder="Enter the title of your article here" ref={this.articleTitle} />
            </div>

            <div className="form-group">
              <label htmlFor="article">Article: </label>
              <textarea type="text" className="form-control" id="article" placeholder="Enter your article content here" rows="10" maxLength={this.state.max_chars}
                required
                onChange={this.handleWordCount} ref={this.articleArticle} />
              <div className="float-right">{this.state.chars_left}</div>
            </div>

            <div className="form-group">
              <label htmlFor="author">Author name:</label>
              <input type="text" className="form-control" id="author" placeholder="Enter your name here" ref={this.articleAuthorName} />
            </div>

            <label for="category">Category:</label>
            <select name="category" id="category" ref={this.articleCategory}>
              <option value="Aquatics">Aquatics </option>
              <option value="Covid">Covid-19 </option>
              <option value="Entertainment">Entertainment </option>
              <option value="Fitness">Fitness </option>
              <option value="Memes">Memes </option>
              <option value="Misc">Misc </option>
              <option value="Music">Music </option>
              <option value="Podcast">Podcast </option>
              <option value="Amateur Sports">Sports (Amateure) </option>
              <option value="Pro Sports">Sports (Professional) </option>
              <option value="Stay-At-Home Parent">Stay-At-Home Parent </option>
              <option value="Competitive Games">Video Games (Competitive) </option>
              <option value="NonCompetitive Games">Video Games (Non-Competitive) </option>
              <option value="Streaming Games">Video Games (Streaming) </option>
            </select>

            <br></br>

            <button type="submit" className="btn btn-primary" onClick={this.addArticle}>Submit</button>

          </form>
        </div>
        <Footer />
      </>
    );
  }
}


export default Articles;