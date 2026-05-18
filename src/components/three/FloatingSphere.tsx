"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = state.clock.elapsedTime * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3B82F6"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !wireRef.current || !glowRef.current) return;
    const t = state.clock.elapsedTime;

    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = t * 0.08;
    wireRef.current.rotation.y = -t * 0.12;
    wireRef.current.rotation.z = t * 0.06;

    // Mouse follow
    meshRef.current.position.x += (mouse.x * 0.3 - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (mouse.y * 0.3 - meshRef.current.position.y) * 0.05;
    wireRef.current.position.copy(meshRef.current.position);
    glowRef.current.position.copy(meshRef.current.position);

    // Float
    meshRef.current.position.y += Math.sin(t * 0.8) * 0.003;

    // Glow pulse
    const scale = 1 + Math.sin(t * 1.5) * 0.05;
    glowRef.current.scale.setScalar(scale);
  });

  return (
    <group>
      {/* Outer glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Wireframe */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial
          color="#06B6D4"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Core sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 4]} />
        <meshStandardMaterial
          color="#0B1020"
          emissive="#3B82F6"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Inner glow */}
      <pointLight color="#3B82F6" intensity={2} distance={5} />
      <pointLight color="#8B5CF6" intensity={1} distance={4} position={[2, 2, 2]} />
      <pointLight color="#06B6D4" intensity={1} distance={4} position={[-2, -2, 2]} />
    </group>
  );
}

function FloatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.z = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.2;
      ring2.current.rotation.y = t * 0.25;
    }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[1.8, 0.008, 16, 100]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <torusGeometry args={[2.1, 0.005, 16, 100]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export default function FloatingSphere() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <ParticleField />
        <CoreSphere />
        <FloatingRings />
      </Canvas>
    </div>
  );
}
