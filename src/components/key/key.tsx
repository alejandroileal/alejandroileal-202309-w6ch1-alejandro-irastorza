import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function Key() {
  const { numbersInput, setnumbersInput } = useContext(AppContext);

  function writeNumber(number: string) {
    if (numbersInput.length === 9) {
      return;
    }
    const newNumbersInput = [...numbersInput, number];
    setnumbersInput(newNumbersInput);
  }

  function deleteNumber() {
    const numbersInputLastDeleted = [''];
    setnumbersInput(numbersInputLastDeleted);
  }

  const handleClick1 = () => {
    writeNumber('1');
  };

  const handleClick2 = () => {
    writeNumber('2');
  };

  const handleClick3 = () => {
    writeNumber('3');
  };

  const handleClick4 = () => {
    writeNumber('4');
  };

  const handleClick5 = () => {
    writeNumber('5');
  };

  const handleClick6 = () => {
    writeNumber('6');
  };

  const handleClick7 = () => {
    writeNumber('7');
  };

  const handleClick8 = () => {
    writeNumber('8');
  };

  const handleClick9 = () => {
    writeNumber('9');
  };

  const handleClick0 = () => {
    writeNumber('0');
  };

  const handleClickDelete = () => {
    deleteNumber();
  };

  return (
    <>
      <li>
        <button onClick={handleClick1} className="key">
          1
        </button>
      </li>
      <li>
        <button onClick={handleClick2} className="key">
          2
        </button>
      </li>
      <li>
        <button onClick={handleClick3} className="key">
          3
        </button>
      </li>
      <li>
        <button onClick={handleClick4} className="key">
          4
        </button>
      </li>
      <li>
        <button onClick={handleClick5} className="key">
          5
        </button>
      </li>
      <li>
        <button onClick={handleClick6} className="key">
          6
        </button>
      </li>
      <li>
        <button onClick={handleClick7} className="key">
          7
        </button>
      </li>
      <li>
        <button onClick={handleClick8} className="key">
          8
        </button>
      </li>
      <li>
        <button onClick={handleClick9} className="key">
          9
        </button>
      </li>
      <li>
        <button onClick={handleClick0} className="key">
          0
        </button>
      </li>
      <li>
        <button onClick={handleClickDelete} className="key big">
          delete
        </button>
      </li>
    </>
  );
}
