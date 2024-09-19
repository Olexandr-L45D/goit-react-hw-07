import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
// import { selecFilter, changeFilter } from '../../redux/filtersSlice'
import { setChangeFilter, selectStatusFilter } from '../../redux/filtersSlice'

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectStatusFilter);
    // const handleFilterChange = (filter) => dispatch(setChangeFilter(filter));

    // const dispatch = useDispatch();
    // const filter = useSelector(selecFilter);
    const handleFilterChange = e => dispatch(setChangeFilter(e.target.value));

    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
}


