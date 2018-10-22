import * as types from '../types/chisme';

export const addChisme= (id, titulo, descripcion) => ({
  type: types.CHISME_ADDED,
  payload: {
    id,
    titulo,
    descripcion,
  },
});

export const removeChisme = id => ({
  type: types.CHISME_REMOVED,
  payload: { id },
});


