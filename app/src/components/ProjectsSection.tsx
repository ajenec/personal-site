function ProjectsSection() {
  return (
    <div id="projects" className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <h2 className="text-xl font-semibold mb-3">
            Bugged Realities: City of Choices
          </h2>
          <p className="text-gray-600 mb-4">
            Web-based text adventure with persistent saves, branching
            narratives, and multiple endings.
          </p>
          <a
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            href="https://www.google.com"
          >
            View Project
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <h2 className="text-xl font-semibold mb-3">BrainRot Universe</h2>
          <p className="text-gray-600 mb-4">
            Full-stack React app integrating multiple APIs with error handling,
            pagination, and modals.
          </p>
          <a
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            href="https://www.google.com"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
