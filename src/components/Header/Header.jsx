import React from 'react';
import Toggle from '../Toggle/Toggle.jsx';
import { useToggle, useBelieveDeny } from '../hooks/BelieveOrDenyProvider.jsx';

const Header = () => {
  const toggle = useToggle();
  const believeDeny = useBelieveDeny();

  return (
    <section>
      <h1>X-Files</h1>
      <h2>Do you believe?</h2>
      <Toggle value={believeDeny} toggle={toggle} />
    </section>
  );
};

export default Header; 
