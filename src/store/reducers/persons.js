import * as actionTypes from '../actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: 'Miguel',
        age: Math.floor( Math.random() * 40 )
      }

      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }

    case actionTypes.DELETE_PERSON:
      const updatedArray = state.persons.filter(person => person.id !== action.id);

      return {
        ...state,
        persons: updatedArray
      }

    default:
      return state;
  }

  return state;
}

export default reducer;