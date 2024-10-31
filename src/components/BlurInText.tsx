import { motion } from 'framer-motion';

interface BlurInTextProps {
  text: string;
  className?: string;
}

export function BlurInText({ text, className }: BlurInTextProps) {
  return (
    <motion.h1
      className={className}
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {text}
    </motion.h1>
  );
}