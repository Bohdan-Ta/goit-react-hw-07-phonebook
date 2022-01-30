import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../Spinner";

import { operations, selectors } from "redux/phonebook";

import s from "./Contacts.module.css";

export default function Contacts() {
  const isLoading = useSelector(selectors.getLoading);
  const deleting = useSelector(selectors.getDeleting);
  const contacts = useSelector(selectors.getSensitiveSearch);
  const sortContacts = contacts.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (id) => dispatch(operations.deleteContact(id));
  return (
    <>
      {isLoading && <Spinner />}
      <ul className={s.box_contacts}>
        {sortContacts.map(({ id, name, number, company }) => (
          <li key={id} className={s.list}>
            <div className={s.datas}>
              <p className={s.name}>{name}</p>
              <p className={s.number}>{number}</p>
              <p className={s.company}>{company}</p>
            </div>
            <button
              onClick={() => onDeleteContact(id)}
              className={s.slidingButton}
              disabled={deleting}
            >
              {deleting ? "...deleting" : "delete"}
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
