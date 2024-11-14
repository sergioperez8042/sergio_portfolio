/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { CoverParticles } from "./cover-particles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  ${styles.paddingX}   z-0`}
      >
       
      <CoverParticles className="absolute inset-0 z-0" />
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <TypeAnimation
              className={`${styles.heroHeadText} text-[#915EFF]`}
              sequence={['Sergio', 1000, 'Developer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={`${styles.heroSubText}  text-white-100`}>
            I&apos;m a Frontend Developer, I create <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
    

      {/* <ComputersCanvas className="z-10" /> */}
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;