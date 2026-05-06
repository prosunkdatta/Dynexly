import { useEffect, useRef } from 'react';

export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // We'll find the parent section, but actually we can just use the parentElement 
    // of the canvas since the parent is absolute inset-0 or similar.
    const section = canvas.parentElement;
    if (!section) return;

    let width: number, height: number;
    let rotation = 0;
    let RADIUS: number;
    const LATS = 16;
    const LONS = 24;

    function resize() {
      if (!section || !canvas || !ctx) return;
      const rect = section.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      RADIUS = Math.min(width, height) * 0.35;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function project(lat: number, lon: number, rotY: number) {
      const phi = (lat * Math.PI) / 180;
      const theta = ((lon + rotY) * Math.PI) / 180;
      const x3 = Math.cos(phi) * Math.cos(theta);
      const y3 = Math.cos(phi) * Math.sin(theta);
      const z3 = Math.sin(phi);
      return {
        x: width / 2 + x3 * RADIUS,
        y: height / 2 - y3 * RADIUS,
        z: z3,
      };
    }

    function drawGlobe() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(168,216,240,0.25)';
      for (let i = 0; i < LATS; i++) {
        const lat = -90 + (i * 180) / (LATS - 1);
        ctx.beginPath();
        for (let j = 0; j <= LONS; j++) {
          const lon = (j * 360) / LONS;
          const p = project(lat, lon, rotation);
          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      ctx.strokeStyle = 'rgba(168,216,240,0.2)';
      for (let j = 0; j < LONS; j++) {
        const lon = (j * 360) / LONS;
        ctx.beginPath();
        for (let i = 0; i <= LATS; i++) {
          const lat = -90 + (i * 180) / LATS;
          const p = project(lat, lon, rotation);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      const north = project(90, 0, rotation);
      const south = project(-90, 0, rotation);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(255,255,255,0.6)';
      [north, south].forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, 2 * Math.PI);
        ctx.fill();
      });
      ctx.shadowBlur = 0;
      rotation += 0.15;
    }

    let animationId: number;
    function animate() {
      animationId = requestAnimationFrame(animate);
      drawGlobe();
    }

    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="globe-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ background: 'transparent' }} />;
}
