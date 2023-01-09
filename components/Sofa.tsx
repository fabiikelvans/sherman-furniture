import React from 'react';
import {useGLTF} from "@react-three/drei";

// @ts-ignore
function Sofa(props) {
    const { nodes, materials } = useGLTF('/models/sofa/scene.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 2]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.018} position={[0, 0, 0]}>{/*@ts-ignore*/}
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />{/*@ts-ignore*/}
                    <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />{/*@ts-ignore*/}
                    <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />{/*@ts-ignore*/}
                    <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                </group>
            </group>
        </group>
    )
}

export default Sofa;