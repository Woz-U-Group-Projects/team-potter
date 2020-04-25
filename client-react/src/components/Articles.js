import React from "react";
//import axios from "axios";
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