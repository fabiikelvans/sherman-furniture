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

function Room() {
    const router = useRouter();
return (
    <div>
        <Preloader/>
        <Head title='Sherman Furniture & Design - Room' description='Modern furniture and design store'/>

        <div className='relative section text-center h-[100vh] w-[100%] bg-gray-300'>
            <div className='absolute z-50 top-8 left-8'>
                <Button title='Exit Room' onClick={() => router.push('/')}
                />
            </div>
            <Suspense fallback={null}>
                <Canvas shadows dpr={1.5}>
                    <RoomModel/>
                </Canvas>
            </Suspense>
        </div>
    </div>
)
}

export default Room;