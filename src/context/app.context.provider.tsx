import { useState } from 'react';
import { AppContext, ContextStructure } from './app.context';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [numbersInput, setnumbersInput] = useState(['']);
  const [callDisplay, setCallDisplay] = useState(false);

  const context: ContextStructure = {
    numbersInput,
    callDisplay,
    setnumbersInput,
    setCallDisplay,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
