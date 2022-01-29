import React, { useCallback, useEffect, useRef, useState } from "react";
import { Hello } from "./Hello";
import { Square } from "./Square";

const App = () => {
  const [count,setCount] = useState(0)
  const favNums = [7, 21, 27]

  const increment = useCallback((n) => {
    // setCount(c => c + 1)
    setCount(c => c + n)
  }, [])

  return (
    <div>
      <Hello increment={increment}/>
      <div>count: {count}</div>
      {favNums.map((n) => {
        return <Square increment={increment} n={n} key={n}/>
      })}
    </div>
  );
};

export default App;