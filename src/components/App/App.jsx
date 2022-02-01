import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sections from "../Section";
import Forms from "../Forms/Forms";
import Contacts from "../Contacts";
import Filter from "../Filter/Filter";
import AppBar from "components/AppBar/AppBar";
import Home from "components/Home/Home";
import Authorization from "components/Authorization";

import "react-toastify/dist/ReactToastify.css";
import s from "./App.module.css";
import Registration from "components/Registration/Registration";

export default function App() {
  return (
    <div className={s.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <Sections>
              <Home />
            </Sections>
          }
        />
        <Route
          path="/form"
          element={
            <Sections title="Phonebook">
              <Forms />
            </Sections>
          }
        />
        <Route
          path="/contacts"
          element={
            <Sections title="Contacts">
              <Filter />
              <Contacts />
            </Sections>
          }
        />
        <Route
          path="/auth"
          element={
            <Sections>
              <Authorization />
            </Sections>
          }
        />
        <Route
          path="/registration"
          element={
            <Sections>
              <Registration />
            </Sections>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}
