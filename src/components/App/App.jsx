
import css from './App.module.css'
import React, { useEffect } from "react";
import WrapperGeneral from "../WrapperGeneral/WrapperGeneral"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import { fetchContact } from '../../redux/contactsOps'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Loader/Loader";
import Error from "../Error/Error";


export default function App() {
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <WrapperGeneral>
      <h1 className={css.title}>Phonebook and HTTP</h1>
      <ContactForm />
      {loading && <Loader>Loading message</Loader>}
      {error && <Error>Error message</Error>}
      <SearchBox />
      <ContactList />
    </WrapperGeneral>
  )
};


// return (
//   <main className={css.container}>
//     <h1>HTTP requests with Redux</h1>
//     <TaskForm />
//     {loading && <Loader>Loading message</Loader>}
//  {/* {loading && !error && <b>Request in progress...</b>} */}
//     {error && <Error>Error message</Error>}
//     <TaskList />
//   </main>
// );



















// const items = useSelector((state) => state.locale.items); // приклад до спрощення
// const items = useSelector(selectContacts); // повертає шматок стану зі слайсу (selectContact = функція стану)
// const name = useSelector(selecFilter); // повертає шматок стану зі слайсу


// const [filter, setFilter] = useState('');
// const [tasks, setTasks] = useState(() => {
//   const savClicks = window.localStorage.getItem("my-clicks");
//   return savClicks !== null ? JSON.parse(savClicks) : objects
// });

// useEffect(() => {
//   const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
//   if (isLocalStorData) {
//     const data = localStorage.getItem("my-clicks");
//     setTasks(JSON.parse(data));
//   }
// }, []);

// useEffect(() => {
//   window.localStorage.setItem("my-clicks", JSON.stringify(tasks));
// }, [tasks]);

// const addTask = (newTask) => {
//   setTasks((prevTasks) => {
//     return [...prevTasks, newTask];
//   });
// };
// const deleteTask = (taskId) => {
//   setTasks((prevTasks) => {
//     return prevTasks.filter((task) => task.id !== taskId);
//   });
// };
// const visibleTasks = tasks.filter((task) =>
//   task.name.toLowerCase().includes(filter.toLowerCase()));
//  <h1 className={css.title}>Phonebook</h1>
//       <Suspense fallback={<div>LOADING list of movies...</div>}>
//         <Routes>
//           <Route path="/" element={<ContactForm />} />
//           <Route path="*" element={<NotFoundCard />} />
//         </Routes>
//       </Suspense>
// {/* <ContactForm onAdd={addTask} />
//         <SearchBox value={filter} onFilter={setFilter} />
//         <ContactList tasks={tasks} objects={objects} onDelete={deleteTask} /> */}


