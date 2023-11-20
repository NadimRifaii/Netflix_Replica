import React from "react";
import "./movieDetails.style.css";

const MovieDetails = (props) => {
    return (
        <div className="movie-details-container">
            <div className="movie-details">
                    <div>
                        <span class="movie-title"> <h2>Scarface</h2></span>
                    </div>
                    <div>
                        <span class="movie-year">1983 | </span>
                        <span class="movie-rating">18+</span>
                        <span class="movie-duration"> | 2h 49m | </span>
                        <span class="movie-genre">Thrillers</span>
                    </div>
                    <div className="desc">
                        <span class="movie-plot">In a ruthless rise to Miami drug lord, a Cuban-born gangster descends into addiction, obsession and brutality, with grisly consequences.</span>
                    </div>
                    <div>
                        <span class="movie-stars">Starring: Al Pacino, Steven Bauer, Michelle Pfeiffer</span>
                    </div>
            </div>
        </div>
    );
}

export default MovieDetails;