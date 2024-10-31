import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagicContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function MagicContainer({ children, className }: MagicContainerProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-card via-card to-card/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
}