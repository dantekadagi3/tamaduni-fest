

const Home = () => {
  return (
    <section className="flex min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-950 overflow-hidden relative">
    {/* Left Content */}
    <div className="flex-1 px-8 py-16 space-y-8 z-10">
      <h1 className="text-white font-bold leading-tight text-6xl sm:text-8xl md:text-9xl">
        <div className="block">Tamaduni</div>
        <div className="flex items-end space-x-4">
          <span className="inline-block transform scale-y-[2.8] origin-bottom text-emerald-600 leading-none">
            Fest
          </span>
          <span className="text-[10rem] sm:text-[15rem] md:text-[20rem] bg-texture bg-clip-text text-transparent leading-none">
            04
          </span>
        </div>
      </h1>
  
      <div className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_10px_30px_rgba(255,255,255,0.1)] rounded-3xl p-8 w-full max-w-3xl relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:rounded-3xl before:blur-lg before:z-[-1]">
        <p className="text-white text-lg sm:text-2xl">
          Bringing Nations Together, Exchanging Cultures, Bridging Gaps, and Making New Connections.
        </p>
      </div>
    </div>
  
    {/* Right-side Planet + Ring */}
    <div className="absolute right-[-8rem] bottom-0 w-[40rem] h-[40rem] z-0">
      {/* Outer Ring */}
      <div className=" bg-texture absolute inset-[-6rem] w-[52rem] h-[52rem] border-[4px] border-white/20 rounded-full opacity-30"></div>
  
      {/* Inner Planet */}
      <div className="w-full h-full rounded-full bg-texture border border-white/20 shadow-[0_10px_30px_rgba(255,255,255,0.1)] backdrop-blur-md"></div>
    </div>
  </section>
  
  )
}

export default Home
