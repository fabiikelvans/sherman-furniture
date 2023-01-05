import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import {angleToRadians} from "../../utils/angle";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Vase from "../Room/Vase";
import Chair from "../Chair";
import Sofa from "../Sofa";
import CoffeeTable from "../CoffeeTable";

function SofaModel() {

    const orbitControlsRef = useRef(null);

    return (
        <>
            {/* Perspective Camera */}
            <PerspectiveCamera makeDefault position={[0, 2, 5]}/>

            <OrbitControls ref={orbitControlsRef} autoRotate={true} enableRotate={true} enableZoom={false}
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

            <Sofa/>

        </>
    );
}

export default SofaModel;