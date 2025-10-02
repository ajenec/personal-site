function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center max-w-xl">
        <h1 className="text-4xl font-bold">I'm Ajene Christian</h1>
        <p className="text-lg">Full Stack Developer | Creative</p>
        <p className="text-sm" style={{ fontStyle: "italic" }}>
          It isn't where you came from, its where you're going that counts. -
          Ella Fitzgerald
        </p>
      </div>
      <button
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </button>
    </div>
  );
}

export default HeroSection;
