import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contactsSlice';
import filterReducer from './filtersSlice';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistedCardReducer = persistReducer({
    key: 'user-new',
    storage,
    whitelist: ["items"],
}, contactReduser);

export const store = configureStore({
    reducer: {
        contacts: persistedCardReducer,
        filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    // reducer: rootReducer, (зверху додав йому обєкт з слайсами - рефакторинг)
});

export const persistor = persistStore(store);// це зберігачь який огортає СТОР, який я створив!

// export const store = configureStore({});

// const initialState = {
//     contacts: {
//         items: [
//         ],
//     },
//     filters: {
//         status: 'all',
//         loading: false,
//         error: null
//     },
//     user: {
//         email: 'email',
//          number: 1,
//         loading: false,
//         error: null
//     },
// };

// переніс обєкти властивостей прямо в аргумент початкового стану функцій в круглих дужках, тому initialState вже не потрібен при рефакторингу
// в initialState є contacts та filters це слайси
// const initialState = {
//     contacts: {
//         items: []
//     },
//     filters: {
//         name: ""
//     }
// }

// const createSlice = (state = initialState.contacts, action) => {
// const createSlice = (state = { items: [] }, action) => {
//     switch (action.type) {
//         case 'tasks/addContact':
//             return {
//                 ...state,
//                 items: state.items + action.payload
//             }
//         case 'tasks/deleteContact':
//             return {
//                 ...state,
//                 items: state.items.filter((task) => task.id !== action.payload),

//             };

//         case 'tasks/selectContacts':
//             return {
//                 ...state,
//                 items: state.items.map((task) => {
//                     if (task.id !== action.payload) {
//                         return task;
//                     }
//                     return {
//                         ...task,
//                         completed: !task.completed,
//                     };
//                 }),
//             };

//         default:
//             return state;
//     }
// }

// функція filterReducer() це те саме що createSlice() тільки для файла  filtersSlice.js
// const filterReducer = (state = initialState.filters, action) => {
// const filterReducer = (state = { name: "" }, action) => {
//     switch (action.type) {
//         // changeFilter - зміна значення фільтра в властивості name
//         case 'filters/changeFilter':
//             return {
//                 ...state,
//                 name: state.name + action.payload,
//             };
//         // selectNameFilter повертає значення фільтра з властивості name
//         case 'filters/selectNameFilter':
//             return {
//                 ...state,
//                 name: state.name + action.payload,
//             };
//         default:
//             return state;
//     }
// }


// export const store = configureStore({
//     reducer: {
//         contacts: createSlice,
//         filters: filterReducer,
//     }
//     // reducer: rootReducer,
// });

// це був загальний редусер (нижче)
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'tasks/addTask': {
//             return {
//                 ...state,
//                 tasks: {
//                     items: [...state.tasks.items, action.payload],
//                 },
//             };
//         }

//         case 'tasks/deleteTask':
//             return {
//                 ...state,
//                 tasks: {
//                     items: state.tasks.items.filter((task) => task.id !== action.payload),
//                 },
//             };

//         case 'tasks/toggleCompleted':
//             return {
//                 ...state,
//                 tasks: {
//                     items: state.tasks.items.map((task) => {
//                         if (task.id !== action.payload) {
//                             return task;
//                         }
//                         return {
//                             ...task,
//                             completed: !task.completed,
//                         };
//                     }),
//                 },
//             };

//         case 'filters/setStatusFilter':
//             return {
//                 ...state,
//                 filters: {
//                     status: action.payload,
//                 },
//             };

//         default:
//             return state;
//     }
// };
