"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FloatingMesh() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#38bdf8" wireframe />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1.1} />
        <FloatingMesh />
      </Canvas>
    </div>
  );
}
