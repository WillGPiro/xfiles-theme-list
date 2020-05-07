import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../Toggle/Toggle.css';

const Switch = ({ toggle, value }) => (
  <section>
    <input id="toggle" type="checkbox" checked={value} onChange={toggle} />
    <label description="toggle">Switch</label>
  </section>
);

Switch.propTypes = {
  toggle: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default Switch;

