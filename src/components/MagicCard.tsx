import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
}

export function MagicCard({ children, className }: MagicCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative rounded-xl overflow-hidden",
        className
      )}
    >
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Content container */}
      <div className="relative bg-card/95 p-6 h-full z-10">
        {children}
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
        <div className="absolute inset-0 translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>
    </motion.div>
  );
}