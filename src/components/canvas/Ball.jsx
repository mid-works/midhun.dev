import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow position={position} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" flatShading />
        <meshStandardMaterial polygonOffset polygonOffsetFactor={-5} />
        <meshStandardMaterial flatShading />
        <meshStandardMaterial />
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
          <meshStandardMaterial />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
        <mesh>
          <meshStandardMaterial color="#fff8eb" />
        </mesh>
      </mesh>
    </Float>
  );
};

const BallsCanvas = ({ technologies }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 15], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={false} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 0, 5]} />

        {technologies.map((tech, index) => {
          // Arrange balls in a grid
          const x = (index % 5) * 3 - 6; // 5 per row
          const y = -Math.floor(index / 5) * 3 + 3;
          return <Ball key={tech.name} imgUrl={tech.icon} position={[x, y, 0]} />;
        })}

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallsCanvas;
