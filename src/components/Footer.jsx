import {  FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

const Footer = () => {
    return (
        <motion.div className='pl-10 pr-10'
         variants={slideIn('left', "tween", 0.2, 1)}
        >
            
    <footer className="bg-tertiary  text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Sergio Carlos Rodríguez Pérez</h1>
        </div>
        <div className="flex space-x-4">
        {/* <a href="https://wa.me/+34643084816" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </a> */}
          <a href="https://www.linkedin.com/in/sergio-rodríguez-95b6a7231" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/sergioperez8042" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Sergio Carlos Rodríguez Pérez. All rights reserved.
      </div>
    </footer>
      </motion.div>
  );
};

export default Footer;