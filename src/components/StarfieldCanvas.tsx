import React, { useEffect, useRef } from 'react';

// Starfield Canvas do Arsenal (inspirado no Starfield-Scroll-Animation)
// Gera estrelas e partículas celestes com física suave de deslocamento cósmico

interface Star {
  dirX: number;
  dirY: number;
  offset: number;
  color: [number, number, number];
  speed: number;
}

export const StarfieldCanvas: React.FC<{ intensity?: number }> = ({ intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let centerX = width / 2;
    let centerY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
    };

    window.addEventListener('resize', handleResize);

    const palette: [number, number, number][] = [
      [229, 184, 105], // Thai Gold #E5B869
      [16, 185, 129],  // Brazil Emerald #10B981
      [255, 255, 255], // Pure White
      [147, 197, 253], // Soft Blue
    ];

    const starCount = Math.floor(220 * intensity);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      stars.push({
        dirX: Math.cos(angle),
        dirY: Math.sin(angle),
        offset: Math.random(),
        color: palette[Math.floor(Math.random() * palette.length)],
        speed: 0.0008 + Math.random() * 0.0016
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDist = Math.hypot(centerX, centerY);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.offset += star.speed;
        if (star.offset > 1) {
          star.offset = 0.02;
          const angle = Math.random() * Math.PI * 2;
          star.dirX = Math.cos(angle);
          star.dirY = Math.sin(angle);
        }

        const easeDist = Math.pow(star.offset, 2.2);
        const currentDist = 30 + easeDist * (maxDist * 1.1);
        const x = centerX + star.dirX * currentDist;
        const y = centerY + star.dirY * currentDist;

        if (x < 0 || x > width || y < 0 || y > height) continue;

        const size = Math.max(0.6, easeDist * 2.8);
        const alpha = Math.min(1, star.offset * 1.8);

        ctx.fillStyle = `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${alpha * 0.75})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle motion streak
        const streakLen = easeDist * 18;
        const prevX = x - star.dirX * streakLen;
        const prevY = y - star.dirY * streakLen;

        ctx.strokeStyle = `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${alpha * 0.25})`;
        ctx.lineWidth = size * 0.6;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
    />
  );
};
