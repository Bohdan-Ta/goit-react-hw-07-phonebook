import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://61f16bd6072f86001749f1d6.mockapi.io/";
export const fetchContactsApi = () => axios("contacts");
export const addContactApi = (contact) => axios.post("contacts", contact);
export const deleteContactApi = (id) => axios.delete(`contacts/${id}`);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await fetchContactsApi();
    return data;
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    const { data } = await addContactApi({ name, number });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await deleteContactApi(id);
    return id;
  }
);
