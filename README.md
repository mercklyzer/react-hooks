## useState
1.) cause rerender

## useEffect
1.) for fetching data <br />
2.) for cleanups <br />
3.) form validation <br />

## useRef
1.) to reference DOM elements <br />
2.) its value is reset when the component is unmounted <br />
3.) does not cause re-render <br />

## useLayoutEffect
1.) Getting dimensions of DOM element

## useCallback
1.) to prevent re-rendering function (shines with using React.memo()) <br />
2.) if useEffect is dependent on a function <br />
3.) In passing a function to the child component, make sure that the function is declared as with useCallback instead of just arrow function. Because arrow function will be recreated every time the parent component re-renders. <br />

## useMemo
1.) when the function inside a component takes a long time to execute, better use useMemo to stop it from re-defining. This is used together with useCallback or just create the function outside the component <br />
2.) only use this when slow performance is salient.
