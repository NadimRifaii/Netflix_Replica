import React from 'react';
import PropTypes from 'prop-types';
import './descriptionText.styles.css';

const DescriptionText = ({ header, paragraph }) => {
  return (
    <div className='description-text-container'>
      <div className="description-text-1">
        <h1 className='description-title'>{header}</h1>
        <p  className='description-prg'>{paragraph}</p>
      </div>
    </div>
  );
};

DescriptionText.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default DescriptionText