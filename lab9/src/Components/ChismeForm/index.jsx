import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/chisme';

var rn = require('random-number');

const renderInput = ({ input, meta, ...props }) => (
  <div className="my-input">
    {
      meta.error && meta.touched && (
        <div className="error">
          { meta.error }
        </div>
      )
    }
    <input {...input} {...props} />
  </div>
);

const ChismeForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h4> Titulo </h4>
    <Field
      type="text"
      name="Titulo"
      placeholder="Titulo:"
      component={renderInput}
    />
    <h4> Descripcion </h4>
    <Field
      type="text"
      name="chisme"
      placeholder="Descripcion:"
      component={renderInput}
    />
    
    <button type="submit">
      Agregar
    </button>
  </form>
);


export default reduxForm({
  form: 'createChismeForm',
  onSubmit(values, dispatch) {
    console.log(rn())
    dispatch(actions.addChisme(
      rn(),
      values.titulo,
      values.descripcion,
    ));
  },
  validate(values) {
    const errors = {};

    return errors;
  }
})(ChismeForm);
