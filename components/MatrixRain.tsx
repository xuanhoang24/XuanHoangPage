import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  onComplete?: () => void;
}

const MatrixRain = ({ onComplete }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let frameCount = 0;
    const maxFrames = 300; // Run for about 5 seconds at 60fps
    let fadeStarted = false;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillStyle = `hsl(120, 100%, ${50 + Math.random() * 30}%)`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = fadeStarted ? -999 : 0; // Stop resetting drops when fading
        }
        drops[i]++;
      }

      frameCount++;
      if (frameCount < maxFrames) {
        requestAnimationFrame(draw);
      } else if (!fadeStarted) {
        fadeStarted = true;
        // Continue drawing until all drops are off screen
        const fadeDown = () => {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          let allDropsGone = true;
          for (let i = 0; i < drops.length; i++) {
            if (drops[i] * fontSize < canvas.height + 100) {
              allDropsGone = false;
              const text = charArray[Math.floor(Math.random() * charArray.length)];
              ctx.fillStyle = `hsl(120, 100%, ${50 + Math.random() * 30}%)`;
              ctx.fillText(text, i * fontSize, drops[i] * fontSize);
              drops[i]++;
            }
          }

          if (!allDropsGone) {
            requestAnimationFrame(fadeDown);
          } else {
            onComplete?.();
          }
        };
        fadeDown();
      }
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none opacity-50"
      style={{ background: 'transparent' }}
    />
  );
};

export default MatrixRain;
