import { motion } from 'framer-motion';

interface MarqueeEffectProps {
  logos: string[];
}

export function MarqueeEffect({ logos }: MarqueeEffectProps) {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        className="flex space-x-16"
        animate={{ x: [0, -1920] }}
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
            className="flex items-center justify-center w-32 h-20 bg-card/70 rounded-lg backdrop-blur-sm"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-full h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}