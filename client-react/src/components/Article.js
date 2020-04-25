import React from "react";
import axios from "axios";
import "../task.min.css";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [] };
    this.articleTitle = React.createRef();
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
      .get(url)
      .then((response) => this.setState({ article: response.data }));
  };

  render() {
    return (
      <div>
        <div>
        <h2>{this.title}</h2>
          {this.state.article.map((p) => (
            <div key={p._id}>
              <h2>{p.title}</h2>
              <p>{p.article}</p>
              <span>{p.authorname}</span> <br />
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Article;
