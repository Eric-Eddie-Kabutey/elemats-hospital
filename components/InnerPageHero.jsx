const InnerPageHero = ({ title, description }) => {
  return (
    <section className="w-full p-2 md:p-4 bg-white">
      <div className="bg-primary rounded-3xl">
        <div className="w-full max-w-7xl mx-auto pt-48 pb-24 px-6 md:px-12">
          <div className="">
            <h1 className="text-5xl md:text-8xl font-normal text-white tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className=" max-w-2xl text-xl md:text-2xl text-white/70 font-normal leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerPageHero;
