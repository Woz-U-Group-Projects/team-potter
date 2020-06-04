import React from "react";
import { Link } from "react-router-dom";
import MinifiedHeader from "../layouts/MinifiedHeader";
import Footer from "../layouts/Footer";

class Logan extends React.Component {
    
    render() {
        return (
            <div>
                <MinifiedHeader />
    
                <div className="container logan">
                    <h1>Logan</h1>
                    <p>Testing this out</p>
                    <Link className="btn btn-primary" to={'/Creators/'}> 
                    Go Back
                    </Link>
    
                </div>
                <Footer />
            </div>
        )
    } 
};



export default Logan;