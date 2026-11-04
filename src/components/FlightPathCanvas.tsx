import React, { useEffect, useRef } from 'react';
import { Plane, Compass, Sparkles } from 'lucide-react';

export const FlightPathCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = 240;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Coordinates on canvas
      const p1 = { x: w * 0.15, y: h * 0.72 }; // São Paulo
      const p2 = { x: w * 0.85, y: h * 0.40 }; // Bangkok
      const ctrl = { x: w * 0.50, y: h * 0.05 }; // Flight Arc Peak

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let y = 30; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw dashed geodesic flight trajectory
      ctx.save();
      ctx.strokeStyle = 'rgba(229, 184, 105, 0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.quadraticCurveTo(ctrl.x, ctrl.y, p2.x, p2.y);
      ctx.stroke();
      ctx.restore();

      // Current airplane position along quadratic bezier
      t = (t + 0.003) % 1;
      const ax = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * ctrl.x + t * t * p2.x;
      const ay = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * ctrl.y + t * t * p2.y;

      // Glow behind plane
      const grad = ctx.createRadialGradient(ax, ay, 0, ax, ay, 20);
      grad.addColorStop(0, 'rgba(229, 184, 105, 0.8)');
      grad.addColorStop(1, 'rgba(229, 184, 105, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(ax, ay, 20, 0, Math.PI * 2);
      ctx.fill();

      // Plane dot
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(ax, ay, 4, 0, Math.PI * 2);
      ctx.fill();

      // Waypoint 1: São Paulo (GRU)
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, 12 + Math.sin(t * 15) * 3, 0, Math.PI * 2);
      ctx.stroke();

      // Waypoint 2: Bangkok (BKK)
      ctx.fillStyle = '#E5B869';
      ctx.beginPath();
      ctx.arc(p2.x, p2.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(229, 184, 105, 0.3)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(p2.x, p2.y, 12 + Math.cos(t * 15) * 3, 0, Math.PI * 2);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-[#0C0E14] border border-white/10 p-5 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <Plane className="w-4 h-4 text-[#E5B869] transform rotate-45" />
          <h4 className="text-xs uppercase font-mono tracking-widest text-white">
            ROTA TRANSCONTINENTAL: GRU ✈ BKK
          </h4>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            GRU (-23.55°)
          </span>
          <span>16.540 KM</span>
          <span className="flex items-center gap-1 text-[#E5B869]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B869]" />
            BKK (+13.75°)
          </span>
        </div>
      </div>

      <canvas ref={canvasRef} className="w-full block" />

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
        <span>Origem: São Paulo (Guarulhos)</span>
        <span className="text-white font-medium">Tempo de Voo Típico: ~24h</span>
        <span>Destino: Bangkok (Suvarnabhumi)</span>
      </div>
    </div>
  );
};
