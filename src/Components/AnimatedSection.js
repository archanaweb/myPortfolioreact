import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      controls.start('visible');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust threshold as needed
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: '50%' , x: "0%"},
    visible: { opacity: 1, y: '0%',x: "0%", transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;