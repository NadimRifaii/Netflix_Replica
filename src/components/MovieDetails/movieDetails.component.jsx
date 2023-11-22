import { useEffect, useState } from "react";
import "./movieDetails.style.css";
import { getMovieDetails } from '../../utils/api.utils.js'
import MoreDetails from "../MoreDetails/moreDetails.component";
import WatchJoin from "../Wach-join/wath.component.jsx";
import MovieDescription from "../MovieDescription/movieDescription.component.jsx";
const MovieDetails = (props) => {
    const [movieDetails, setMovieDetails] = useState({});
    const id = 507089;

    useEffect(() => {
        async function getMovie() {
            const data = await getMovieDetails(id)
            setMovieDetails(data)
        }
        getMovie()
    }, []);
    function convertMinutesToHoursAndMinutes(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours} h ${remainingMinutes} minutes`;
    }
    function getFirstThreeCast(casts) {
        let str = []
        for (let i = 0; i < 3; i++) {
            str.push(casts[i].name)
        }
        return str.join(' ,')
    }
    const { original_title: title, tagline, release_date: date, runtime, genres, overview, backdrop_path: bgImage, casts } = movieDetails
    return (
        Object.keys(movieDetails).length > 0 && //this is conditional rendering
        <div className="page">
            <div className="movie-details-container container" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} >
                <div className="movie-details">
                    <div>
                        <span className="movie-title"> <h2>{title}</h2></span>
                    </div>
                    <div>
                        <span className="movie-year">{date.split('-')[0]} |  </span>
                        <span className="movie-rating">18+</span>
                        <span className="movie-duration"> | {convertMinutesToHoursAndMinutes(runtime)} |  </span>
                        <span className="movie-genre">{genres[0].name}</span>
                    </div>
                    <div className="desc">
                        <span className="movie-plot">{overview}.</span>
                    </div>
                    <div>
                        <span className="movie-stars">Starring: {getFirstThreeCast(casts.cast)}</span>
                    </div>
                </div>
            </div >
            <WatchJoin />
            <MovieDescription tagline={tagline} />
            <MoreDetails details={{ genres, casts }} />

        </div>
    );
}

export default MovieDetails;