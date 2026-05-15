import Image from "next/image";

const crosses = [
  // [x%, y%, size, opacity]
  [88, 15, 28, 0.12],
  [78, 55, 16, 0.08],
  [92, 70, 44, 0.06],
  [70, 25, 12, 0.10],
  [95, 42, 20, 0.09],
  [60, 75, 32, 0.05],
  [83, 88, 14, 0.08],
  [50, 18, 10, 0.07],
  [97, 10, 36, 0.05],
  [65, 45, 18, 0.09],
];

const Cross = ({ x, y, size, opacity }) => {
  const arm = size / 3;
  return (
    <svg
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)", opacity }}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal bar */}
      <rect x={0} y={size / 2 - arm / 2} width={size} height={arm} rx={arm / 2} fill="white" />
      {/* Vertical bar */}
      <rect x={size / 2 - arm / 2} y={0} width={arm} height={size} rx={arm / 2} fill="white" />
    </svg>
  );
};

const InnerPageHero = ({ title, description, backgroundImage }) => {
  return (
    <section className="w-full p-2 md:p-4 bg-white">
      <div className={`rounded-3xl relative overflow-hidden ${!backgroundImage ? 'bg-primary' : ''}`}>
        
        {/* Background Image Mode */}
        {backgroundImage && (
          <>
            <div className="absolute inset-0 z-0">
              <Image 
                src={backgroundImage} 
                alt={title} 
                fill 
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/70 to-black/60 z-10" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
            </div>
          </>
        )}

        {/* Medical cross pattern - Only show if no background image */}
        {crosses.map(([x, y, size, opacity], i) => (
          <Cross key={i} x={x} y={y} size={size} opacity={opacity} />
        ))}

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto pt-52 pb-24 px-6 md:px-12">
          <h1 className="text-5xl md:text-8xl font-normal text-white tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-white/90 font-normal leading-relaxed mt-4">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnerPageHero;
