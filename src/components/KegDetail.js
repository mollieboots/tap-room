import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegDetail(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h2>{props.brewery}</h2>
      <span>
        ABV: {props.abv} - IBU: {props.ibu}
      </span>
      <span>{props.flavorProfile}</span>
      <span>{props.price}</span>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
}

export default KegDetail;