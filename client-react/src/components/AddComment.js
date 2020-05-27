import React from 'react';
import axios from 'axios';

class AddComment extends React.Component {

  constructor(props){
    super(props);
   
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        content: '',
        thumbsup: 0,
        thumbsdown: 0
    }
  }
  
  onChangeContent(e){
      this.setState({
          content : e.target.value
      });
  }

   onSubmit(e){
     e.preventDefault();
     const comment = {
         content : this.state.content
     }
      
      axios.post('http://localhost:3001/comments', comment)
        .then(res => { 
          
          this.setState({content : ''})
          
        })
        .then(() => this.setState({content : ''}));      
    }
   
  render() {
    return (
      <div className="container">
      <h3>Add a Comment</h3>
      <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <textarea rows="3"
                required
                className="form-control"
                value={this.state.content}
                placeholder="Type a comment"
                onChange={this.onChangeContent}>
            </textarea>
          </div>
          <div className="form-group" align="right">
            <input type="submit"
                className="btn btn-success"
                value="Post Comment">
            </input>
          </div>
      </form>
      </div>
    );
  }
}

export default AddComment;