const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <p>
        I’m Ajene Christian, a Full Stack Developer from New York City with a
        passion for building web applications that blend technical
        problem-solving with creativity. My journey into tech started in an
        unexpected way — through an aptitude test for the Navy that revealed my
        potential for high-clearance tech roles. That spark led me to The Marcy
        Lab School, where I honed my skills in React, Flask, and PostgreSQL
        while also learning the importance of collaboration and communication in
        building meaningful projects. Coming from a close-knit family and
        growing up in a resilient community shaped my drive to persevere and
        adapt. Today, I’m focused on creating applications that improve people’s
        lives and tell stories through technology. Whether it’s full-stack
        development, designing impactful user experiences, or one day building a
        game, I’m excited to keep growing and contributing to innovative teams.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          JavaScript / TypeScript
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">React</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">Tailwind CSS</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">Python</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">Flask</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">PostgreSQL</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">Git / GitHub</div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">Node.js</div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
        Education & Training
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Software Engineering Fellowship – The Marcy Lab School (2024–2025)
        </li>
        <li>Medgar Evers College – Bachelor of Science (attended)</li>
        <li>LaGuardia Community College – Veterinary Technology (attended)</li>
      </ul>
    </div>
  );
};

export default AboutMe;
