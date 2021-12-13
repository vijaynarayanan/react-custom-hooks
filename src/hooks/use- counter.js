import { useEffect, useState } from "react";

const useCounter = (updateCounterFn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => updateCounterFn(counter, setCounter), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return counter;
};

export default useCounter;
