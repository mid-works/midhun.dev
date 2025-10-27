import React from 'react'
import  Tilt  from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn , textVariant } from '../utils/motion'
import { styles } from '../Styles'
import { knowledges } from '../constants'
import  SectionWrapper  from '../hoc/SectionWrapper'


const Knowcard = ({index, title,dec}) => {
  return(
    <Tilt 
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right" , "spring" , 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
          >
              <h3 className='purple-text-gradient text-[24px] font-bold text-center'>{title}</h3>
              <p className='text-secondary text-[14px] font-semibold text-center'>{dec}</p>

          </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    < >
      <motion.div
      variants={textVariant()}
      className=' sm:mt-10'>
        <p className={styles.sectionSubText}>Profile</p>
        <h1 className={styles.sectionHeadText}>Summary</h1>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)
      } className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:text-justify '>
         I’m Midhun Chandran, an enthusiastic AI and Machine Learning Engineer who loves exploring data, building intelligent models, and experimenting with cutting-edge technologies. I’m passionate about designing smart, efficient, and creative solutions that bring ideas to life through the power of data and machine learning. My work revolves around transforming complex problems into simple, impactful outcomes — blending innovation, logic, and creativity. I’m constantly learning, improving, and seeking new ways to connect AI with real-world impact through meaningful projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {knowledges.map((knowledge,index) => (
          <Knowcard key={knowledge.title} index = {index} {...knowledge}></Knowcard>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
