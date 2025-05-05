const Banner = () => {
    return (
      <section className="flex items-center justify-center min-h-[40vh] bg-texture px-6">
        <div className="bg-black/70 backdrop-blur-sm border border-yellow-500 shadow-2xl rounded-tl-[3rem] rounded-br-[3rem] p-10 md:p-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 tracking-wider">
            Celebrate Culture
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Join us to honor the rhythms, stories, and colors that unite the people of Africa and beyond.
          </p>
        </div>
      </section>
    );
  };
  
  export default Banner;
  