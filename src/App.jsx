import { useState } from "react";
import Card from "./Components/Card.jsx";
import Select from "./Components/Select.jsx";
import Active from './Components/Active.jsx' 
import { RoundProvider } from "./Context/RoundContext.jsx";
import { ActiveProvider } from "./Context/ActiveContext.jsx";

export default function App() {

  return (
    <ActiveProvider>
    <RoundProvider>
      <div className="flex justify-between m-auto max-w-4xl p-5">
        <Select/>
        <Card />
        <Active/>
      </div>
    </RoundProvider>
    </ActiveProvider>
  );
}
