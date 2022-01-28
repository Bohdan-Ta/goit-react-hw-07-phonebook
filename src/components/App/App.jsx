import { ToastContainer } from "react-toastify";

import Sections from "../Section";
import Forms from "../Forms/Forms";
import Contacts from "../Contacts";
import Filter from "../Filter/Filter";

import "react-toastify/dist/ReactToastify.css";
import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.container}>
      <Sections title="Phonebook">
        <Forms />
      </Sections>
      <Sections title="Contacts">
        <Filter />
        <Contacts />
      </Sections>
      <ToastContainer />
    </div>
  );
}
