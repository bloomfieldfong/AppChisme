import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/chisme';

import chisme from '../Chisme';

const ChismeList = ({ chismeIds }) => (
  chismeIds.length > 0 ? (
    <ul>
      { chismeIds.map(id => <chisme key={id} id={id} />) }
    </ul>
  ) : (
    <div className="noChismes">
      <h3>
      { 'No existe ningun chisme' }
    </h3>
    </div>
  )
);

export default connect(
  state => ({
    chismeIds: selectors.getChismeIds(state),
  }),
  undefined,
)(ChismeList);
