import React from "react";
import "./moreDetails.style.css"
const MoreDetails = () => { 
    return (
        <div className="more-details-container">
            <div>
                <h2>More Details</h2>
            </div>
            <div className="content">
                <div className="section">
                    <p className="smaller">Watch offline</p>
                    <p>Download and watch everywhere you go.</p>
                </div>

                <div className="section">
                    <p className="smaller">Genres</p>
                    <p>Classic Movies, Crime Movies, Drama Movies, Thriller Movies</p>
                </div>
                <div className="section">
                    <p className="smaller">This movie is...</p>
                    <p>Violent</p>
                </div>
                <div className="section">
                    <p className="smaller">Audio</p>
                    <p>English - Audio Description, English [Original], French</p>
                </div>
            </div>

            <div className="content">
                <div className="section">
                    <p className="smaller">Subtitles</p>
                    <p>Arabic, English, French</p>
                </div>
            </div>

            <div className="content"> 
                <div className="section">
                    <p className="smaller">Cast</p>
                    <p>Al Pacino</p>
                    <p>Paul Shenar</p>
                    <p>Harris Yulin</p>
                </div>

                <div className="section">
                    <p className="smaller"> </p>
                    <p>Steven Bauer</p>
                    <p>Robert Loggia</p>
                    <p>Ángel Salazar</p>
                </div>
                <div className="section">
                    <p className="smaller"> </p>
                    <p>Michelle Pfeiffer</p>
                    <p>Miriam Colon</p>
                    <p>Pepe Serna</p>
                </div>
                <div className="section">
                    <p className="smaller"> </p>
                    <p>Mary Elizabeth Mastrantonio</p>
                    <p>F. Murray Abraham</p>
                </div>
            </div>
        </div>
    )
}


export default MoreDetails;
