import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/chisme';


const chisme = ({ titulo, descripcion }) => (
  
  <li>
    { 'Chisme:' }
    { titulo }
    { '.  Descipcion: ' }
    {descripcion} 
  </li>
  
);

export default connect(
  (state, { id }) => ({
    ...selectors.getChisme(state, id),
  }),
  (dispatch, { id }) => ({
    onDelete() {
      dispatch(actions.removeChisme(id));
    },
  }),
)(chisme);
