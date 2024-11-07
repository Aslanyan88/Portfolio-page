import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;