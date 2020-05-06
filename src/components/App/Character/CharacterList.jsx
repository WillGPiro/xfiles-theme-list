import React from 'react';
import PropTypes from 'prop-types';

const  CharacterList = ({ name, image, status, occupation, portrayedby }) => (
  <section>
    <p>{name}</p>
    {image && <img src={image} alt="image of xfiles character" />}
    {status && <p>Status:{status}</p>}
    {occupation && <p>Occupation:{occupation}</p>}
    {portrayedby && <p>Actor:{portrayedby}</p>}
  </section>
);

CharacterList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  portrayedby: PropTypes.string.isRequired, 
};

export default CharacterList;
