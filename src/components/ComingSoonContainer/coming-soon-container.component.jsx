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
        <div className="coming-soon-wrapper"> 
            <div>
                <h2>Coming Soon</h2>
            </div>
            <div className="coming-soon-container container">
                    {comingSoon.length > 0 &&
                        comingSoon.slice(1,9).map((coming, index) => {
                            return (
                                <ComingSoonText key={coming.id} header={coming.original_title} paragraph={coming.overview} />
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default ComingSoonContainer;