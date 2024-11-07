import { motion } from 'framer-motion';
import Logos from './logos';

const skills = [
  // Programming Languages
  { name: 'JavaScript', logo: Logos.javascript },
  { name: 'TypeScript', logo: Logos.TypeScript },
  { name: 'Python', logo: Logos.Python },
  { name: 'PHP', logo: Logos.PHP },
  { name: 'SQL', logo: Logos.SQL },

  // Frameworks and Libraries
  { name: 'React Hooks', logo: Logos.ReactHooks },
  { name: 'Redux Toolkit', logo: Logos.ReduxToolkit },
  { name: 'React Query', logo: Logos.ReactQuery },
  { name: 'Node.js', logo: Logos.NodeJS },
  { name: 'Svelte', logo: Logos.Svelte },
  { name: 'GraphQL', logo: Logos.GraphQL },
  { name: 'Chakra UI', logo: Logos.ChakraUI },
  { name: 'Axios', logo: Logos.Axios },

  // Tools and Build Systems
  { name: 'Vite', logo: Logos.Vite },
  { name: 'Webpack', logo: Logos.Webpack },
  { name: 'ESBuild', logo: Logos.ESBuild },
  { name: 'Docker', logo: Logos.Docker },
  { name: 'Git', logo: Logos.Git },
  { name: 'GitHub', logo: Logos.GitHub },
  { name: 'GitLab', logo: Logos.GitLab },
  { name: 'Microsoft Power Automate', logo: Logos.MicrosoftPowerAutomate },
  { name: 'Go High-Level App', logo: Logos.GoHighLevelApp },

  // Testing
  { name: 'Jest', logo: Logos.Jest },
  { name: 'Cypress', logo: Logos.Cypress },
  { name: 'Browser Automation', logo: Logos.BrowserAutomation },

  // Styling
  { name: 'CSS3', logo: Logos.CSS3 },
  { name: 'SASS', logo: Logos.SASS },
  { name: 'Tailwind CSS', logo: Logos.TailwindCSS },
  { name: 'Prettier', logo: Logos.Prettier },
  { name: 'Framer Motion', logo: Logos.FramerMotion },
  { name: 'ESLint', logo: Logos.ESLint },

  // Databases
  { name: 'MongoDB', logo: Logos.MongoDB },
  { name: 'Firebase', logo: Logos.Firebase },

  // Agile Practices
  { name: 'Scrum', logo: Logos.Scrum },
  { name: 'Agile', logo: Logos.Agile },

  // Other
  { name: 'HTML5', logo: Logos.HTML5 },
  { name: 'REST API', logo: Logos.RESTAPI },
  { name: 'Web API', logo: Logos.WebAPI },
  { name: 'Data Scraping', logo: Logos.DataScraping },
];
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
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
