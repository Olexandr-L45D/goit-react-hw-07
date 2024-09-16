import css from "./SearchBox.module.css"
// 1. Імпортуємо хук
import { useDispatch, useSelector } from "react-redux";
import { selecFilter, changeFilter } from '../../redux/filtersSlice'
// const MyComponent = () => {
//     // 2. Отримуємо посилання на функцію відправки екшенів
//     const dispatch = useDispatch();
//     const name = useSelector(selecFilter);
// };
// export default function SearchBox({ value, onFilter })
export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selecFilter);

    // const handleFiltrChange = filter => dispatch(selecFilter(filter));
    const handleFiltrChange = e => dispatch(changeFilter(e.target.value));

    // const handleSelect = (event) => {
    //     dispatch(selectNameFilter(event.target.value));
    // };
    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input
                type="text"
                value={filter}
                onChange={handleFiltrChange}
            />
        </div>
    );
}


