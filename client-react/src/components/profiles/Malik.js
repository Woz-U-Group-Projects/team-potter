import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";

class Malik extends React.Component {
    
    render() {
        return (
          <div className="white-background">
            <header>
              <h2><Link className="headerlink" to="/">Lifestyle Blog</Link></h2>
            <nav>
              <li><Link className="landinglink" to="/Articles">Home</Link></li>
              <li><Link className="landinglink" to="/AddArticle">Add Article</Link></li>
              <li><Link className="landinglink" to="/Creators">Site Creators</Link></li>
            </nav>
            </header>

            <section>
                <div className="about-malik">
                <h3>A Little Bit About Me</h3>
                <p>Born in Brooklyn, NY and currently residing in Norwalk, CT, I'm a husband as well as a father of a 3 year old girl. I've been in IT for almost 8 years in the IT Service Management/Infrastructre space. See, here's the thing... I'm not your average tech guy. I didn't grow up wanting to do anything with technology outside of using it. I didn't want to build things, design websites, create logos, support enterprise technologhy infrastructure, or choose technology as a career profession. Now, I do all of those things. By day, I help a New York PR firm keep their technology infrastructure going without a hitch. By night, I design and develop websites for small businesses and organizations. While I do know some back-end technologies, I focus on the front-end to leave your webpages beautiful, clean, and enticing</p>
                </div>
                <hr></hr>
            </section>
            <section className="container-fluid" id="skills">
              <div className="container">
              <h2>Skills</h2>
                <div className="row">
                  <div className="col-md-4">
                    <i className="fa fa-html5 fa-5x text-center" aria-hidden="true"></i>
                    <h3>HTML</h3>
                    <p>Proficient in HTML with a focus on writing clean, organized, semantic markup so that content is well strctured, easy to troubleshoot, and accessible.</p>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-css3 fa-5x text-center" aria-hidden="true"></i>
                    <h3>CSS</h3>
                    <p>I write clean and organized CSS, enabling beautiful website designs and creations. I strive to stay up to date on best practices, and aim to write code that could be built upon.</p>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-code fa-5x text-center" aria-hidden="true"></i>
                    <h3>JavaScript</h3>
                    <p>I write readable, easy to follow JavaScript code. I bring your webpages to life by using this to create a dynamic, interactive, fun site for both you and your visitors.</p>
                  </div>
                </div>
                </div>
            </section>
            <section className="container-fluid" id="hobbies">
    <div className="container">
    <h2>Hobbies</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Piano Playing</h3>
          <p>I've been playing the piano/keyboard for over 10 years. I use it as a way to defrazzle from the workday and reflect on my obstacles and accomplishments of the day.</p>
        </div>
        <div className="col-md-4">
          <h3>Eating</h3>
          <p>We all love food, but I enjoy dining out with my close friends and family. From time to time, I'll try something new to gain new perspectives.</p>
        </div>
        <div className="col-md-4">
          <h3>Short Weekend Trips</h3>
          <p>I enjoy taking a weekend to see and experience new cities.</p>
        </div>
      </div>
      </div>
  </section>
          <Footer />
          </div>
        )
    } 
};

export default Malik;