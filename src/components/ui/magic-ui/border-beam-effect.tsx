import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BorderBeamEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function BorderBeamEffect({ children, className }: BorderBeamEffectProps) {
  return (
    <motion.div
      className={cn(
        "group relative rounded-lg overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-px rounded-lg bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-border-beam" />
      <div className="relative bg-card rounded-lg">
        {children}
      </div>
    </motion.div>
  );
}