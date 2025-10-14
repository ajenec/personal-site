function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#072929] via-[#2F702F] to-[#E05219] animate-gradientMove"></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-5 bg-black/20"></div>

      {/* Hero Content */}
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          I'm Ajene Christian
        </h1>
        <p className="text-xl text-white mt-2 drop-shadow-md">
          Full Stack Developer | Creative
        </p>
        <p className="text-sm italic text-white mt-2 drop-shadow-sm">
          It isn't where you came from, it's where you're going that counts. -
          Ella Fitzgerald
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View My Work
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
