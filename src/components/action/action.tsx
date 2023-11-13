import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
export function Action() {
  const { numbersInput, setCallDisplay, setnumbersInput } =
    useContext(AppContext);

  function printCallingMessage() {
    setCallDisplay(true);
  }

  function handleCall() {
    if (numbersInput.length < 9) {
      return;
    }
    printCallingMessage();
    setnumbersInput(['']);
  }

  function handleHang() {
    hideCallingMessage();
  }

  function hideCallingMessage() {
    setCallDisplay(false);
  }

  return (
    <>
      <span className="number">{numbersInput}</span>
      <a
        href="#"
        className={numbersInput.length === 9 ? 'call active' : 'call'}
        onClick={handleCall}
      >
        Call
      </a>
      <a
        href="#"
        className={numbersInput.length < 9 ? 'hang active' : 'hang'}
        onClick={handleHang}
      >
        Hang
      </a>
    </>
  );
}
