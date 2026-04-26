"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Preload } from "@react-three/drei";
import type { Group, Mesh } from "three";

/**
 * Globo wireframe minimalista, estilo Apple-cristal.
 * Reemplaza el modelo glTF del planeta (roto + look templated).
 *
 * - Esfera con líneas finas grises (wireframe)
 * - Otra esfera interior sólida muy oscura para profundidad
 * - Anillos orbitando lentamente alrededor para sensación de "conexión"
 * - Float + auto-rotation suave
 */
function WireGlobe() {
  const group = useRef<Group>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x += delta * 0.04;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.6;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.45;
  });

  return (
    <group ref={group}>
      {/* Núcleo sólido oscuro */}
      <mesh>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          color="#0a0a0d"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* Wireframe exterior (silver) */}
      <mesh>
        <sphereGeometry args={[1.02, 32, 32]} />
        <meshBasicMaterial
          color="#c5cad4"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Latitud / longitud destacados */}
      <mesh>
        <sphereGeometry args={[1.04, 12, 8]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Anillos orbitales */}
      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.6, 0.005, 12, 128]} />
        <meshBasicMaterial color="#c5cad4" transparent opacity={0.6} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.8, Math.PI / 5, 0]}>
        <torusGeometry args={[1.85, 0.004, 12, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function EarthCanvas() {
  const camera = useMemo(
    () => ({ fov: 45, near: 0.1, far: 200, position: [0, 0, 5] as const }),
    [],
  );

  return (
    <Canvas
      shadows={false}
      frameloop="always"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={camera}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-4, -3, -2]} intensity={0.6} color="#c5cad4" />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <WireGlobe />
        </Float>
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
