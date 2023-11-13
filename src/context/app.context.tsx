import { createContext } from 'react';

export type ContextStructure = {
  numbersInput: string[];
  callDisplay: boolean;
  setnumbersInput: (number: string[]) => void;
  setCallDisplay: (value: boolean) => void;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
