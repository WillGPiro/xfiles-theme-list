import React, { useState, useEffect } from 'react';
import CharacterList from '../components/Character/CharacterList.jsx';
import { fetchTheTruthIsOutThere } from '../services/xfileService.js';

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchTheTruthIsOutThere()
      .then(allCharacters => setCharacters(allCharacters));
  }, []);

  const xfileCharacters = characters.map(character => {
    return <CharacterList key={character.name} {...character} />;
  });

  return (
    <>
      {xfileCharacters}
    </>
  );
};

export default CharacterContainer;



