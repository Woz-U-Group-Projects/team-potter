import React from 'react';
import axios from 'axios';

class Comments extends React.Component {


  constructor(props){
    super(props);
    this.state = { comments: [] }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/comments')
      .then(response => this.setState({ comments : response.data }))
      .catch(err => console.log(err));
  }



  render() {
    return (
        <div className="container">
            <h3>Comments</h3>
              {this.state.comments.map((c) => (
                  <div key={c._id}>
      
        <p>{ c.content }</p>
        </div>
              ))}
            
        </div>
        
);
}
}

export default Comments;