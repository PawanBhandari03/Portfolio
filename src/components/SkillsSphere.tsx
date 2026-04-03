import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const TECH_LIST = [
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Postgres', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Linux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
];

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Distribute 15 icons evenly around the sphere using Fibonacci lattice
  const icons = useMemo(() => {
    const radius = 2.6; // slightly outside the wireframe
    return TECH_LIST.map((icon, i) => {
      const phi = Math.acos(-1 + (2 * i) / TECH_LIST.length);
      const theta = Math.sqrt(TECH_LIST.length * Math.PI) * phi;
      return {
        ...icon,
        pos: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.cos(phi),
          radius * Math.sin(theta) * Math.sin(phi)
        ] as [number, number, number]
      };
    });
  }, []);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Central Wireframe Sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 24, 24]} />
        <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.15} />

        {/* Orbiting Tiny Interactive Icons */}
        {icons.map((icon, idx) => (
          <Html 
            key={idx} 
            position={icon.pos} 
            center 
            transform 
            sprite
          >
            <div className="group flex flex-col items-center gap-1 cursor-pointer select-none">
              {/* Fixed-size bare icon — scale on hover via transform, NOT width change */}
              <img
                src={icon.url}
                alt={icon.name}
                className="w-7 h-7 object-contain opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
              />
              {/* Name — appears below on hover, neutral dark pill matching reference */}
              <span className="text-[8px] font-bold tracking-[0.15em] text-white uppercase bg-[#8B5CF6] px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap leading-tight">
                {icon.name}
              </span>
            </div>
          </Html>
        ))}
      </mesh>
    </group>
  );
}

export default function SkillsSphere() {
  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6 relative z-10 flex flex-col gap-12 items-center">

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-[0.3em] uppercase">Tech Stack</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b388ff] to-[#f472b6]">Skills</span>
        </h2>
      </div>

      {/* 3D Sphere Container */}
      <div className="w-full h-[600px] relative flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/5 dark:bg-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={1} />
          <RotatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

    </section>
  );
}
