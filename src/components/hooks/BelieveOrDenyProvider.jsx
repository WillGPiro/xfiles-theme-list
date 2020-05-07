import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const BelieveOrDeny = createContext();

export const BelieveOrDenyProvider = ({ children }) => {
  const [believeDeny, setBelieveDeny] = useState('believe');

  const toggle = ({ target }) => {
    if(target.checked) setBelieveDeny('belive');
    if(!target.checked) setBelieveDeny('deny');
  };

  return (
    <BelieveOrDeny.Provider value={{ believeDeny, toggle }}>
      {children}
    </BelieveOrDeny.Provider>
  );
};

BelieveOrDenyProvider.propTypes = {
  children: PropTypes.node
};

export const useToggle = () => {
  const { toggle } = useContext(BelieveOrDeny);
  return toggle;
};

export const useBelieveDeny = () => {
  const { believeDeny } = useContext(BelieveOrDeny);
  return believeDeny;
};
