import React, {Suspense, useEffect, useRef, useState} from 'react';
import {modalVaseOpen, toggleVaseModal} from "../../redux/features/modalSlice";
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
    const showModal = useSelector(modalVaseOpen);
    const orbitControlsRef = useRef(null);


    return (
        <>
            {showModal ? (
                <div className='modal fixed top-0 flex right-0 w-[100%] h-[100%] transition-all duration-300 z-50'>
                    <div className="bg-[rgba(19, 19, 19, 0.69)] backdrop-blur-md w-0 md:w-[60%]"
                         onClick={() => dispatch(toggleVaseModal())}
                    ></div>
                    <div className="bg-emerald-800 w-[100%] md:w-[40%] py-[3rem] px-[2rem]  sm:px-[4rem] relative ">

                        <div className="flex justify-between">
                            <div className="text-2xl" style={titan.style}>
                                <h2>Vase</h2>
                            </div>
                            <div className="modal__header-icon cursor-pointer duration-300 hover:text-red-400"
                                 onClick={() => dispatch(toggleVaseModal())}
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
                                    Made from high quality dolomite, the smooth finish of the vase is further accentuated by the elegant dusk blue coating that shows off the gentle contour. Strong and sturdy, the vase is perfect for displaying flowers all year round for a prominent feature in your living space.                                 </p>
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

    const { nodes, materials } = useGLTF<GLTFResult>('/models/vase/scene.glb');

    // Show Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <group {...props} dispose={null} scale={2.6}>
            <group position={[0, -0.56, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <group rotation={[-Math.PI, 0, 0]}>
                    <group rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.35}>
                        <mesh geometry={nodes.Vase_White_0.geometry} material={materials.White} >
                        </mesh>
                        <mesh geometry={nodes.Vase_Gold_0.geometry} material={materials.Gold} />
                        <mesh geometry={nodes.Vase_Gold_0_1.geometry} material={materials.Gold} />
                    </group>
                </group>
            </group>
        </group>
    )
}