import React from 'react';
import CharacterContainer from '../../container/CharacterContainer.jsx';
import Header from '../Header/Header.jsx';
import { BelieveOrDenyProvider } from '../hooks/BelieveOrDenyProvider';

export default function App() {
  return ( 
    <BelieveOrDenyProvider>
      <Header />
      <CharacterContainer />
    </BelieveOrDenyProvider>
  );
}



  
