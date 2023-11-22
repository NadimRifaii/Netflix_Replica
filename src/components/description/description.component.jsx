import React from 'react';
import DescriptionText from '../descriptionText/descriptionText.component.jsx'
import VideoOverImage from '../VideoOverImage/video-overimage.component.jsx';
import './description.styles.css';

const Description = ({ reverseOrder, header, paragraph, tvImage, tvVideo, applyConditionalStyle, addDownloadContainer}) => {
  const containerClassName = reverseOrder ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`${containerClassName} description-container`}>
      <DescriptionText header={header} paragraph={paragraph} />
      <VideoOverImage tvImage={tvImage} tvVideo={tvVideo} applyConditionalStyle={applyConditionalStyle} addDownloadContainer={addDownloadContainer} />
    </div>
  );
};

export default Description