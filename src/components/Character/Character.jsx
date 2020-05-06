import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, status, occupation, portrayedby }) => (
  <section>
    <h2>
      Name:{name}
    </h2>
    <img src={image}></img>
    <ul>Status{status}</ul>
    <ul>Occupation{occupation}</ul>
    <ul>Actor:{portrayedby}</ul>
  </section>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  portrayedby: PropTypes.string.isRequired
};

export default Character;

