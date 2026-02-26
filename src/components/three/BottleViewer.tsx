"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { HERO_MODEL_PATH } from "@/lib/constants";
import type { Group } from "three";

interface BottleViewerProps {
  reducedMotion: boolean;
}

function BottleModel({ reducedMotion }: { reducedMotion: boolean }) {
  const { scene } = useGLTF(HERO_MODEL_PATH);
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

useGLTF.preload(HERO_MODEL_PATH);

export default function BottleViewer({ reducedMotion }: BottleViewerProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <spotLight
        position={[-3, 5, 3]}
        intensity={1.5}
        angle={0.4}
        penumbra={0.8}
        castShadow
      />
      <directionalLight position={[3, 2, 1]} intensity={0.5} />
      <pointLight position={[0, 3, -2]} intensity={0.8} color="#C8A87C" />

      <Suspense fallback={null}>
        <BottleModel reducedMotion={reducedMotion} />
        <Environment preset="studio" />
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={5}
          blur={2.5}
          far={4}
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={1.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
