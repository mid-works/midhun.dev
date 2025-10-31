import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState, useEffect } from "react";

const Tech = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < technologies.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 300); // loads one every 0.3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-secondary text-3xl font-bold mb-10">Knowledge Base</h2>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.slice(0, visibleCount).map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
