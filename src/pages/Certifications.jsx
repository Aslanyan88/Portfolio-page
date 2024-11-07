const Certifications = () => {
  const certifications = [
    { name: "HTML5,CSS3,Javascript", source: "Eargir IT" },
    { name: "HTML5,CSS3,Javascript", source: "CodeAcademy" },
    { name: "ReactJS", source: "Microsoft Innovation Center Armenia" },
    {
      name: "Front end development",
      source: "GITC - Information Technologies Center",
    },
    { name: "C++", source: "Learning Mission Armenia" },
    { name: "Git", source: "Learning Mission Armenia" },
    { name: "GitHub|Gitlab", source: "LinkedIn Learning" },
    { name: "JQuery|Lodash", source: "LinkedIn Learning" },

    { name: "API Testing Foundations", source: "LinkedIn Learning" },
    { name: "ChatGPT for Web Developers", source: "LinkedIn Learning" },
    {
      name: "An introduction to web applications architecture",
      source: "The Open University",
    },

    {
      name: "Network Administrator:IP addressing and Routing",
      source: "Armenian National Supercomputing Center - Implemented by EIF",
    },

    {
      name: "ESLint Checking for Syntax and Logic Errors",
      source: "LinkedIn Learning",
    },
    {
      name: "ESLint Integrating with Your Workflow",
      source: "LinkedIn Learning",
    },
    { name: "Getting Your Website Online", source: "LinkedIn Learning" },
    { name: "JavaScript Closures", source: "LinkedIn Learning" },
    {
      name: "Learning Functional Programming with JavaScript ES5",
      source: "LinkedIn Learning",
    },
    {
      name: "Learning Power Automate Desktop for Developers",
      source: "LinkedIn Learning",
    },
    { name: "Learning TypeScript", source: "LinkedIn Learning" },
    { name: "Learning webpack", source: "LinkedIn Learning" },
    { name: "Level Up JavaScript", source: "LinkedIn Learning" },
    { name: "Sass Essential Training", source: "LinkedIn Learning" },
    { name: "Tailwind CSS 3 Essential Training", source: "LinkedIn Learning" },
    {
      name: "Web Development Tools Enhance Workflow and Code Quality",
      source: "LinkedIn Learning",
    },
    { name: "WordPress Essential Training 2023", source: "LinkedIn Learning" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-md text-center group"
            >
              <h3 className="text-2xl font-semibold">{certification.name}</h3>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-sm text-gray-300">
                  Source: {certification.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
