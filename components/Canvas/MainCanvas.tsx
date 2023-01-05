import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import Furniture from "../Furniture/Furniture";

function MainCanvas() {
    return (
        <>
            <div className='h-[100vh] pt-52 md:pt-0'>
            <div className='h-[100vh] pt-12'>
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