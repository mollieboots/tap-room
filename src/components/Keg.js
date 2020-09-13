import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>{props.brewery}</h5>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  abv: PropTypes.string,
  ibu: PropTypes.string,
  flavorProfile: PropTypes.string,
  price: PropTypes.string
}

export default Keg;