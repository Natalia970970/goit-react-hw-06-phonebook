import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from "./FilterSlice";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,},
        middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);