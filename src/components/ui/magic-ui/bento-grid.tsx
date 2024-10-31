import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function BentoGridItem({ title, description, icon, className }: BentoGridItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all hover:shadow-xl",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="mb-2 font-semibold text-lg tracking-tight text-card-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {children}
    </div>
  );
}