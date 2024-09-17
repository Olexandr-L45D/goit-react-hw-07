import css from "./ContactForm.module.css"
import { Formik, Form, Field } from 'formik';
// import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contactsOps'
// import { useDispatch, useSelector } from "react-redux";
// import { addContact, selectContacts } from '../../redux/contactsOps'

export default function ContactForm() {
    // const nameFieldId = useId();
    // const numberFieldId = useId();
    //   const items = useSelector(selectContacts);

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required('Required')
    });

    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };
    return (
        <div className={css.item}>
            <Formik initialValues={{
                name: " ",
                number: " "
            }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form>
                    <div className={css.items}>
                        <label className={css.label}  >Name</label>
                        <Field className={css.inp} type="text" name="name" placeholder="Enter text..." />
                        <ErrorMessage className={css.messag} name="name" component="span" />
                    </div>
                    <div className={css.items}>
                        <label className={css.label} >Number</label>
                        <Field className={css.inp} type="text" name="number" placeholder="Enter text..." />
                        <ErrorMessage className={css.messag} name="number" component="span" />
                    </div>
                    <div className={css.btn}>
                        <button className={css.addContact} type="submit">Add contact</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

// <Form>
//     <div className={css.items}>
//         <label className={css.label} htmlFor={nameFieldId} >Name</label>
//         <Field className={css.inp} type="text" name="name" id={nameFieldId} placeholder="Enter text..." />
//         <ErrorMessage className={css.messag} name="name" component="span" />
//     </div>
//     <div className={css.items}>
//         <label className={css.label} htmlFor={numberFieldId} >Number</label>
//         <Field className={css.inp} type="text" name="number" id={numberFieldId} placeholder="Enter text..." />
//         <ErrorMessage className={css.messag} name="number" component="span" />
//     </div>
//     <div className={css.btn}>
//         <button className={css.addContact} type="submit">Add contact</button>
//     </div>
// </Form>

