import React from 'react';
import PropTypes from 'prop-types';
import './descriptionText.styles.css';

const DescriptionText = ({ header, paragraph }) => {
  return (
    <div className="description-text">
      <h1>{header}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

DescriptionText.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default DescriptionText