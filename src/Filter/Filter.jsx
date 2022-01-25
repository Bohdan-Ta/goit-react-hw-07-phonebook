import { useSelector, useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";

import actions from "../redux/phonebook-ections";
import { getFilter } from "../redux/phonebook-selectors";

import s from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = (evt) => dispatch(actions.changeFilter(evt.target.value));

  return (
    <div className={s.form}>
      <label className={s.label}>
        Find contact by name:
        <DebounceInput
          type="text"
          autoComplete="off"
          minLength={2}
          debounceTimeout={300}
          placeholder="search ........"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
}
