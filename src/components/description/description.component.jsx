import React from 'react';
import DescriptionText from '../descriptionText/descriptionText.component.jsx'
import VideoOverImage from '../image/descriptionImage.component.jsx';
import './description.styles.css';

const Description = ({ reverseOrder, header, paragraph, tvImage, tvVideo, applyConditionalStyle}) => {
  const containerClassName = reverseOrder ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`${containerClassName} description-container`}>
      <DescriptionText header={header} paragraph={paragraph} />
      <VideoOverImage tvImage={tvImage} tvVideo={tvVideo} applyConditionalStyle={applyConditionalStyle} />
    </div>
  );
};

export default Description