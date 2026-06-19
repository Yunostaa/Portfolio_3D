import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Génère un nombre entre 0 et 1 de façon déterministe depuis une chaîne + seed
const seededValue = (str, seed) => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return (Math.abs(hash) % 1000) / 1000;
};

const Ball = ({ imgUrl, speedX, speedY, phaseX, phaseY }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      // Oscillation sinusoïdale — le logo reste toujours visible
      meshRef.current.rotation.y = 0.3 * Math.sin(t * speedY + phaseY);
      meshRef.current.rotation.x = 0.2 * Math.sin(t * speedX + phaseX);
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={0} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const speedX = 0.1 + seededValue(icon, 1) * 0.15;
  const speedY = 0.1 + seededValue(icon, 2) * 0.2;
  const phaseX = seededValue(icon, 3) * Math.PI * 2;
  const phaseY = seededValue(icon, 4) * Math.PI * 2;

  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} speedX={speedX} speedY={speedY} phaseX={phaseX} phaseY={phaseY} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
