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
              <p>
              Full Stack JavaScript student, currently living in Columbia, MO. 
              I have a Bachelor of Science in Information Technology from Jomo Kenyatta University of Agriculture and Technology (JKUAT).
              </p> 
              <p>
              I am a husband and a father of one six years old daughter. 
              I love technology very much, I have worked as a systems/network administrator for 8 years at a university in Kenya. 
              Currently working as IT technologist at Boone Courthouse in Columbia MO. 
              I been doing software development on need basis, just getting systems do what I need at that without following any standards. 
              During my previous employment I had the opportunity to implement all open source network management and monitoring system, KOHA as the library system and Moodle for E-learning. 
              My technology passion enabled me customize and configure these software’s to meet the institutional needs.
              </p>
              <p>I decided to further my passions and become a profession software developer. 
                I declared my interests to friends and one friend whom is also a WozU graduate proposed to me WozU as that dream college I was looking for. 
                I am happy that finally for accomplishing this step in my career path.
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
