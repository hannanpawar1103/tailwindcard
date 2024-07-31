import { useState } from "react";
import Card from "./Components/Card.jsx";
import Select from "./Components/Select.jsx";
import { RoundProvider } from "./Context/RoundContext.jsx";

export default function App() {
  const [round, setRound] = useState('none');

  const roundAttributes = [
    'none',
    'sm',
    'md',
    'xl',
    '2xl'
  ];

  return (
    <RoundProvider>
      <div className="flex justify-between m-auto max-w-4xl p-5">
        <Select/>
        <Card />
      </div>
    </RoundProvider>
  );
}
