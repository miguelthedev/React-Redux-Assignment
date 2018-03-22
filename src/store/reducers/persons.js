import * as actionTypes from '../actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PERSON:
      return {
        ...state
      }

    case actionTypes.DELETE_PERSON:
      return {
        ...state
      }

    default:
      return state;
  }

  return state;
}

export default reducer;