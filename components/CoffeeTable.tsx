import React from 'react';
import {useGLTF} from "@react-three/drei";

// @ts-ignore
function CoffeeTable(props) {
    const { nodes, materials } = useGLTF('/models/table/scene.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.037}>
                <group position={[-74.28, 10, 70.22]}>
                    {/*@ts-ignore*/}
                    <mesh geometry={nodes.Esme_Coffee_Table_with_2_Drawers_Ash_WHITE_0.geometry} material={materials.WHITE} />
                    {/*@ts-ignore*/}
                    <mesh geometry={nodes.Esme_Coffee_Table_with_2_Drawers_Ash_ASH_0.geometry} material={materials.material} />
                </group>
            </group>
        </group>
    )
}

export default CoffeeTable;