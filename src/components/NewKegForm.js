import React from "react";
import PropTypes from "prop-types";

function NewKegForm(props) {
  return (
    <React.Fragment>
      <h1>Add a Keg</h1>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
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
        <button class="btn btn-sucess" type='submit'>Add New Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewKegForm;