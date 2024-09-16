import css from './ContactList.module.css';
import Contact from "../Contact/Contact"
import { selectContacts } from '../../redux/contactsSlice'
import { useSelector } from 'react-redux';
import { selecFilter } from '../../redux/filtersSlice';

const getVisiblContact = (contacts, selecName) => {
    // console.log("contacts ", contacts);
    // console.log("selecName ", selecName);
    return contacts.filter(contact => contact.name.toLowerCase().includes(selecName.toLowerCase()))
}

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const selectNameFilter = useSelector(selecFilter);
    const visibleContacts = getVisiblContact(contacts, selectNameFilter);

    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li className={css.item} key={contact.id} >
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
}









// // 2. Отримуємо масив завдань із стану Redux
// const contacts = useSelector((state) => state.contacts.items);
// // 3. Отримуємо значення фільтра із стану Redux
// const selectNameFilter = useSelector((state) => state.filters.status);
// // 4. Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
// const visibleTasks = getVisiblContact(contacts, selectNameFilter);

