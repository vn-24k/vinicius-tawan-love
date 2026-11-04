import React, { useEffect, useRef } from 'react';

interface HeartParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  scale: number;
}

export const FloatingHeartsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(244, 63, 94, 0.7)',   // Rose #F43F5E
      'rgba(229, 184, 105, 0.75)', // Thai Gold #E5B869
      'rgba(16, 185, 129, 0.65)',  // Emerald #10B981
      'rgba(255, 182, 193, 0.6)',  // Soft pink
    ];

    const particles: HeartParticle[] = [];

    // Draw single heart path on canvas
    const drawHeart = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      rotation: number
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.scale(size / 20, size / 20);

      context.beginPath();
      context.moveTo(0, 5);
      // Left curve
      context.bezierCurveTo(-10, -10, -20, 5, 0, 20);
      // Right curve
      context.bezierCurveTo(20, 5, 10, -10, 0, 5);
      context.closePath();

      context.fillStyle = color;
      context.shadowColor = color;
      context.shadowBlur = 10;
      context.fill();

      context.restore();
    };

    // Ambient floating hearts spawn
    const spawnAmbientHeart = () => {
      particles.push({
        x: Math.random() * width,
        y: height + 30,
        size: 10 + Math.random() * 16,
        speedY: 0.6 + Math.random() * 1.2,
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: 0.15 + Math.random() * 0.45,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: (Math.random() - 0.5) * 0.4,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        scale: 1,
      });
    };

    // Spawn on mouse move / touch
    const handlePointerMove = (e: MouseEvent) => {
      if (Math.random() > 0.3) return; // throttle
      particles.push({
        x: e.clientX,
        y: e.clientY,
        size: 8 + Math.random() * 14,
        speedY: 1.2 + Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 2,
        opacity: 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: (Math.random() - 0.5) * 0.5,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        scale: 1,
      });
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Initial pool
    for (let i = 0; i < 25; i++) {
      const p = {
        x: Math.random() * width,
        y: Math.random() * height,
        size: 8 + Math.random() * 16,
        speedY: 0.5 + Math.random() * 1.2,
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: 0.15 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: (Math.random() - 0.5) * 0.4,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        scale: 1,
      };
      particles.push(p);
    }

    let frameCount = 0;
    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Spawn periodic ambient hearts
      if (frameCount % 45 === 0 && particles.length < 50) {
        spawnAmbientHeart();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += Math.sin(p.y * 0.02) * 0.5 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y < -40) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.opacity;
        drawHeart(ctx, p.x, p.y, p.size, p.color, p.rotation);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 opacity-60 mix-blend-screen"
    />
  );
};
