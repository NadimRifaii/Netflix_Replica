import React from 'react';
import PropTypes from 'prop-types';
import './descriptionImage.styles.css';

const VideoOverImage = ({tvImage, tvVideo, applyConditionalStyle}) => {
    const videoClass = applyConditionalStyle ? 'tv-video-2' : 'tv-video';
    return(
        <div className='tv-container'>
            <img src={tvImage} alt="background" className='tv-image'/>
            <video className={videoClass} controls autoPlay loop muted>
                <source src={tvVideo} type='video/mp4'/>
            </video>
        </div>
    );
};

export default VideoOverImage;