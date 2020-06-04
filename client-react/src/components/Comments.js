import React from 'react';
import axios from 'axios';

class Comments extends React.Component {


  constructor(props){
    super(props);
    this.state = { comments: [] }
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/articles/${this.props.id}/comments`)
      .then(response => this.setState({ comments : response.data }))
      .catch(err => console.log(err));
  }



  render() {
    return (
        <div className="container">
            <h3>Comments</h3>
              {this.state.comments.map((c) => (
                  <ul key={c._id} style={{ listStyle: "none"}}>
      
        <li>{ c.content } <span style={{fontSize: .75 + "em", color: "grey"}}> - {c.date}</span></li>
        </ul>
              ))}
            
        </div>
        
);
}
}

export default Comments;