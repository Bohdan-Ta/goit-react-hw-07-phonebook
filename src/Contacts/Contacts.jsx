import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/phonebook-ections";
import { getSensitiveSearch } from "../redux/phonebook-selectors";

import s from "./Contacts.module.css";

export default function Contacts() {
  const contacts = useSelector(getSensitiveSearch);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.list}>
            <div>
              <p className={s.name}>{name}</p>
              <p className={s.number}>{number}</p>
            </div>
            <button
              onClick={() => onDeleteContact(id)}
              className={s.slidingButton}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <p className={s.totalContact}>
        all contacts in phonebook: {contacts.length}
      </p>
    </>
  );
}
