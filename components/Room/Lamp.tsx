import React, {useRef, useState} from 'react';
import {Html, useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import {titan} from "../../pages";

// Redux Modal
import {useDispatch, useSelector} from "react-redux";
import {toggleLampModal} from "../../redux/features/modalSlice";

type GLTFResult = GLTF & {
    nodes: { robot: THREE.Mesh; rocket: THREE.Mesh }
    materials: { metal: THREE.MeshStandardMaterial; wood: THREE.MeshStandardMaterial }
}

function Lamp(props: JSX.IntrinsicElements['group']) {

    const { nodes, materials } = useGLTF('/models/lamp/scene.glb');

    // Show Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // Play Sound on Hover
    const audioRef = useRef(null);
    const playSound = () => {{/*@ts-ignore*/}
        audioRef.current.volume = 0.6; // Volume range between 0 - 1 (0 - 100%)
        {/*@ts-ignore*/}
        audioRef.current.play();
    }

    return (
        <group {...props} dispose={null} scale={0.018} position={[0.82, -0.70, -0.45]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                {/*@ts-ignore*/}
                <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.material_0} position={[-13.73, -13.73, -0.65]} >
                    <Html style={{zIndex : -1}} scale={0.5} rotation={[-Math.PI / 2, 0, 0]} position={[10, 20, 40]}  center zIndexRange={[20, 0]}  >
                        <div className="flex flex-col items-center justify-center" >
                            <h1 className='text-emerald-600' style={titan.style}>Lamp</h1>
                            <span onClick={() => dispatch(toggleLampModal())} onMouseEnter={playSound}
                                className="pulse-wrapper cursor-pointer duration-300 transition-all hover:bg-emerald-600 hover:h-6 hover:w-6">
                                <span className="badge-pulse hover:h-6 hover:w-6 animate-ping">
                                    <audio src="/audio/wave.wav" ref={audioRef} />
                            </span></span>
                        </div>
                    </Html>
                </mesh>
            </group>
        </group>
    )
}
export default Lamp;