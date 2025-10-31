import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import BallsCanvas from "./canvas/BallsCanvas";

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-secondary text-3xl font-bold mb-10">Knowledge Base</h2>
      <div className="w-full h-[500px]">
        <BallsCanvas technologies={technologies} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
