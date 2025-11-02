import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillLoop = () => {
  const lifecycleSkills = [
    { id: 1, text: "Data Engineering & Analytics" },
    { id: 2, text: "Deep Learning & Machine Learning" },
    { id: 3, text: "Generative AI & Computer Vision" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % lifecycleSkills.length);
    }, 2500); // Change every 2.5s
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentSkill = lifecycleSkills[currentIndex];

  const loopVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="mt-3 h-[120px] sm:h-16 md:h-20 w-full flex justify-center items-center overflow-hidden  ">

      <AnimatePresence mode="wait">
        <motion.h1
          key={currentSkill.id}
          variants={loopVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-[#915eff] text-xl sm:text-2xl font-mono font-semibold bg-[#250935] px-5 py-2 rounded-xl border border-purple-500/50 shadow-lg"
        >
          ⚡ {currentSkill.text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default SkillLoop;