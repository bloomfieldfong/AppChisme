import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import chisme, * as fromChismes from './chisme';


const reducer = combineReducers({
  chisme,
  form: formReducer,
});

export default reducer;


export const getChisme = (state, id) =>
  fromChismes.getChisme(state.chismes, id);
export const getChismeIds = (state) => fromChismes.getChismeIds(
  state.chimess,
);
export const getChismes = (state) =>
  fromChismes.getChismes(state.chismes);

