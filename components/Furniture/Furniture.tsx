import { useGLTF } from '@react-three/drei'
import {Canvas} from "@react-three/fiber";

import { Environment, OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, {Suspense, useRef } from 'react';
import * as THREE from 'three';
import {gsap} from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import {angleToRadians} from "../../utils/angle";
import Vase from "../Room/Vase";
import Chair from "../Chair";
import Sofa from "../Sofa";
import CoffeeTable from "../CoffeeTable";

function Model(props) {
    const { nodes, materials } = useGLTF('/models/generic/scene.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.38} position={[0, -0.72, 0 ]}>
                <mesh geometry={nodes['Chair-2_Fabric_0'].geometry} material={materials.Fabric} />
                <mesh geometry={nodes['Chair-2_Plastic_0'].geometry} material={materials.Plastic} />
                <mesh geometry={nodes['Chair-2_Wood_0'].geometry} material={materials.Wood} />
            </group>
        </group>
    )
}

// useGLTF.preload('/scene.glb')



function Furniture(props) {

    const orbitControlsRef = useRef(null);

    useFrame((state) => {
        if(!!orbitControlsRef.current){
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(5));
            orbitControlsRef.current.setPolarAngle((y + 5.5) * angleToRadians(5));
            orbitControlsRef.current.update();
        }
    });

    const t1 = gsap.timeline();

    let ballRef = useRef(null);

    // useIsomorphicLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         t1.to(ballRef.current.position, {
    //             duration: 2,
    //             x: 1,
    //             ease: "power2.out",
    //
    //         })
    //             .from(ballRef.current.position, {
    //                 y: 2,
    //                 duration: 2,
    //                 ease: "bounce.out",
    //             },">");
    //     }, ballRef); // <- scopes all selector text to the root element
    //
    //     return () => ctx.revert();
    // }, );


    return (
        <>

            {/* Perspective Camera */}
            <PerspectiveCamera makeDefault position={[0, 2, 5]}/>

            <OrbitControls ref={orbitControlsRef} autoRotate enableZoom={false}
                // minPolarAngle={angleToRadians(60)}
                // maxPolarAngle={angleToRadians(80)}
            />

            {/* Ambient Light */}
            <ambientLight intensity={0.4} />
            <directionalLight
                castShadow
                position={[2.5, 8, 5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} color={'#fff'} intensity={2.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />

            <Model castShadow/>

        </>
    );
}

export default Furniture;
