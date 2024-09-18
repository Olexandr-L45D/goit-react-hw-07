import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selecFilter, changeFilter } from '../../redux/filtersSlice'

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


