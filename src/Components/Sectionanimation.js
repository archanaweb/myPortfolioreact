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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

const Portfolio = () => {
  return (
    <div>
      <AnimatedSection>
        <h1>This is section 1</h1>
        <p>Content for section 1</p>
      </AnimatedSection>
      <AnimatedSection>
        <h1>This is section 2</h1>
        <p>Content for section 2</p>
      </AnimatedSection>
      <AnimatedSection>
        <h1>This is section 3</h1>
        <p>Content for section 3</p>
      </AnimatedSection>
      {/* Add more AnimatedSection components for additional sections */}
    </div>
  );
};

export default Portfolio;
