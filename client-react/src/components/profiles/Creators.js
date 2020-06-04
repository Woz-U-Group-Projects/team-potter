import React from "react";
import { Link } from "react-router-dom";
import MinifiedHeader from "../layouts/MinifiedHeader";
import Footer from "../layouts/Footer";
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
                    <Link className="btn btn-primary" to={'/Dickson/'}>
                        See More About Dickson!
                    </Link>
                    <br />

                    <h1>Malik</h1>
                    <p>Testing this out</p>
                    <Link className="btn btn-primary" to={'/Malik/'}>
                        See More About Malik!
                    </Link>
                    <br />

                    <h1>Logan</h1>
                    <img id='Logan' src={Logan} alt="Logan" /><br />
                    <Link className="btn btn-primary" to={'/Logan/'}>
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