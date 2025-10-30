import { styles } from "../Styles";
import { Particles, SkillLoop, Greeting } from "./canvas";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleClick = () => {
    alert("Bro, scroll — don't click \u{1F601}");
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0118]"
    >
      {/* === Particle Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#915eff", "#a78bfa"]}
          particleCount={
            typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 200
          }
          particleSpread={8}
          speed={0.2}
          particleBaseSize={60}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* === Foreground Content === */}
      <div
        className={`${styles.paddingX} relative z-10 max-w-7xl w-full flex flex-col items-center text-center gap-5`}
      >
        {/* Greeting */}
        <div className="text-[22px] sm:text-[24px] text-white font-medium">
          <Greeting />
        </div>

        {/* Name Section */}
        <h1 className="text-white font-bold text-[40px] sm:text-[50px] leading-tight">
          I am <span className="text-[#915eff]">Midhun</span>
        </h1>

        {/* Scroll Down Indicator */}
        <p className="text-secondary flex items-center gap-2 justify-center mt-6 text-[16px] sm:text-[18px]">
          My Core Competencies
          <span
            onClick={handleClick}
            className="animate-bounce text-white cursor-pointer hover:scale-110 transition-transform duration-300"
            title="Scroll for more"
          >
            <ArrowDown className="w-5 h-5" />
          </span>
        </p>

        {/* Skill Rotator */}
        <SkillLoop />
      </div>
    </section>
  );
};

export default Hero;
