import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import MyImage from '../assets/myImage.png';

const Hero = () => {
  return (
    <section
      id="top"
      className="h-screen flex items-center justify-center bg-black text-white relative"
    >
      <motion.div
        className="text-center relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative inline-block">
          <img
            src={MyImage}
            alt="Arman Aslanyan"
            className="w-40 h-40 md:w-64 md:h-64 rounded-full mx-auto mb-4 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full transform translate-x-2 translate-y-2">
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
          Hello, I'm Arman Aslanyan
          <span className="absolute top-0 left-0 w-full h-full text-gray-500 opacity-20 transform translate-x-2 translate-y-2">
            Hello, I'm Arman Aslanyan
          </span>
        </h1>
        <Typewriter
          words={['Software Engineer', 'React Enthusiast', 'Open Source Contributor']}
          loop={0} 
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
          className="text-xl md:text-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
