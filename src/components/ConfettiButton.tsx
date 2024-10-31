import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ConfettiButton({ children, className, onClick, ...props }: ConfettiButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAnimating(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setIsAnimating(false), 1000);
    onClick?.(e);
  };

  return (
    <Button
      className={cn(
        'relative transition-transform',
        isAnimating && 'scale-105',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}