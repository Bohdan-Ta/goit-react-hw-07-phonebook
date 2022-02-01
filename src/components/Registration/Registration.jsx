import s from "../Forms/Forms.module.css";

export default function Registration() {
  return (
    <>
      <div className={s.inputContainer}>
        <form>
          <div className={s.inputContainer}>
            <input type="text" name="name" className={s.input} />
            <label name="name" className={s.label}>
              Name:
            </label>
          </div>
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
