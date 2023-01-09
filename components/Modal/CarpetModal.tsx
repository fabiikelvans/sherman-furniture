import React, {Suspense, useEffect, useRef, useState} from 'react';
import {modalCarpetOpen, toggleCarpetModal} from "../../redux/features/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {XIcon} from "@heroicons/react/solid";
import {titan} from "../../pages";
import {Canvas} from "@react-three/fiber";
import {Html, OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import {TbArrowFork, TbRotate360} from "react-icons/tb";


type GLTFResult = GLTF & {
    nodes: { robot: THREE.Mesh; rocket: THREE.Mesh }
    materials: { metal: THREE.MeshStandardMaterial; wood: THREE.MeshStandardMaterial }
}


function LampModal() {

    const dispatch = useDispatch();

    // Show Cart Modal
    const showModal = useSelector(modalCarpetOpen);
    const orbitControlsRef = useRef(null);


    return (
        <>
            {showModal ? (
                <div className='modal fixed top-0 flex right-0 w-[100%] h-[100%] transition-all duration-300 z-50'>
                    <div className="bg-[rgba(19, 19, 19, 0.69)] backdrop-blur-md w-0 md:w-[60%]"
                         onClick={() => dispatch(toggleCarpetModal())}
                    ></div>
                    <div className="bg-emerald-800 w-[100%] md:w-[40%] py-[3rem] px-[2rem]  sm:px-[4rem] relative ">

                        <div className="flex justify-between">
                            <div className="text-2xl" style={titan.style}>
                                <h2>Carpet</h2>
                            </div>
                            <div className="modal__header-icon cursor-pointer duration-300 hover:text-red-400"
                                 onClick={() => dispatch(toggleCarpetModal())}
                            >
                                <XIcon className='h-6 w-6'/>
                            </div>

                        </div>


                        <div className="modal__body relative">
                            <TbRotate360 className='absolute text-orange-400 top-[62%] left-[47%] h-8 w-8'/>

                            <div className='w-full h-[300px]'>
                                <Suspense fallback={null}>
                                    <Canvas shadows dpr={1.5}>
                                        {/* Perspective Camera */}
                                        <PerspectiveCamera makeDefault position={[0, 1, 5]}/>

                                        <OrbitControls ref={orbitControlsRef} autoRotate={false} enableRotate={true} enableZoom={false}

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

                                        <Model/>
                                    </Canvas>
                                </Suspense>
                            </div>
                            <div>
                                <p className='font-light'>
                                    This carpet is knotted in workshops in the city of Nain in central Persia, near Isfahan.
                                    The carpet is generally very light with a cream-coloured or deep-blue bottom colour and a
                                    large medallion in the center. High knot density and high-class material gives carpets of high quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>

    );
}

export default LampModal;


function Model(props: JSX.IntrinsicElements['group']) {

    const { nodes, materials } = useGLTF('/models/carpet/scene.glb');

    // Show Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <group {...props} dispose={null} position={[0, -0.21, -0.2]} scale={0.8} rotation={[1,0,1]}>
            <group position={[-2.02, 0, 0]} >{/*@ts-ignore*/}
                <mesh geometry={nodes.Object_6.geometry} material={materials['VELVET-GREEN__Budapest']} >

                </mesh>{/*@ts-ignore*/}
                <mesh geometry={nodes.Object_7.geometry} material={materials['VELVET-GREEN__Budapest']} />{/*@ts-ignore*/}
                <mesh geometry={nodes.Object_8.geometry} material={materials['VELVET-GREEN__Budapest']} >
                </mesh>
            </group>{/*@ts-ignore*/}
            <mesh geometry={nodes.Object_4.geometry} material={materials.carpet} />
        </group>
    )
}