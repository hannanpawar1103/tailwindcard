import React from 'react'
import { createContext , useContext ,useState } from 'react'

const RoundContext = createContext();

export function RoundProvider({ children }) {
  const [round, setround] = useState('none');

  return (
    <RoundContext.Provider value={{ round, setround }}>
      {children}
    </RoundContext.Provider>
  );
}

export function useRound(){
    return useContext(RoundContext)
}
