import { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    // Gradually increase visibleCount so icons load one by one
    const interval = setInterval(() => {
      setVisibleCount((prev) =>
        prev < technologies.length ? prev + 1 : prev
      );
    }, 300); // load a new ball every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-secondary text-3xl font-bold mb-10">
        Knowledge Base
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.slice(0, visibleCount).map((technology, index) => (
          <div className="w-28 h-28" key={technology.name || index}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
