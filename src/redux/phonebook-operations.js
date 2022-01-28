import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://61f16bd6072f86001749f1d6.mockapi.io";
export const fetchContactsAPI = () => axios.get("/contacts");
export const addContactAPI = (contact) => axios.post("/contacts", contact);
export const deleteContactAPI = (id) => axios.delete(`/contacts/${id}`);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await fetchContactsAPI();
    return data;
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    const { data } = await addContactAPI({ name, number });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await deleteContactAPI(id);
    return id;
  }
);
