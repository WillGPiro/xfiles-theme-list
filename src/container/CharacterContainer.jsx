import React, { useState, useEffect } from 'react';
import CharacterList from '../components/Character/CharacterList.jsx';
import { fetchTheTruthIsOutThere } from '../services/xfileService.js';
import stylesBelieve from './ThemeBelieve.css';
import stylesDeny from './ThemeDeny.css';
import { useBelieveDeny } from '../components/hooks/BelieveOrDenyProvider.jsx';

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);

  const theme = useBelieveDeny();
  const stylesToUse = theme === 'believe' ? stylesBelieve : stylesDeny; 

  useEffect(() => {
    fetchTheTruthIsOutThere()
      .then(allCharacters => setCharacters(allCharacters));
  }, []);

  const xfileCharacters = characters.map(character => {
    return <CharacterList key={character.name} {...character} />;
  });
 
  return (
    <ul className={stylesToUse.Truth}>
      {xfileCharacters}
    </ul>
  );
};

export default CharacterContainer;



