import s from "../Forms/Forms.module.css";

export default function Authorization() {
  return (
    <>
      <div className={s.inputContainer}>
        <form>
          <div className={s.inputContainer}>
            <input type="mail" name="mail" className={s.input} />
            <label name="mail" className={s.label}>
              Login:
            </label>
          </div>
          <div className={s.inputContainer}>
            <input tipe="text" name="password" className={s.input} />
            <label name="password" className={s.label}>
              Password
            </label>
          </div>
          <button type="submit" className={s.borderButton}>
            Welcome
          </button>
        </form>
      </div>
    </>
  );
}
