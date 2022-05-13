import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import OldMan from './old.gltf';
export default function Old({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(OldMan)
  return (
    <group ref={group} {...props} dispose={null} scale={0.02} position={[1, 0.25, -1]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 33.36, 0.4]} scale={33.33}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['03_-_Default']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(OldMan)
