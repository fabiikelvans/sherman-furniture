import React, {useRef} from 'react';
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Chair from "../Chair";
import {Model} from "./Model";
import {useFrame, useThree} from "@react-three/fiber";
import {angleToRadians} from "../../utils/angle";
import { Perf } from "r3f-perf";
import Lamp from "./Lamp";
import Vase from "./Vase";
import Carpet from "./Carpet";
import {toggleAffinityModal} from "../../redux/features/modalSlice";
import Button from "../ui/button/Button";

function RoomModel() {
    const orbitControlsRef = useRef(null);


    return (
        <>
            {/* Perspective Camera */}
            <PerspectiveCamera makeDefault position={[0, 1, 5]}/>

            <OrbitControls ref={orbitControlsRef} autoRotate={false} enableRotate={true} enableZoom={true}
                // vertical angle of the orbit -------------
                minPolarAngle={angleToRadians(0)}
                maxPolarAngle={angleToRadians(55)}

                // horizontal angle of the orbit -----------
                // minAzimuthAngle={angleToRadians(-180)}
                // maxAzimuthAngle={angleToRadians(180)}

                // Camera Distance ------------
                 minDistance={0.4}
                 maxDistance={5}
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
            <Lamp/>
            <Vase/>
            <Carpet/>
            {/*<Perf/>*/}

        </>
    );
}

export default RoomModel;