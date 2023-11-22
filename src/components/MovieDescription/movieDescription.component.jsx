import React from "react";
import "./movieDescription.style.css"

const MovieDescription = ({ tagline }) => {
    return (
        <div className="container">
            <div className="movie-description-container">
                <div className="inner-container">
                    <p>{tagline}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDescription;