const InnerPageHero = ({ title, description }) => {
  return (
    <section className="w-full p-2 md:p-4 bg-gray-50">
      <div className="bg-primary rounded-3xl">
        <div className="max-w-7xl mx-auto pt-48 pb-24 px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerPageHero;
