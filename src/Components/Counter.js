import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ targetCount, duration,className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = targetCount / (duration * 60); // Increment per frame assuming 60 frames per second

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + step;
        if (nextCount >= targetCount) {
          clearInterval(interval);
          return targetCount;
        }
        return nextCount;
      });
    }, 1000 / 60); // 60 frames per second

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [targetCount, duration]);

  return (
    <div>
      <motion.h3 className={className}>
        {Math.round(count)}+ {/* Use Math.round to display whole numbers */}
      </motion.h3>
    </div>
  );
};

export default Counter;
