import { ADD_CONTACT } from './types';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };
    default:
      return state;
  }
};

export default reducer;
