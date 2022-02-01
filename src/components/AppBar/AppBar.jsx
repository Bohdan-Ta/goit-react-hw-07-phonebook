import Navigation from "../Navigation";

import s from "./AppBar.module.css";

function AppBar() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Navigation />
      </div>
    </header>
  );
}
export default AppBar;
