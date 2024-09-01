import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(interval);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  return <div>{timeLeft} seconds remaining</div>;
};

export default Timer;
