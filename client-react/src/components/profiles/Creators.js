import React from "react";
import { Link } from "react-router-dom";
import MinifiedHeader from "../layouts/MinifiedHeader";
import Footer from "../layouts/Footer";

class Creators extends React.Component {
    
    render() {
        return (
            <div>
                <MinifiedHeader />
    
                <div className="container creators">
                    <h1>Dickson</h1>
                    <p>Testing this out</p>
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
                    <p>Testing this out</p>
                    <Link className="btn btn-primary" to={'/Logan/'}> 
                    See More About logan!
                    </Link>
                    <br />
    
                </div>
                <Footer />
            </div>
        )
    } 
};



export default Creators;