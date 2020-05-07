import React, { useState, useEffect } from 'react';
import CharacterList from '../components/Character/CharacterList.jsx';
import { fetchTheTruthIsOutThere } from '../services/xfileService.js';
import stylesBelieve from './ThemeBelieve.css';
import stylesDeny from './ThemeDeny.css';
import { useBelieveDeny } from '../components/hooks/BelieveOrDenyProvider.jsx';

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
 
  const theme = useBelieveDeny();
  const stylesToUse = theme === 'believe' ? stylesBelieve : stylesDeny; 

  useEffect(() => {
    fetchTheTruthIsOutThere(page)
      .then(allCharacters => setCharacters(allCharacters));
  }, [page]);

  const xfileCharacters = characters.map(character => {
    return <CharacterList key={character.name} {...character} />;
  });

  const increment = () => setPage(prevPage => prevPage + 1);
  const decrement = () => setPage(prevPage => prevPage - 1);

  return (
    <ul className={stylesToUse.Truth}>
      <button onClick={decrement}>&lt;</button>
      <button onClick={increment}>&gt;</button>
      {xfileCharacters} 
    </ul>
  );
};

export default CharacterContainer;



