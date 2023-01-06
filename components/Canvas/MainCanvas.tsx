import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import Furniture from "../Furniture/Furniture";

function MainCanvas() {
    return (
        <>
            <div className='h-full pt-52 md:pt-8'>
            <div className='h-[100vh] w-[40vw]'>
            <Suspense fallback={null}>
                <Canvas shadows dpr={1.5}>
                    <Furniture/>
                </Canvas>
            </Suspense>
            </div>
            </div>
                </>
    );
}

export default MainCanvas;