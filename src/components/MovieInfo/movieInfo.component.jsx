import React from "react";
import "./movieInfo.style.css"
import InputButton from "../InputButton/input-button.component";
const MovieInfo = () => {
    return (
        <div className="movie-info">
            <div className="holder-info">
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <InputButton />
            </div>
        </div>
    );
}

export default MovieInfo;