import { useRef, useMemo, useState, useEffect, useCallback } from 'react';

/* ─── Tech stack data ─────────────────────────────────────────────────── */
const TECHS = [
  { name: 'Java',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Spring Boot',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'React',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Git',          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Linux',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Python',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
];

/* ─── Fibonacci-sphere positions ─────────────────────────────────────── */
function fibonacciSphere(count: number, radius: number) {
  const pts: [number, number, number][] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push([radius * r * Math.cos(theta), radius * y, radius * r * Math.sin(theta)]);
  }
  return pts;
}

/* ─── Rotate a point around Y then X axis ───────────────────────────── */
function rotatePoint(
  px: number, py: number, pz: number,
  ry: number, rx: number
): { x: number; y: number; z: number } {
  const cosY = Math.cos(ry), sinY = Math.sin(ry);
  const cosX = Math.cos(rx), sinX = Math.sin(rx);
  const x1 = px * cosY - pz * sinY;
  const z1 = px * sinY + pz * cosY;
  const y2 = py * cosX - z1 * sinX;
  const z2 = py * sinX + z1 * cosX;
  return { x: x1, y: y2, z: z2 };
}

export default function SkillsSphere() {
  const RADIUS_PX = 220;
  const ICON_SIZE = 46;

  const positions = useMemo(() => fibonacciSphere(TECHS.length, RADIUS_PX), []);

  /* ── Rotation angles live in a ref so RAF loop sees latest values ── */
  const angleRef = useRef({ y: 0.0, x: 0.25 });
  /* ── Momentum velocity (radians / second) ─── */
  const velRef   = useRef({ y: 0.0, x: 0.0 });

  /* ── Drag state ─────────────────────────────────────────────────── */
  const dragging  = useRef(false);
  const lastPos   = useRef({ x: 0, y: 0 });
  const lastTime  = useRef(0);
  /* Store last delta for momentum on release */
  const lastDelta = useRef({ x: 0, y: 0 });

  const rafRef = useRef<number>(0);
  const [coords, setCoords] = useState<{ x: number; y: number; z: number; depth: number }[]>([]);

  /* ── RAF render loop ─────────────────────────────────────────────── */
  useEffect(() => {
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!dragging.current) {
        // Auto-rotate (slow) when not dragging
        velRef.current.y += (0.25 - velRef.current.y) * 0.02; // target slow auto-spin
        velRef.current.x *= 0.96; // damp vertical drift back to 0

        angleRef.current.y += velRef.current.y * dt;
        angleRef.current.x += velRef.current.x * dt;

        // Clamp vertical tilt gently
        angleRef.current.x = Math.max(-1.2, Math.min(1.2, angleRef.current.x));
      } else {
        // While dragging, let momentum keep applying (set each mousemove)
        // No auto-rotate
        velRef.current.y *= 0.85;
        velRef.current.x *= 0.85;
      }

      const { y: ry, x: rx } = angleRef.current;
      const next = positions.map(([px, py, pz]) => {
        const { x, y, z } = rotatePoint(px, py, pz, ry, rx);
        return { x, y, z, depth: z };
      });

      setCoords(next);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [positions]);

  /* ── Pointer interaction helpers ─────────────────────────────────── */
  const onDragStart = useCallback((clientX: number, clientY: number) => {
    dragging.current = true;
    lastPos.current  = { x: clientX, y: clientY };
    lastTime.current = performance.now();
    lastDelta.current = { x: 0, y: 0 };
    // Kill auto-rotate velocity immediately
    velRef.current = { y: 0, x: 0 };
  }, []);

  const onDragMove = useCallback((clientX: number, clientY: number) => {
    if (!dragging.current) return;
    const dx = clientX - lastPos.current.x;
    const dy = clientY - lastPos.current.y;
    const now = performance.now();
    const dt  = Math.max((now - lastTime.current) / 1000, 0.001);

    const SENSITIVITY = 0.006;
    angleRef.current.y += dx * SENSITIVITY;
    angleRef.current.x += dy * SENSITIVITY;
    angleRef.current.x  = Math.max(-1.4, Math.min(1.4, angleRef.current.x));

    // Store velocity for momentum
    velRef.current.y  = (dx * SENSITIVITY) / dt;
    velRef.current.x  = (dy * SENSITIVITY) / dt;
    lastDelta.current = { x: dx, y: dy };

    lastPos.current  = { x: clientX, y: clientY };
    lastTime.current = now;
  }, []);

  const onDragEnd = useCallback(() => {
    dragging.current = false;
    // Apply momentum — clamp max speed so it doesn't fly away
    const MAX_VEL = 4;
    velRef.current.y = Math.max(-MAX_VEL, Math.min(MAX_VEL, velRef.current.y));
    velRef.current.x = Math.max(-MAX_VEL, Math.min(MAX_VEL, velRef.current.x));
  }, []);

  /* ── Mouse events ────────────────────────────────────────────────── */
  const onMouseDown = (e: React.MouseEvent) => { e.preventDefault(); onDragStart(e.clientX, e.clientY); };
  const onMouseMove = useCallback((e: MouseEvent) => onDragMove(e.clientX, e.clientY), [onDragMove]);
  const onMouseUp   = useCallback(() => onDragEnd(), [onDragEnd]);

  /* ── Touch events ────────────────────────────────────────────────── */
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    onDragStart(t.clientX, t.clientY);
  };
  const onTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    const t = e.touches[0];
    onDragMove(t.clientX, t.clientY);
  }, [onDragMove]);
  const onTouchEnd = useCallback(() => onDragEnd(), [onDragEnd]);

  /* Attach global mouse/touch listeners so drag works outside the element */
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend',  onTouchEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup',   onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend',  onTouchEnd);
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  /* ── Sort back→front for correct z-ordering ─────────────────────── */
  const sorted = useMemo(() => {
    if (coords.length === 0) return [];
    return TECHS.map((t, i) => ({ ...t, ...coords[i] }))
      .sort((a, b) => (a?.depth ?? 0) - (b?.depth ?? 0));
  }, [coords]);

  const depthToStyle = (z: number) => {
    const norm    = (z + RADIUS_PX) / (2 * RADIUS_PX); // 0=back → 1=front
    const opacity = 0.2 + norm * 0.8;
    const scale   = 0.5 + norm * 0.7;
    return { opacity, scale };
  };

  const SIZE = RADIUS_PX * 2 + ICON_SIZE * 2; // total container px

  return (
    <section
      id="skills"
      style={{ background: '#07091a' }}
      className="relative w-full py-24 flex flex-col items-center overflow-hidden select-none"
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '55vmin', height: '55vmin', borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(60,80,200,0.18) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-14 relative z-10 px-4">
        <span style={{ color: '#6366f1', letterSpacing: '0.28em', fontSize: '0.72rem' }}
          className="font-semibold uppercase">Tech Stack</span>
        <h2 style={{ fontFamily: "'Inter',sans-serif" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          My <span style={{
            backgroundImage: 'linear-gradient(90deg,#818cf8,#c084fc)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Skills</span>
        </h2>
        <p style={{ color: 'rgba(180,190,255,0.45)', fontSize: '0.8rem', marginTop: 4 }}>
          Drag to explore · hover for details
        </p>
      </div>

      {/* Globe wrapper — drag starts here */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          position: 'relative',
          width: SIZE, height: SIZE,
          maxWidth: '100vw',
          cursor: dragging.current ? 'grabbing' : 'grab',
          touchAction: 'none',
        }}
      >
        {/* SVG Globe */}
        <svg
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)', pointerEvents: 'none',
          }}
          width={RADIUS_PX * 2 + 4}
          height={RADIUS_PX * 2 + 4}
          viewBox={`0 0 ${RADIUS_PX * 2 + 4} ${RADIUS_PX * 2 + 4}`}
        >
          <defs>
            <clipPath id="globe-clip">
              <circle cx={RADIUS_PX + 2} cy={RADIUS_PX + 2} r={RADIUS_PX} />
            </clipPath>
            <radialGradient id="globe-grad" cx="42%" cy="38%" r="65%">
              <stop offset="0%"   stopColor="#1e246c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#060818" stopOpacity="0.97" />
            </radialGradient>
            <filter id="rim-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Base sphere */}
          <circle cx={RADIUS_PX + 2} cy={RADIUS_PX + 2} r={RADIUS_PX} fill="url(#globe-grad)" />

          {/* Dot grid */}
          <g clipPath="url(#globe-clip)">
            {Array.from({ length: 24 }, (_, row) =>
              Array.from({ length: 24 }, (_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={(col + 0.5) * (RADIUS_PX * 2 / 24) + 2}
                  cy={(row + 0.5) * (RADIUS_PX * 2 / 24) + 2}
                  r={1.1} fill="#4f5fd8" fillOpacity={0.22}
                />
              ))
            )}
          </g>

          {/* Rim highlight */}
          <circle
            cx={RADIUS_PX + 2} cy={RADIUS_PX + 2} r={RADIUS_PX - 1}
            fill="none" stroke="rgba(130,140,255,0.18)" strokeWidth={2}
            filter="url(#rim-glow)"
          />
        </svg>

        {/* Icons */}
        {sorted.map((tech) => {
          if (!tech.x && tech.x !== 0) return null;
          const { opacity, scale } = depthToStyle(tech.depth);
          const cx = (RADIUS_PX + ICON_SIZE) + tech.x;
          const cy = (RADIUS_PX + ICON_SIZE) + tech.y;
          const isFront = tech.depth > -RADIUS_PX * 0.2;

          return (
            <TechIcon
              key={tech.name}
              name={tech.name}
              src={tech.src}
              cx={cx} cy={cy}
              size={ICON_SIZE}
              opacity={opacity}
              scale={scale}
              isFront={isFront}
            />
          );
        })}
      </div>
    </section>
  );
}

/* ─── Single icon node ────────────────────────────────────────────────── */
interface TechIconProps {
  name: string; src: string;
  cx: number; cy: number;
  size: number; opacity: number; scale: number;
  isFront: boolean;
}

function TechIcon({ name, src, cx, cy, size, opacity, scale, isFront }: TechIconProps) {
  const [hovered, setHovered] = useState(false);

  const finalScale   = hovered ? scale * 1.25 : scale;
  const finalOpacity = hovered ? 1 : opacity;

  return (
    <div
      onMouseEnter={() => isFront && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: cx, top: cy,
        transform: `translate(-50%,-50%) scale(${finalScale})`,
        opacity: finalOpacity,
        transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease',
        zIndex: Math.round(opacity * 100),
        pointerEvents: isFront ? 'auto' : 'none',
        cursor: isFront ? 'default' : 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        userSelect: 'none',
      }}
    >
      {/* Icon image */}
      <div style={{
        width: size, height: size,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        filter: hovered
          ? 'drop-shadow(0 0 14px rgba(200,210,255,0.8))'
          : 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
        transition: 'filter 0.25s ease',
      }}>
        <img
          src={src} alt={name} draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Label */}
      <span style={{
        fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: hovered ? '#e0e7ff' : 'rgba(200,210,255,0.5)',
        transition: 'color 0.25s ease',
        whiteSpace: 'nowrap',
        fontFamily: "'Inter',sans-serif",
      }}>
        {name}
      </span>
    </div>
  );
}
