
import { configureStore } from "@reduxjs/toolkit";
import tasksReducerCard from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
    reducer: {
        contacts: tasksReducerCard,
        filters: filtersReducer,
    },
});


// import { configureStore } from '@reduxjs/toolkit';
// import contactReduser from './contactsSlice';
// import filterReducer from './filtersSlice';
// import {
//     persistStore, persistReducer, FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistedCardReducer = persistReducer({
//     key: 'user-new',
//     storage,
//     whitelist: ["items"],
// }, contactReduser);

// export const store = configureStore({
//     reducer: {
//         contacts: persistedCardReducer,
//         filters: filterReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
//     // reducer: rootReducer, (зверху додав йому обєкт з слайсами - рефакторинг)
// });

// export const persistor = persistStore(store);// це зберігачь який огортає СТОР, який я створив!

// {
//     contacts: {
//         items: [],
//             loading: false,
//                 error: null
//     },
//     filters: {
//         name: ""
//     }
// }