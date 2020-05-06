import React from 'react';
import PropType from 'prop-types';

const Characters = ({ image, name, species, status }) => (
  <>
    <image src={image} />
    <h1>{name}</h1>
    <p>{species}</p>
    <p>{status}</p>
  </>
);

Characters.propTypes = {
  image: PropType.string.isRequired,
  name: PropType.string.isRequired,
  species: PropType.string.isRequired,
  status: PropType.string.isRequired
};

export default Characters;

