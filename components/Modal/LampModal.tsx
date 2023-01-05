import React, {Suspense, useEffect, useRef, useState} from 'react';
import {modalLampOpen, toggleLampModal} from "../../redux/features/modalSlice";
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
    const showModal = useSelector(modalLampOpen);
    const orbitControlsRef = useRef(null);


    return (
        <>
            {showModal ? (
                <div className='modal fixed top-0 flex right-0 w-[100%] h-[100%] transition-all duration-300 z-50'>
                    <div className="bg-[rgba(19, 19, 19, 0.69)] backdrop-blur-md w-0 md:w-[60%]"
                         onClick={() => dispatch(toggleLampModal())}
                    ></div>
                    <div className="bg-emerald-800 w-[100%] md:w-[40%] py-[3rem] px-[2rem]  sm:px-[4rem] relative ">

                        <div className="flex justify-between">
                            <div className="text-2xl" style={titan.style}>
                                <h2>Table Lamp</h2>
                            </div>
                            <div className="modal__header-icon cursor-pointer duration-300 hover:text-red-400"
                                 onClick={() => dispatch(toggleLampModal())}
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
                                    This table lamp is a stunning addition to any room: the bedroom, entryway, living room, dorm room, or home office; Place on a console table, bookshelf, nightstand, desk, or accent table; Use in pairs for a stylish symmetrical look.
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

    const { nodes, materials } = useGLTF<GLTFResult>('/models/lamp/scene.glb');

    // Show Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <group {...props} dispose={null} scale={0.075} position={[0,-1.5,0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.material_0} position={[-13.73, -13.73, -0.65]} >
                </mesh>
            </group>
        </group>
    )
}