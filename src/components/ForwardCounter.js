import useCounter from "../hooks/use- counter";

import Card from "./Card";

const ForwardCounter = () => {
  const forwardCounterFn = (counter, updateCounterFn) => {
    updateCounterFn(counter + 1);
  };

  const counter = useCounter(forwardCounterFn);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
