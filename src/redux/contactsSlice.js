// contactsSlice.js (це окрема локаль - locale)
import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
// export const selectContact = (state) => state.locale.items; // повертає шматок стану зі слайсу
// додаю тут в обєкт початкового стану:loading: false, error: null ддя управління станом Лоадінгу при загрузці та Ерор при помилці
const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },

    reducers: {
        addContact: (state, action) =>
        // старий варіант без запиту з бекенду
        // {
        //     state.items.push({
        //         id: nanoid(),
        //         name: action.payload.name,
        //         number: action.payload.number,
        //     })
        // },
        // Додаємо обробку зовнішніх екшенів
        // reducers: builder => {
        //     builder
        //         .addCase(fetchTasks.pending, (state, action) => { })
        //         .addCase(fetchTasks.fulfilled, (state, action) => { })
        //         .addCase(fetchTasks.rejected, (state, action) => { });
        // },
        //});

        {
            builder
                .addContact(fetchTasks.pending, (state, action) => {
                    state.items.push({
                        // id: nanoid(),
                        name: action.payload.name,
                        number: action.payload.number,
                    })
                    state.isLoading = true;
                })
                .addContact(fetchTasks.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = action.payload;
                })
                .addContact(fetchTasks.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                });
        },

        deleteContact: (state, action) => {
            return {
                ...state,
                items: state.items.filter((task) => task.id !== action.payload),
            };
        },

    },
});
export const selectContacts = (state) => state.contacts.items;
// створюємо фабрики екшкнів автоматично (нижче slice.actions.....)
// slice.actions.addContact();
// slice.actions.deleteContact();
// slice.actions.selectContacts();
export const { addContact, deleteContact } = slice.actions;
// кореневий редюсер (або редюсер слайсу за дефолтом)
export default slice.reducer;
// console.log(slice.reducer);
// export { createSlice };




//  НИЖЧЕ приклад детального створення без БІБЛІОТЕК!
// у властивості case-reducer оголошуем маленькі редюсери для окремих екшенів
// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const selectContacts = createAction('contacts/selectContacts');
// // це зверху ми переносимо 3 екшина для contactsSlice.js і нижче його Редюсер createSlice (тобто прибираємо з загального файлу)

// export default function createSlice(state = { items: [] }, action) {
//     switch (action.type) {
//         case 'contacts/addContact':
//             return {
//                 ...state,
//                 items: state.items + action.payload
//             }
//         case 'contacts/deleteContact':
//             return {
//                 ...state,
//                 items: state.items.filter((task) => task.id !== action.payload),
//             };

//         case 'contacts/selectContacts':
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