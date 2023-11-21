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
        <div className="coming-soon-container">
            {comingSoon.length > 0 &&
                comingSoon.map((coming, index) => {
                    return (
                        index < 6 && <ComingSoonText key={coming.id} header={coming.original_title} paragraph={coming.overview} />
                    )
                })
            }
        </div>
    );
};

export default ComingSoonContainer;