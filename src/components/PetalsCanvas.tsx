import React, { useEffect, useRef } from 'react';

interface PetalsCanvasProps {
  enabled: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  type: 'rose' | 'jasmine' | 'gold';
  opacity: number;
}

export const PetalsCanvas: React.FC<PetalsCanvasProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = {
      rose: ['#e63946', '#d90429', '#ff4d6d', '#c9184a', '#a0144f'],
      jasmine: ['#fffdf0', '#fff8e7', '#fdfbf7'],
      gold: ['#f4d35e', '#ffd166', '#d4af37']
    };

    // Keep petal count moderate for silky 60fps on mobile
    const petalCount = window.innerWidth < 640 ? 24 : 42;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const randType = Math.random();
      const type: 'rose' | 'jasmine' | 'gold' =
        randType < 0.65 ? 'rose' : randType < 0.88 ? 'jasmine' : 'gold';

      const colorPalette = colors[type];
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: type === 'gold' ? Math.random() * 3 + 2 : Math.random() * 8 + 8,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 1.0 - 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        color,
        type,
        opacity: Math.random() * 0.4 + 0.5
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.type === 'rose') {
        // Heart/rose petal curved shape
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
        ctx.fill();
      } else if (p.type === 'jasmine') {
        // Small white elongated jasmine bud
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.4, p.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        // tiny green tip
        ctx.fillStyle = '#588157';
        ctx.beginPath();
        ctx.arc(0, -p.size * 0.7, 1.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Gold shimmer particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y / 30) * 0.8 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.85 }}
    />
  );
};
