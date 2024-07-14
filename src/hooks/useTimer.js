import { useEffect, useState } from "react";

// Custom hook for my timer logic

/**
 * 1.doubt Initializes remainingTime state with initialTime.
 * 2. interval and setInterval in useEffect why?
 * 3. isActive use in if statement
 * 4. prev => prev -1 , 1000 ms
 * 5.  remainingTime === 0 && isActive && clearInterval(timer)
 * 6. return [remainingTime, setRemainingTime]; why?
 * */

const useTimer = (isActive, initialTime) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    let timer;

    if (isActive && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0 && isActive) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, remainingTime]);

  return [remainingTime, setRemainingTime];
};

export default useTimer;
