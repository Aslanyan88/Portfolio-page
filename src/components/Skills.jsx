
import { motion } from 'framer-motion';
import Logos from './logos';

const skills = [
  { name: 'HTML5', logo: Logos.HTML5 },
  { name: 'Node.js', logo: Logos.NodeJS },
  { name: 'Vite', logo: Logos.Vite },
  { name: 'CSS3', logo: Logos.CSS3 },
  { name: 'React Hooks', logo: Logos.ReactHooks },
  { name: 'Redux Toolkit', logo: Logos.ReduxToolkit },
  { name: 'MongoDB', logo: Logos.MongoDB },
  { name: 'Tailwind CSS', logo: Logos.TailwindCSS },
  { name: 'SASS', logo: Logos.SASS },
  { name: 'Python', logo: Logos.Python },
  { name: 'Jest', logo: Logos.Jest },
  { name: 'Docker', logo: Logos.Docker },
  { name: 'GitHub', logo: Logos.GitHub },
  { name: 'GitLab', logo: Logos.GitLab },
  { name: 'REST API', logo: Logos.RESTAPI },
  { name: 'TypeScript', logo: Logos.TypeScript },
  { name: 'Prettier', logo: Logos.Prettier },
  { name: 'Scrum', logo: Logos.Scrum },
  { name: 'Microsoft Power Automate', logo: Logos.MicrosoftPowerAutomate },
  { name: 'Web API', logo: Logos.WebAPI },
  { name: 'Webpack', logo: Logos.Webpack },
  { name: 'Cypress ', logo: Logos.Cypress},
  { name: 'Framer Motion', logo: Logos.FramerMotion},
  { name: 'GraphQL', logo: Logos.GraphQL},
  { name: 'Svelte ', logo: Logos.Svelte },
  { name: 'ESBuild ', logo: Logos.ESBuild },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-full p-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <p className="mt-2 text-white text-sm sm:text-base">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
