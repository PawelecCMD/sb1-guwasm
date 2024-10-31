import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  sections: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  onSectionClick: (id: string) => void;
  activeSection: string;
}

export function MobileNav({ sections, onSectionClick, activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    onSectionClick(id);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden bg-white/80 backdrop-blur-sm shadow-lg hover:bg-pink-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-pink-600" />
        ) : (
          <Menu className="h-6 w-6 text-pink-600" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
              {sections.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`flex items-center space-x-3 text-lg font-medium transition-all px-6 py-3 rounded-lg
                    ${activeSection === id 
                      ? 'text-pink-600 bg-pink-50' 
                      : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50/50'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}