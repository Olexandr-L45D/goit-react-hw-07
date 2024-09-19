
import css from './WrapperGeneral.module.css';

export default function WrapperGeneral({ children }) {
    return <main className={css.container}>{children}</main>;
};