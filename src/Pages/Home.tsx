const Home = () => {
  return (
    <section className="flex min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-950 overflow-hidden relative">
      {/* Left Content */}
      <div className="flex-1 px-6 py-16 space-y-8 z-10">
        <h1 className="text-white font-bold leading-tight text-6xl sm:text-7xl md:text-8xl">
          <div className="block">Tamaduni</div>
          <div className="flex items-end space-x-4 flex-wrap">
            <span className="inline-block transform scale-y-[2.5] origin-bottom text-emerald-600 leading-none">
              Fest
            </span>
            <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] bg-texture bg-clip-text text-transparent leading-none">
              04
            </span>
          </div>
        </h1>

        <div className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_10px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 w-full max-w-3xl relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:rounded-3xl before:blur-lg before:z-[-1]">
          <p className="text-white text-lg sm:text-2xl">
            Bringing Nations Together, Exchanging Cultures, Bridging Gaps, and Making New Connections.
          </p>
        </div>
      </div>

      {/* Right-side Planet + Ring */}
      <div className="absolute bottom-0 right-0 max-w-[100vw] overflow-hidden pointer-events-none z-0">
        <div className="relative w-[30rem] h-[30rem] sm:w-[36rem] sm:h-[36rem] md:w-[40rem] md:h-[40rem]">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-full h-full border-[4px] border-white/20 rounded-full opacity-20 scale-[1.3] bg-texture"></div>

          {/* Inner Planet */}
          <div className="w-full h-full rounded-full bg-texture border border-white/20 shadow-[0_10px_30px_rgba(255,255,255,0.1)] backdrop-blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
