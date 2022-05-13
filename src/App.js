import * as THREE from 'three'
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Scene from './Scene';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Old from './Old';
import machine from './makina.png';
function Image() {
  const texture = useLoader(THREE.TextureLoader, machine)
  return (
    <mesh position={[-0.5, 1.2, 0.8]} scale={0.15} rotation={[0,2,0]}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

function App() {
  const Orbit = useRef();

  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.2} />
      <PerspectiveCamera position={[2.129010169548002, 1.8735773854660611, 0.21298380918290682]} makeDefault />
      <OrbitControls ref={Orbit} />
      <Suspense>
        <Scene Orbit={Orbit} />
        <Old />
        <Image />
      </Suspense>
    </Canvas>
  );
}

export default App;
