import { styles } from "../Styles";
import { Particles, SkillLoop, Greeting } from "./canvas";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleClick = () => {
    alert("Bro, scroll — don't click 😎");
  };

  return (
    <section
      className="relative w-full min-h-[100dvh] mx-auto flex flex-col justify-center items-center overflow-hidden bg-[#0a0118]" // <-- Dark base background
    >
      {/* === Particle Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#915eff", "#a78bfa"]}
          particleCount={
            typeof window !== "undefined" && window.innerWidth < 768 ? 100 : 250
          }
          particleSpread={8}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={false} // disabled on mobile
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* === Foreground Content === */}
      <div
        className={`${styles.paddingX} relative z-10 max-w-7xl w-full flex flex-col items-center text-center gap-5 mt-[120px]`}
      >
        {/* Greeting */}
        <div className="text-[24px] text-white">
          <Greeting />
        </div>

        {/* Name Section */}
        <p className={`${styles.heroHeadText} mt-2 text-white`}>
          I am <span className="text-[#915eff]">Midhun</span>
        </p>

        {/* Scroll Down Indicator */}
        <p className="text-secondary flex items-center gap-2 justify-center mt-6">
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
