import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './types';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };
    case DELETE_CONTACT:
      const removeContacts = state.contacts.filter(
        item => item.id !== action.payload
      );
      return { ...state, contacts: removeContacts };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
