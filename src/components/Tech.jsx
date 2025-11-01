import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants" 
import React from "react"

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      
      <h2 className="text-secondary text-3xl font-bold mb-10">Knowledge Base</h2>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")