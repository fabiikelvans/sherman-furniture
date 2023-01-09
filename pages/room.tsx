import React, {Suspense, useRef} from 'react';
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Chair from "../components/Chair";
import {Canvas} from "@react-three/fiber";
import ChairModel from "../components/Collections/ChairModel";
import RoomModel from "../components/Room/RoomModel";
import {Head} from "../seo/Head/Head";
import Button from "../components/ui/button/Button";
import {useRouter} from "next/router";
import Preloader from "../components/Preloader/Preloader";
import AudioViz from "../components/Audio/AudioViz";

function Room() {
    const router = useRouter();

    // Play Sound on Hover
    const audioRef = useRef(null);
    const playSound = () => {
        audioRef.current.volume = 0.6; // Volume range between 0 - 1 (0 - 100%)
        audioRef.current.play();
    }
return (
    <div>
        <Preloader/>
        <Head title='Sherman Furniture & Design - Room' description='Modern furniture and design store'/>

        <div className='relative section text-center h-[100vh] w-[100%] bg-gray-300'>
            <div className='absolute z-50 top-8 left-8'
                 onMouseEnter={playSound}
            >
                <Button title='Exit Room' onClick={() => router.push('/')}
                />
                <audio src="/audio/wave.wav" ref={audioRef} />
            </div>

            <Suspense fallback={null}>
                <Canvas shadows dpr={1.5}>
                    <RoomModel/>
                </Canvas>
            </Suspense>

            <div className='absolute z-30 bottom-8 right-8'>
                <AudioViz/>
            </div>
        </div>
    </div>
)
}

export default Room;