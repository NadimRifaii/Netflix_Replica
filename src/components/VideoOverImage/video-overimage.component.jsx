import React from 'react';
import PropTypes from 'prop-types';
import './video-overimage.styles.css';

const VideoOverImage = ({ tvImage, tvVideo, applyConditionalStyle, addDownloadContainer}) => {
    const videoClass = applyConditionalStyle ? 'tv-video-2' : 'tv-video';
    const downloadContainer = addDownloadContainer? 'download-container' : '';
    return (
        <div className='tv-container'>
            <img src={tvImage} alt="background" className='tv-image' />
            <video className={videoClass} controls autoPlay loop muted>
                <source src={tvVideo} type='video/mp4' />
            </video>
            {addDownloadContainer && (
                <div className={downloadContainer}>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="stranger-things" />
                    
                </div>
            )}
        </div>
    );
};

export default VideoOverImage;