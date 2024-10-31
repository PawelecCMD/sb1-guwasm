import { motion } from 'framer-motion';

interface BlurInEffectProps {
  children: React.ReactNode;
}

export function BlurInEffect({ children }: BlurInEffectProps) {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}