import React, { useEffect, useState } from "react";
// import React, {useState, useEffect} from 'react'
import ComingSoonText from "../ComingSoonItem/soon-item.component";
import './coming-soon-container.styles.css'
import { getComingSoonMovies } from "../../utils/api.utils";

const ComingSoonContainer = () => {
    const [comingSoon, setComingSoon] = useState([]);

    useEffect(() => {
        const fetchDataAndSetComingSoon = async () => {
            const data = await getComingSoonMovies();
            setComingSoon(data);
        };
        fetchDataAndSetComingSoon();
    }, []);



    return (
        <div className="coming-soon-wrapper container">
            <h2>Coming Soon</h2>
            <div className="coming-soon-container ">
                {comingSoon.length > 0 &&
                    comingSoon.slice(1, 9).map((coming, index) => {
                        return (
                            <ComingSoonText key={coming.id} header={coming.original_title} paragraph={coming.overview} />
                        )
                    })
                }
            </div>
            <p className="behind-scenes" >Go behind the scenes of Netflix TV shows and movies, see what's coming soon and watch bonus videos on Tudum.com.</p>
        </div>
    );
};

export default ComingSoonContainer;