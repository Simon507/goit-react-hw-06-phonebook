import { configureStore } from '@reduxjs/toolkit';
// import { editingReducer, filterReducer } from './reducer';

import { editingReducer } from './editingSlice';
import { filterReducer } from './filterSlice';
// import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contactList: editingReducer,
    filters: filterReducer,
  },
});
