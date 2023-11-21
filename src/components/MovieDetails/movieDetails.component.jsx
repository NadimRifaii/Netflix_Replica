import React from "react";
import { useEffect, useState } from "react";
import "./movieDetails.style.css";
import { getMovieDetails } from "../../utils/api.utils";
//
import MoreDetails from '../MoreDetails/moreDetails.component.jsx'
const MovieDetails = (props) => {
    const [movieDetails, setMovieDetails] = useState({})
    const id = 507089;
    useEffect(() => {
        async function getMovie() {
            const data = await getMovieDetails(id)
            setMovieDetails(data)
        }
        getMovie()
    }, [])
    function convertMinutesToHoursAndMinutes(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours} h ${remainingMinutes} minutes`;
    }
    function getCast(casts, count) {
        let str = []
        for (let i = 0; i < count; i++) {
            str.push(casts[i].name)
        }
        return str.join(' ,')
    }
    const { original_title: title, release_date: date, runtime, genres, overview, backdrop_path: bgImage, casts } = movieDetails
    console.log(movieDetails)
    return (
        //if(movieDetails) return => 
        Object.keys(movieDetails).length > 0 &&
        <div className="page">
            <div className="movie-details-container" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="movie-details">
                    <div>
                        <span className="movie-title"> <h2>{title}</h2></span>
                    </div>
                    <div>
                        <span className="movie-year">{date.split('-')[0]} | </span>
                        <span className="movie-rating">18+</span>
                        <span className="movie-duration"> | {convertMinutesToHoursAndMinutes(runtime)} | </span>
                        <span className="movie-genre">{genres[0].name}</span>
                    </div>
                    <div className="desc">
                        <span className="movie-plot">{overview}</span>
                    </div>
                    <div>
                        <span className="movie-stars">Cast: {getCast(casts.cast, 3)}</span>
                    </div>
                </div>
            </div>
            <MoreDetails details={{ getCast, genres, casts }} />
        </div>
    );
}

export default MovieDetails;