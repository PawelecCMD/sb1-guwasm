import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Slider } from '@/components/ui/slider';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState([0]);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isVerified) {
      toast({
        title: "Błąd",
        description: "Proszę przesunąć suwak, aby zweryfikować",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    // Symulacja wysyłania formularza
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });

    setLoading(false);
    (e.target as HTMLFormElement).reset();
    setSliderValue([0]);
    setIsVerified(false);
  };

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    if (value[0] === 100) {
      setIsVerified(true);
      toast({
        title: "Zweryfikowano",
        description: "Możesz teraz wysłać wiadomość",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Imię i nazwisko"
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          required
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          placeholder="Twoja wiadomość"
          required
          className="w-full min-h-[150px]"
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Przesuń suwak, aby zweryfikować
        </p>
        <Slider
          value={sliderValue}
          onValueChange={handleSliderChange}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
      <div className="flex justify-end">
        <Button 
          type="submit" 
          disabled={loading || !isVerified}
          className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
        >
          {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
        </Button>
      </div>
    </form>
  );
}