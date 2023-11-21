import React, { useEffect, useState } from "react";
// import React, {useState, useEffect} from 'react'
import ComingSoonText from "../ComingSoonItem/soon-item.component";
import './coming-soon-container.styles.css'
import { getComingSoonMovies } from "../../utils/api.utils";

const ComingSoonContainer = () => {
    const [comingSoon, setComingSoon] = useState([]);

    useEffect(() => {
        const fetchDataAndSetComingSoon= async () => {
            const data = await getComingSoonMovies();
            setComingSoon(data);
        };
        fetchDataAndSetComingSoon();
      }, []);


    
    return(

        <div className="coming-soon-container">
            {   comingSoon.length>0 &&
                comingSoon.map(inf => {
                    return(
                        <ComingSoonText key={inf.id} header={inf.original_title} paragraph={inf.overview} />
                    )
                })
            }   
        </div>
    );
};

export default ComingSoonContainer;