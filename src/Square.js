import React, { useEffect, useRef, useState } from "react";
import { useCountRenders } from "./useCountRenders";

export const Square = React.memo(({n, increment}) => {
  useCountRenders()

  return <button onClick={() => increment(n)}>{n}</button>
});