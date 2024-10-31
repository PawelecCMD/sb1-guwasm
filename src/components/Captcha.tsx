import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Captcha({ onVerify }: { onVerify: (verified: boolean) => void }) {
  const [code, setCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const generateCode = () => {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setCode(result);
    setUserInput('');
    setIsValid(false);
    onVerify(false);
  };

  useEffect(() => {
    generateCode();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value === code;
    setIsValid(valid);
    onVerify(valid);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="font-mono text-xl tracking-wider select-none" style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            letterSpacing: '0.5em'
          }}>
            {code}
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={generateCode}
          className="hover:bg-pink-50"
        >
          <RefreshCw className="h-4 w-4 text-pink-600" />
        </Button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Wpisz kod"
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        maxLength={4}
      />
      {userInput && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={isValid ? "text-green-600 text-sm" : "text-red-600 text-sm"}
        >
          {isValid ? "Kod poprawny" : "Nieprawidłowy kod"}
        </motion.p>
      )}
    </div>
  );
}