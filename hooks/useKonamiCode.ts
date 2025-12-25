import { useEffect, useState, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight'
];

export const useKonamiCode = () => {
  const [triggered, setTriggered] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  const reset = useCallback(() => {
    setTriggered(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.code].slice(-KONAMI_CODE.length);
      setKeySequence(newSequence);

      if (newSequence.join(',') === KONAMI_CODE.join(',')) {
        setTriggered(true);
        setKeySequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  return { triggered, reset };
};
