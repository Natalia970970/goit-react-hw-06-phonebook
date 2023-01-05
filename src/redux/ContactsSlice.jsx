import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: []},
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(
                contact => contact.id === action.payload
            );
            state.contacts.splice(index, 1);
        },
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);
