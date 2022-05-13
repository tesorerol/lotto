import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Scene from './scene.gltf';
import { useFrame } from '@react-three/fiber';
export default function Model(props) {
  const { Orbit } = props;
  const group = useRef()
  const { nodes, materials } = useGLTF(Scene)
  // useFrame(() => {
  //   console.log(Orbit)
  // }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.24}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_2.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.model_Material_u1_v1} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.model_Material_u1_v1} />
      </group>
    </group>
  )
}

useGLTF.preload(Scene)
