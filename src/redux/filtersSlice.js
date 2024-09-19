import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: "filters",
    initialState: { name: "", },
    reducers: {
        setChangeFilter: (state, action) => {
            state.name = action.payload;
        },
    }
});
export const { setChangeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectStatusFilter = (state) => state.filters.name;

// export const selecFilter = (state) => state.filters.name;
// створюємо фабрики екшкнів автоматично (нижче slice.actions.....)
// slice.actions.changeFilter();
// slice.actions.selectNameFilter();
// export const { changeFilter } = slice.actions;
// кореневий редюсер (або редюсер слайсу за дефолтом)
// export default slice.reducer;
// console.log(slice.reducer);

// const filtersSlice = createSlice({
//     name: "filters",
//     initialState: {
//         status: "all",
//     },
//     reducers: {
//         setStatusFilter(state, action) {
//             state.status = action.payload;
//         },
//     },
// });

// export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
// export const selectStatusFilter = (state) => state.filters.status;

// filtersSlice.js (це окрема локаль - locale - "filters")
// export const selecFilter = (state) => state.filters.name; // повертає шматок стану зі слайсу
//  НИЖЧЕ приклад детального створення без БІБЛІОТЕК!
// export const changeFilter = createAction('filters/changeFilter');
// export const selectNameFilter = createAction('filters/selectNameFilter');
// // це зверху ми переносимо 2 екшина для filtersSlice.js і нижче його Редюсер -filterReducer (тобто прибираємо з загального файлу)
// export default function filterReducer(state = { name: "" }, action) {
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
