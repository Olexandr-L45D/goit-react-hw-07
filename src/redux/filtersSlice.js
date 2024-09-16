// filtersSlice.js (це окрема локаль - locale)
import { createSlice } from '@reduxjs/toolkit';
// export const selecFilter = (state) => state.filters.name; // повертає шматок стану зі слайсу

const slice = createSlice({
    name: "filters",
    initialState: { name: "", },
    reducers: {
        changeFilter: (state, action) => {
            // state.name = action.payload;
            return {
                ...state,
                name: action.payload,
            };
        },
    }
});
export const selecFilter = (state) => state.filters.name;
// створюємо фабрики екшкнів автоматично (нижче slice.actions.....)
// slice.actions.changeFilter();
// slice.actions.selectNameFilter();
export const { changeFilter } = slice.actions;
// кореневий редюсер (або редюсер слайсу за дефолтом)
export default slice.reducer;
// console.log(slice.reducer);







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
