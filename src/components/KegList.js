import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) => (
        <Keg id={keg.id}
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brewery={keg.brewery}
          abv={keg.abv}
          ibu={keg.ibu}
          flavorProfile={keg.flavorProfile}
          price={keg.price}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default KegList;
