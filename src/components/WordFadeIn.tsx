import { motion } from 'framer-motion';

interface WordFadeInProps {
  text: string;
  className?: string;
}

export function WordFadeIn({ text, className }: WordFadeInProps) {
  const words = text.split(' ');

  return (
    <p className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </p>
  );
}