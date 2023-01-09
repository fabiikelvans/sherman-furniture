import React, {useRef, useState} from 'react';
import {Html, useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import {titan} from "../../pages";
import {useDispatch} from "react-redux";
import {toggleCarpetModal, toggleVaseModal} from "../../redux/features/modalSlice";

type GLTFResult = GLTF & {
    nodes: { robot: THREE.Mesh; rocket: THREE.Mesh }
    materials: { metal: THREE.MeshStandardMaterial; wood: THREE.MeshStandardMaterial }
}

function Carpet(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF<GLTFResult>('/models/carpet/scene.glb');

    // Show Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // Play Sound on Hover
    const audioRef = useRef(null);
    const playSound = () => {
        audioRef.current.volume = 0.6; // Volume range between 0 - 1 (0 - 100%)
        audioRef.current.play();
    }

    return (
        <group {...props} dispose={null} position={[0, -1.41, -0.2]} scale={1.06}>
            <group position={[-2.02, 0, 0]}>
                <mesh geometry={nodes.Object_6.geometry} material={materials['VELVET-GREEN__Budapest']} >

                </mesh>
                <mesh geometry={nodes.Object_7.geometry} material={materials['VELVET-GREEN__Budapest']} />
                <mesh geometry={nodes.Object_8.geometry} material={materials['VELVET-GREEN__Budapest']} >
                    <Html scale={0.5} rotation={[-Math.PI / 2, -0.05, 0.08]} position={[0.3, 0, 0]} zIndexRange={[20, 0]} >
                        <div className="flex flex-col items-center justify-center">
                            <h1 className='text-emerald-600' style={titan.style}>Carpet</h1>
                            <span
                                onClick={() => dispatch(toggleCarpetModal())} onMouseEnter={playSound}
                                className="pulse-wrapper cursor-pointer duration-300 transition-all hover:bg-gray-800 hover:h-6 hover:w-6">
                                <span className="badge-pulse hover:h-6 hover:w-6 animate-ping">
                                    <audio src="/audio/wave.wav" ref={audioRef} />
                                </span></span>
                        </div>
                    </Html>
                </mesh>
            </group>
            <mesh geometry={nodes.Object_4.geometry} material={materials.carpet} />
        </group>
    )
}
export default Carpet;