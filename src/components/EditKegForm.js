import React from "react";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brewery: event.target.brewery.value, abv: event.target.abv.value, ibu: event.target.ibu.value, flavorProfile: event.target.flavorProfile.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <h1>Add a Keg</h1>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='{props.name}' />
        <input
          type='text'
          name='brewery'
          placeholder='Brewery' />
          <input
          type='number'
          name='abv'
          placeholder='ABV' />
          <input
          type='number'
          name='ibu'
          placeholder='IBU' />
        <textarea
          name='flavorProfile'
          placeholder='Describe the flavor profile' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default EditKegForm;