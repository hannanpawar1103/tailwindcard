import React from 'react'
import { createContext , useContext ,useState } from 'react'

const RoundContext = createContext();
const ActiveContext = createContext();

export function RoundProvider({ children }) {
  const [round, setround] = useState('none');

  return (
    <RoundContext.Provider value={{ round, setround }}>
      {children}
    </RoundContext.Provider>
  );
}

export function ActiveProvider({ children }) {
  const [active, setactive] = useState(false);
  return (
    <ActiveContext.Provider value={{ active, setactive }}>
      {children}
    </ActiveContext.Provider>
  );

}

export function useRound(){
    return useContext(RoundContext)

}

export function useActive(){
    return useContext(ActiveContext)
}


