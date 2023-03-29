import { createSlice } from '@reduxjs/toolkit';

const editingInitialState = {
  contactList: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const editingSlice = createSlice({
  name: 'contactList',
  initialState: editingInitialState.contactList,
  reducers: {
    addContactList: {
      reducer(state, action) {
        return [...state, action.payload];
      },

      prepare(friendId, friendName, friendNumber) {
        return {
          payload: {
            id: friendId,
            name: friendName,
            number: friendNumber,
          },
        };
      },
    },

    deleteFromList(state, action) {
      return state.filter(position => position.id !== action.payload);
    },
  },
});

export const { addContactList, deleteFromList } = editingSlice.actions;
export const editingReducer = editingSlice.reducer;
