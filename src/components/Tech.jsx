import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Import your icons here (so you can refer to them directly)
import {
  python,
  reactjs,
  javascript,
  tailwind,
  sql,
  nodejs,
} from "../assets";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Choose which icons to show on mobile devices
  const mobileIcons = [python, sql,reactjs, javascript, tailwind, nodejs];

  const visibleTech = isMobile
    ? technologies.filter((tech) => mobileIcons.includes(tech.icon))
    : technologies;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-secondary text-3xl font-bold mb-10">Knowledge Base</h2>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTech.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
