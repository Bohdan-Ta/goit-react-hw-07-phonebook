import axios from "axios";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://61f16bd6072f86001749f1d6.mockapi.io/";
export const fetchContactsApi = () => axios("contacts");
export const addContactApi = (contact) => axios.post("contacts", contact);
export const deleteContactApi = (id) => axios.delete(`contacts/${id}`);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const { data } = await fetchContactsApi();
      return data;
    } catch (error) {
      toast.error(
        `Sorry. Something went wrong. Try loading the page agein... `
      );
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    try {
      const { data } = await addContactApi({ name, number });
      return data;
    } catch (error) {
      toast.dark(`Sorry. Something went wrong. Try to add a contact again... `);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
