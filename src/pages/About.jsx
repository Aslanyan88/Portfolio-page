const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="about"
        className="flex-grow flex items-center justify-center py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 text-center md:text-left">
            <div className="flex-1">
              <p className="text-lg leading-relaxed mb-4">
                Hello! My name is Arman Aslanyan. I'm a passionate Software Engineer with experience in
                developing scalable web applications and automation tools. I specialize in full-stack development,
                particularly with technologies like React, Node.js, and modern cloud infrastructures.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I thrive in collaborative environments where innovation and problem-solving are key.
                Whether it's building a new feature, optimizing performance, or mentoring junior developers, 
                I bring dedication and creativity to every project.
              </p>
              <p className="text-lg leading-relaxed">
                Outside of coding, I enjoy exploring the latest advancements in technology, contributing 
                to open-source projects, and writing technical blogs to share my knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
