import React from "react";
import { Link } from "react-router-dom";
import MinifiedHeader from "../layouts/MinifiedHeader";
import Footer from "../layouts/Footer";
import DicksonN from "../../Images/Dickson.png";

class Dickson extends React.Component {
  render() {
    return (
      <div>
        <MinifiedHeader />

        <div className="container profile">         
            <div>
            <img className='profileImg' src={DicksonN} alt="Dickson" width="200"/><br />
              <h1 class="name">Dickson Njoroge</h1>
              <h4 class="subtitle">SD Student</h4>
            </div>

            <div>
              <h2>Bio</h2> 
              <p>
                Full Stack JavaScript developement student, web developer, currently living in Columbia, MO. I have a Bachelor of Science in Information Technology from Jomo Kenyatta University of Agriculture and Technology (JKUAT), 
              </p>
              <h2>Experience</h2> 
              <p>
                Full Stack JavaScript student, web developer, currently living in Columbia, MO. I have a Bachelor of Science in Information Technology from Jomo Kenyatta University of Agriculture and Technology(JKUAT), 
              </p>
              <ul class="social-links">
                <li>
                  <a href="https://github.com/njorogedk">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dicksonnjoroge/">Linkedin</a>
                </li>
              </ul>
            </div>          

          <Link className="btn btn-primary" to={"/Creators/"}>
            Go Back
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dickson;
