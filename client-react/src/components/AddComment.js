import React from 'react';
import axios from 'axios';
import{ Link } from "react-router-dom";

class AddComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      comment: []
    };
    this.commentContent = React.createRef();
    this.state = {chars_left: null, max_chars: 40};
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

  addComment = () => {
    console.log(this.props)
    let url = "http://localhost:3001/comments";
    axios.post(`${url}/` + this.props.id, {
      content: this.commentContent.current.value
    }).then(response => {
      // console.log(response)
      // // refresh the data
      this.getData();
      // empty the input
      //this.commentContent.current.value = "";
    });
  };

  handleWordCount = event => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({chars_left: charLength});
  };

  handleSubmit = event => {
    event.preventDefault();
    let url = `http://localhost:3001/articles/${this.props.id}/comments`;
    axios.get(url).then(response => this.setState({comments: response.data }));
    
  };
   
  render() {
    return (
      <div className="container">
      <h3>Add a Comment</h3>
      <form>
          <div className="form-group">
            <textarea rows="3"
                className="form-control"
                placeholder="Type a comment"
                maxLength={this.state.max_chars}
          required
          onChange={this.handleWordCount} ref={this.commentContent} />
              <div className="float-right">{this.state.chars_left}</div>
          </div>
          <div className="form-group" align="right">            
            <button className="btn btn-success" onClick={this.addComment}>Post Comment</button>
          </div>
      </form>
      </div>
    );
  }
}

export default AddComment;