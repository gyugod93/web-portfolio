import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const meshRef = useRef();
  const [decal] = useTexture([imgUrl]);

  // 매 프레임마다 실행되는 대신 필요할 때만 회전
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  // 컴포넌트 언마운트 시 리소스 정리
  useEffect(() => {
    return () => {
      if (decal) {
        decal.dispose();
      }
    };
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
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
  const canvasRef = useRef();

  // 명시적인 WebGL 컨텍스트 정리
  useEffect(() => {
    return () => {
      if (canvasRef.current) {
        try {
          // Three.js 렌더러에 접근 시도
          const renderer = canvasRef.current.__r3f?.gl;
          if (renderer) {
            // 렌더러 및 관련 리소스 정리
            renderer.forceContextLoss();
            renderer.dispose();

            // WebGL 컨텍스트 명시적 정리 시도
            const gl = renderer.getContext();
            if (gl) {
              const ext = gl.getExtension("WEBGL_lose_context");
              if (ext) ext.loseContext();
            }
          }
        } catch (e) {
          console.error("WebGL 정리 오류:", e);
        }
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        ref={canvasRef}
        frameloop="demand"
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: "low-power",
          antialias: false,
          alpha: false,
          depth: true,
          stencil: false,
        }}
        dpr={[1, 1.5]} // 렌더링 해상도 제한
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Ball imgUrl={icon} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BallCanvas;
