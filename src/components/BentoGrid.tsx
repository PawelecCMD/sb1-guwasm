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
        "group relative overflow-hidden rounded-xl bg-white p-6 transition-all hover:shadow-xl border border-pink-100",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="mb-2 font-semibold text-xl tracking-tight text-gray-900 font-poppins">
          {title}
        </h3>
        <p className="text-gray-600 font-poppins">{description}</p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-white to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-100/20 to-transparent" />
      </div>

      {/* Border Shine */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
      </div>
    </motion.div>
  );
}

interface BentoGridProps {
  items?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
  }>;
}

export function BentoGrid({ items }: BentoGridProps = {}) {
  const defaultItems = [
    {
      title: "Doświadczenie",
      description: "Ponad 15 lat doświadczenia w branży fryzjerskiej i nieustanne doskonalenie naszej oferty produktowej.",
      icon: <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 font-semibold">15+</div>,
      className: "md:col-span-2"
    },
    {
      title: "Jakość",
      description: "Współpracujemy tylko z renomowanymi markami, gwarantując najwyższą jakość produktów.",
      icon: <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">★</div>
    },
    {
      title: "Innowacje",
      description: "Stale śledzimy trendy i wprowadzamy najnowsze rozwiązania w dziedzinie pielęgnacji włosów.",
      icon: <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">🔬</div>
    },
    {
      title: "Wsparcie",
      description: "Zapewniamy profesjonalne doradztwo i wsparcie techniczne dla salonów fryzjerskich.",
      icon: <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">💬</div>,
      className: "md:col-span-2"
    }
  ];

  const gridItems = items || defaultItems;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {gridItems.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </div>
  );
}