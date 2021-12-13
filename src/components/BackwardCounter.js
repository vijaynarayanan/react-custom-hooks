import { useCallback } from "react";
import useCounter from "../hooks/use- counter";

import Card from "./Card";

const BackwardCounter = () => {
  const backwardCounterFn = useCallback((counter, setCounter) => {
    setCounter(counter - 1);
  }, []);

  const counter = useCounter(backwardCounterFn);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
