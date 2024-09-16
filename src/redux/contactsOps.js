// для зберігання асинхронних генераторів Екшенів (по прикладу з 5 ї ДЗ коли робили запити з бібліотеки на галерею)

import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

// First, create the thunk
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     },
// )

// interface UsersState {
//     entities: User[]
//     loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

// Оголоси наступні операції:

// fetchContacts - одержання масиву контактів(метод GET) запитом.Базовий тип екшену це рядок "contacts/fetchAll".
//     addContact - додавання нового контакту(метод POST).Базовий тип екшену це рядок "contacts/addContact".
//         deleteContact - видалення контакту по ID(метод DELETE).Базовий тип екшену це рядок "contacts/deleteContact".
// "tasks/fetchAll/pending" - початок запиту
// "tasks/fetchAll/fulfilled" - успішне завершення запиту
// "tasks/fetchAll/rejected" - завершення запиту з помилкою

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA1YjQwYTViZDU5OTA1NDIyMGY0NDk3YmEzYjJmNSIsIm5iZiI6MTcyNTU5NDQyMy4yODc1ODgsInN1YiI6IjY2ZDllMWM1ZDhlODg1YWI4NDZkMDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TvbdXQqddSub5Mw59Uixse-OSNQE4Xunk36NlBhj_AM' }
});
// початковий варіант запиту без відпрацювання станів з помилками:
// export const fetchTasks = createAsyncThunk("contacts/fetchAll", async () => {
//     const response = await axios.get("/contacts");
//     return response.data;
// });
// це оголошення операції
export const fetchTasks = createAsyncThunk(
    "contacts/fetchAll",
    // Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            // При успішному запиті повертаємо проміс із даними з бекенду
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }

);

// addContact
export const addContact = createAsyncThunk(
    "contacts/addContact",
    // Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContact);
            // При успішному запиті повертаємо проміс із даними з бекенду
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }

);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    // Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/ ${contactId}`);
            // При успішному запиті повертаємо проміс із даними з бекенду
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }

);


//getProductMovies робить запит на УРЛ до SearchForm
// async function getProductsSerch(query, page = 1) {
//     const response = await instance.get(`/search/movie`,
//         {
//             params: {
//                 page,
//                 query,
//                 include_adult: false,
//                 language: "en-US",
//                 region: "string",
//                 year: "string"
//             },
//         },
//     )
//     // console.log(response.data.results)
//     return response.data.results;
// };
// export { getProductsSerch };

// //getProductMovies робить запит на УРЛ до HomePage
// export const getProductMovies = async () => {
//     const response = await instance.get('/trending/movie/day')
//     return response.data.results;
// };

// //getProductDetails робить запит на УРЛ з деталізацією про товар (додаю в окремий стан при монтуванні в компонент MovieDetailsPage)
// export const getProductDetails = async (movie_id) => {
//     const response = await instance.get(`/movie/${movie_id}`)
//     // console.log(response.data)
//     return {
//         title: response.data.title, poster_path: response.data.poster_path, release_date: response.data.release_date,
//         vote_average: response.data.vote_average, overview: response.data.overview, status: response.data.status,
//         // genres: { id: response.data.id, name: response.data.name },
//     }
// };

// export const getProductCast = async (movie_id) => {
//     const response = await instance.get(`/movie/${movie_id}/credits`, {
//         params: {
//             movie_id,
//         },
//     });
//     return response.data.cast;
// };

// export const getProductReviews = async (movie_id) => {
//     const response = await instance.get(`/movie/${movie_id}/reviews`, {
//         params: {
//             movie_id,
//         },
//     });

//     return response.data.results;
// };


