import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div>
        <h3>{props.name}</h3>
        <h5>{props.brewery}</h5>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  
}

export default Keg;