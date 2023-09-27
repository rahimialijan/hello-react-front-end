import React from 'react';

import PropTypes from 'prop-types';

const Greeting = ({ message }) => (
  <div>
    <h1>Random Messages</h1>
    <p>{message}</p>
  </div>
);

Greeting.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Greeting;
