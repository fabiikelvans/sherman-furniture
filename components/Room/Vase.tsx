import React, {useRef, useState} from 'react'
import {Html, useGLTF} from '@react-three/drei'
import {titan} from "../../pages";
import {toggleLampModal, toggleVaseModal} from "../../redux/features/modalSlice";
import {useDispatch} from "react-redux";

function Vase(props : any) {
    const { nodes, materials } = useGLTF('/models/vase/scene.glb');

    // Show Modal
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // Play Sound on Hover
    const audioRef = useRef(null);
    const playSound = () => {
        {/*@ts-ignore*/}
        audioRef.current.volume = 0.6; // Volume range between 0 - 1 (0 - 100%)
        {/*@ts-ignore*/}
        audioRef.current.play();
    }

    return (
        <group {...props} dispose={null}>
            <group position={[-2, -1.42, -3]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <group rotation={[-Math.PI, 0, 0]}>
                    <group rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.35}>{/*@ts-ignore*/}
                        <mesh geometry={nodes.Vase_White_0.geometry} material={materials.White} >
                            <Html style={{zIndex : -1}} scale={0.5} rotation={[-Math.PI / 2, 0, 0]} position={[0, 2.5, 0]}  center zIndexRange={[20, 0]} >
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className='text-emerald-600' style={titan.style}>Vase</h1>
                                    <span onClick={() => dispatch(toggleVaseModal())} onMouseEnter={playSound}
                                        className="pulse-wrapper cursor-pointer duration-300 transition-all hover:bg-gray-800 hover:h-6 hover:w-6"><span className="badge-pulse hover:h-6 hover:w-6 animate-ping">
                                        <audio src="/audio/wave.wav" ref={audioRef} />
                                    </span></span>
                                </div>
                            </Html>
                        </mesh>{/*@ts-ignore*/}
                        <mesh geometry={nodes.Vase_Gold_0.geometry} material={materials.Gold} />{/*@ts-ignore*/}
                        <mesh geometry={nodes.Vase_Gold_0_1.geometry} material={materials.Gold} />
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Vase;