import React from "react";
import { Link } from "react-router-dom";
import MinifiedHeader from "../layouts/MinifiedHeader";
import Footer from "../layouts/Footer";
import Malik from "../../Images/Malik-headshot.jpg";
import Logan from "../../Images/Logan_2.jpg";
import Dickson from "../../Images/Dickson.png";

class Creators extends React.Component {

    render() {
        return (
            <div>
                <MinifiedHeader />

                <div className="container creators">
                    <h1>Dickson</h1>
                    <img className='profileImg' src={Dickson} alt="Dickson" /><br />
                    <br />
                    <Link className="btn btn-primary" to={'/Dickson/'}>
                        See More About Dickson!
                    </Link>
                    <br />
                    <br />
                    <h1>Malik</h1>
                    <img id="Malik" src={ Malik } alt="Malik" />;
                    <p>Testing this out</p>
                    <Link className="btn btn-primary" to={'/Malik/'}>
                        See More About Malik!
                    </Link>
                    <br />
                    <br />
                    <h1>Logan</h1>
                    <img id='Logan' src={Logan} alt="Logan" /><br />
                    <br /><Link className="btn btn-primary" to={'/Logan/'}>
                            See More About Logan!
                    </Link>
                        <br />
    
                </div>
                    <Footer />
                </div>
        )
    } 
};



export default Creators;