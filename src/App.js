import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {useFetch} from './useFetch'


const App = () => {
  const [count, setCount] = useState(0)

  const {data} = useFetch('https://type.fit/api/quotes')

  //alternatively just move this function outside App and remove this from the useMemo dependency
  const computeLongestWord = useCallback((arr) => {
    if(!arr){
      return []
    }

    console.log("computing");

    let longestWord =''


    JSON.parse(data).map((quote) => quote.text).forEach(sentence => sentence.split(' ').forEach(word => {
      if(word.length > longestWord.length){
        longestWord = word
      }
    }))
    
    return longestWord
  }, []) //if you have no dependency here, just move the function outside

  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])



  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default App;