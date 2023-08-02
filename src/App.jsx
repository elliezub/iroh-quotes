import { useState } from "react";
import "./App.css";
import Quotes from "src/components/Quotes.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Quotes />
    </>
  );
}

export default App;
