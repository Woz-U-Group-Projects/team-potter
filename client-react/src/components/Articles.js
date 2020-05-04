<<<<<<< HEAD
import React from "react";
import axios from "axios";
import '../task.min.css'

const Articles = props => {
    return (
        <div>
            <Title name="Lifestyle Blog" />
        </div>
    )
};

const Title = props => (
    <div>
        <h1> {props.name} </h1>
    </div>
);

export default Articles;
||||||| merged common ancestors
=======
import React from "react";
import axios from "axios";
import "../task.min.css";
import { Link } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
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
      .then((response) => this.setState({ articles: response.data }));
  };

  render() {
    return (
      <div>
        <Header />     

        <div className="container">
          {this.state.articles.map((p) => (
            <div key={p._id}>
              <Link to={`article/${p._id}`}>
                <h2 className="display-5">{p.title}</h2>
              </Link>
              <p className="lead">{p.article}</p>
              {/* innclude date created <span className="badge badge-secondary p-2">{p.createdAt.toLocaleDateString()}</span>*/} 
              <span className="badge badge-secondary p-2">{p.authorname}</span> <br />
              <Link className="btn btn-success" to={`article/${p._id}`}>
                Read more
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Articles;
>>>>>>> 1ba287e5e30050a28f613c67fc8533e0b1da25c2
