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

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contactList/addContactList': {
      return {
        ...state,
        contactList: [...state.contactList, action.payload],
      };
    }

    case 'contactList/deleteFromList': {
      return {
        ...state,
        contactList: state.contactList.filter(
          contactList => contactList.id !== action.payload
        ),
      };
    }

    case 'filters/findTarget': {
      return {
        ...state,
        filters: { findTarget: [action.payload] },
      };
    }
    default:
      return state;
  }
};
