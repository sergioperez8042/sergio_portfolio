/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{ title}</h3>  

        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]
        '
      >
💻 Frontend Developer | Specialized in React, Next.js, and React Native
        I am a frontend developer experienced in creating functional user interfaces and implementing logic for web and mobile applications.
        I have worked on various projects using Next.js and React Native,
        handling tasks such as application refactoring, global state management, database integration, and compiling apps for Android and iOS, always focusing on optimizing user experience and development efficiency.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'> 
        {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about') 