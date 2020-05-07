import React from 'react';
import CharacterContainer from '../../container/CharacterContainer.jsx';
import Header from '../Header/Header.jsx';
import { BeliveOrDenyProvider } from '../hooks/BelieveOrDenyProvider';

export default function App() {
  return ( 
    <BeliveOrDenyProvider>
      <Header />
      <CharacterContainer />
    </BeliveOrDenyProvider>
  );
}



  
