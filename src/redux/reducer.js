import { combineReducers } from 'redux';

const initialState = {
  contactList: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: {
    findTarget: '',
  },
};

const editingReducer = (state = initialState.contactList, action) => {
  switch (action.type) {
    case 'contactList/addContactList': {
      return [...state, action.payload];
    }

    case 'contactList/deleteFromList': {
      return state.filter(position => position.id !== action.payload);
    }

    default:
      return state;
  }
};

const filterReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case 'filters/findTarget': {
      return { findTarget: action.payload };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contactList: editingReducer,
  filters: filterReducer,
});
