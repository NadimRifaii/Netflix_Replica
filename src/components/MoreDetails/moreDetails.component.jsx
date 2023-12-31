import React from "react";
import "./moreDetails.style.css"
const MoreDetails = ({ details: { casts, genres } }) => {
    function getGenres() {
        let str = []
        for (let i = 0; i < genres.length; i++)
            str.push(genres[i].name)
        return str.join(' ,')
    }
    return (
        <div className="more-details-container container">
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
                    <p>{getGenres()}</p>
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
            <div className="cast-holder">

                <p className="smaller">Casts</p>
                <div className="cast">
                    {
                        casts.cast.map((cas, index) => {
                            if (index < 8)
                                return <span className="cast" key={index}>{cas.name}</span>
                            else {
                                return
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default MoreDetails;



// import React from "react";
// import "./moreDetails.style.css";

// const MoreDetails = ({ details: { casts, genres } }) => {
//     function getGenres() {
//         let str = [];
//         for (let i = 0; i < genres.length; i++) str.push(genres[i].name);
//         return str.join(" ,");
//     }

//     return (
//         <div className="more-details-container">
//             <div>
//                 <h2>More Details</h2>
//             </div>
//             <div className="content">
//                 <div className="section">
//                     <p className="smaller">Watch offline</p>
//                     <p>Download and watch everywhere you go.</p>
//                 </div>

//                 <div className="section">
//                     <p className="smaller">Genres</p>
//                     <p>{getGenres()}</p>
//                 </div>
//                 <div className="section">
//                     <p className="smaller">This movie is...</p>
//                     <p>Violent</p>
//                 </div>
//                 <div className="section">
//                     <p className="smaller">Audio</p>
//                     <p>English - Audio Description, English [Original], French</p>
//                 </div>
//             </div>

//             <div className="content">
//                 <div className="section">
//                     <p className="smaller">Subtitles</p>
//                     <p>Arabic, English, French</p>
//                 </div>
//             </div>

//             <div className="cast">
//                 <p className="smaller">Casts</p>
//                 {casts.cast.map((cas, index) => {
//                     if (index < 8) return <p key={index}>{cas.name}</p>;
//                     else return null;
//                 })}
//             </div>
//         </div>
//     );
// };

// export default MoreDetails;
