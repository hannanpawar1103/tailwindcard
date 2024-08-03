import React from 'react'
import { createContext , useContext ,useState } from 'react'

const ActiveContext = createContext();

export function ActiveProvider({ children }) {
  const [Active, setActive] = useState('none');

  return (
    <ActiveContext.Provider value={{ Active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
}

export function useActive(){
    return useContext(ActiveContext)
}

