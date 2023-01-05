import React from 'react';
import {useGLTF} from "@react-three/drei";

function Chair(props) {
    const { nodes, materials } = useGLTF('/models/chair/scene.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} scale={0.03}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Object_6.geometry} material={materials.Base} position={[0, 40.99, 0]} scale={43.31} />
                </group>
            </group>
        </group>
    )
}

export default Chair;