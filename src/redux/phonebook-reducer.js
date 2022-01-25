import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import actions from "./phonebook-ections";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const searchDublicate = state.find(
      (contact) => contact.name === payload.name
    );
    if (searchDublicate) {
      toast.warning(`${payload.name} is already in contacts`);
    } else return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
