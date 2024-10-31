import { motion } from 'framer-motion';

const logos = [
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "Loreal",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "Wella",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "Schwarzkopf",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "Kerastase",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "Matrix",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "Redken",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "Tigi",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    alt: "American Crew",
  },
];

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-black/40 backdrop-blur-sm py-8">
      <div className="relative flex items-center">
        <motion.div
          className="flex space-x-16 animate-marquee"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-20 rounded-lg bg-black/70 backdrop-blur-sm group transition-all duration-300 hover:scale-110 hover:border-primary/50 p-3"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Darker gradient overlays */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background via-background to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background via-background to-transparent z-10" />
    </div>
  );
}