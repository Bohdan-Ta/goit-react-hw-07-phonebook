import { Oval } from 'react-loader-spinner';

import s from './Spinner.module.css';

export default function Spinner() {
  return (
    <Oval
      wrapperClass={s.loader}
      heigth="100"
      width="100"
      color="brown"
      ariaLabel="loading"
    />
  );
}
