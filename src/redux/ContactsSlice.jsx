import { createSlice } from "@reduxjs/toolkit";

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
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
