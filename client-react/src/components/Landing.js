import React from "react";
import { Link } from "react-router-dom";
import Footer from "./layouts/Footer";

class Landing extends React.Component {
    
    render() {
        return (
          <div>
            <header>
              <h2><Link className="headerlink" to="/">Lifestyle Blog</Link></h2>
            <nav>
              <li><Link className="landinglink" to="/Articles">Home</Link></li>
              <li><Link className="landinglink" to="/AddArticle">Add Article</Link></li>
              <li><Link className="landinglink" to="/Creators">Site Creators</Link></li>
            </nav>
            </header>

            <section className="hero">
              <div className="background-image"></div>
              <div className="hero-content-space">
                <h1>Lifestyle Blog</h1>
                <h3>Tell the World About You. Lifestyles are a lifelong experience!</h3>
                <Link className="bttn" to="/Articles">Join The Experience!</Link>
              </div>
            </section>
          <Footer />
          </div>
        )
    } 
};

export default Landing;