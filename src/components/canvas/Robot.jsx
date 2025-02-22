import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Robot = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/robot/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Prowler_Rig Bipe"]) {
      actions["Prowler_Rig Bipe"].play();
      actions["Prowler_Rig Bipe"].setLoop(THREE.LoopRepeat, Infinity);
    }
  }, [actions]);

  useFrame((state) => {
    if (group.current) {
      group.current.position.x += 0.04;
      if (group.current.position.x > 40) {
        group.current.position.x = -40;
      }
      group.current.position.y =
        Math.sin(state.clock.elapsedTime * 2) * 0.05 - 2.5;
    }
  });

  return (
    <primitive ref={group} object={scene} scale={4} rotation-y={Math.PI / 2} />
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 35], fov: 55 }}
      className="w-full h-full absolute top-0 left-0"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <Robot />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
