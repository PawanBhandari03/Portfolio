import { useRef, useEffect } from 'react';

// --- Configuration ---
const DOT_SPACING = 36;
const DOT_RADIUS = 1;
const HOVER_RADIUS = 280;
const BASE_OPACITY = 0.07;
const MAX_OPACITY = 0.45;
const LERP_SPEED = 0.12;

// --- Starfield configuration ---
const STAR_COUNT = 80;         // number of twinkling stars
const STAR_MIN_RADIUS = 0.5;
const STAR_MAX_RADIUS = 2;
const STAR_MIN_OPACITY = 0.05;
const STAR_MAX_OPACITY = 0.35;

interface Star {
  x: number;       // fraction 0..1
  y: number;       // fraction 0..1
  radius: number;
  speed: number;   // twinkle speed
  phase: number;   // random phase offset
}

function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      radius: STAR_MIN_RADIUS + Math.random() * (STAR_MAX_RADIUS - STAR_MIN_RADIUS),
      speed: 0.3 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return stars;
}

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const smoothMouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const starsRef = useRef<Star[]>(generateStars(STAR_COUNT));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let w = 0;
    let h = 0;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const draw = (time: number) => {
      // Smooth-lerp mouse position
      const sm = smoothMouse.current;
      const tm = mouseRef.current;
      if (tm.x < -999) {
        sm.x += (tm.x - sm.x) * 0.05;
        sm.y += (tm.y - sm.y) * 0.05;
      } else {
        sm.x += (tm.x - sm.x) * LERP_SPEED;
        sm.y += (tm.y - sm.y) * LERP_SPEED;
      }

      ctx.clearRect(0, 0, w, h);

      const scrollY = window.scrollY;
      const mx = sm.x;
      const my = sm.y;

      // Full page height for grid
      const pageHeight = document.documentElement.scrollHeight;
      const cols = Math.ceil(w / DOT_SPACING) + 1;
      const totalRows = Math.ceil(pageHeight / DOT_SPACING) + 1;
      const offsetX = (w - (cols - 1) * DOT_SPACING) / 2;

      // Only compute rows visible in viewport
      const pad = HOVER_RADIUS + DOT_SPACING;
      const startRow = Math.max(0, Math.floor((scrollY - pad) / DOT_SPACING));
      const endRow = Math.min(totalRows, Math.ceil((scrollY + h + pad) / DOT_SPACING));

      const rSq = HOVER_RADIUS * HOVER_RADIUS;

      // --- Pass 1: base dots ---
      ctx.fillStyle = `rgba(255, 255, 255, ${BASE_OPACITY})`;
      ctx.beginPath();
      for (let r = startRow; r < endRow; r++) {
        const dotPageY = r * DOT_SPACING;
        const sy = dotPageY - scrollY;
        if (sy < -DOT_SPACING || sy > h + DOT_SPACING) continue;
        for (let c = 0; c < cols; c++) {
          const sx = offsetX + c * DOT_SPACING;
          ctx.moveTo(sx + DOT_RADIUS, sy);
          ctx.arc(sx, sy, DOT_RADIUS, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      // --- Pass 2: hover-brightened dots ---
      if (mx > -999 && my > -999) {
        const minCol = Math.max(0, Math.floor((mx - HOVER_RADIUS - offsetX) / DOT_SPACING));
        const maxCol = Math.min(cols - 1, Math.ceil((mx + HOVER_RADIUS - offsetX) / DOT_SPACING));
        const minRow = Math.max(startRow, Math.floor((my + scrollY - HOVER_RADIUS) / DOT_SPACING));
        const maxRow = Math.min(endRow - 1, Math.ceil((my + scrollY + HOVER_RADIUS) / DOT_SPACING));

        for (let r = minRow; r <= maxRow; r++) {
          const dotPageY = r * DOT_SPACING;
          const sy = dotPageY - scrollY;
          for (let c = minCol; c <= maxCol; c++) {
            const sx = offsetX + c * DOT_SPACING;
            const dx = sx - mx;
            const dy = sy - my;
            const dSq = dx * dx + dy * dy;

            if (dSq >= rSq) continue;

            const dist = Math.sqrt(dSq);
            const t = 1 - dist / HOVER_RADIUS;
            const eased = t * t * (3 - 2 * t);
            const alpha = MAX_OPACITY * eased;

            if (alpha < 0.01) continue;

            ctx.beginPath();
            ctx.arc(sx, sy, DOT_RADIUS, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
          }
        }
      }

      // --- Pass 3: Animated starfield (twinkling stars) ---
      const timeSec = time / 1000;
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const sx = star.x * w;
        const sy = star.y * h;

        // Twinkle: oscillate opacity with sin wave
        const twinkle = Math.sin(timeSec * star.speed + star.phase);
        const alpha = STAR_MIN_OPACITY + (STAR_MAX_OPACITY - STAR_MIN_OPACITY) * (0.5 + 0.5 * twinkle);

        ctx.beginPath();
        ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    smoothMouse.current = { x: -9999, y: -9999 };
    draw(0);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', resize);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
