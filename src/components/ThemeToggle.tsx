import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  const handleThemeToggle = () => {
    const root = window.document.documentElement;
    setIsDark(!isDark);
    root.classList.toggle('dark');
  };

  return (
    <motion.div
      className="fixed left-4 bottom-24 md:bottom-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={handleThemeToggle}
        className="rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border border-border"
      >
        <motion.div
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-primary" />
          ) : (
            <Sun className="h-5 w-5 text-primary" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}