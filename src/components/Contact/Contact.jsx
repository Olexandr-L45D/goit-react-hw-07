import css from "./Contact.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice'

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    }

    return (
        <div className={css.item}>
            <input type="checkbox" />
            <div className={css.itemText}>
                <p className={css.text}><BsFillPersonFill />{contact.name}</p>
                <p className={css.text}><AiFillPhone />{contact.number}</p>
            </div>
            <button className={css.btn} onClick={handleDelete}>
                Delete
            </button>

        </div>
    );
}







// const MyComponent = () => {
//     // 2. Отримуємо посилання на функцію відправки екшенів
//     const dispatch = useDispatch();
//     // 3. Функція селектор стану (належить слайсу тому що отримує частинку слайсу)
//     const items = useSelector(deleteContact);
// };

// export default function Contact({ obj: { id, name, number }, onDelete })