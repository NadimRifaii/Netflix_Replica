import React from "react";
import './soon-item.styles.css'

const ComingSoonText = ({header, paragraph}) => {
    return(
        <div className="description-text">
            <span className="movie-title">{header}</span>
            <p>{paragraph}</p>
        </div>
    )
};

export default ComingSoonText