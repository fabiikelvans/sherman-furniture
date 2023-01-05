import React, { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

function Hover() {

    // const [showImg, setShowImg] = useState(false);
    // const { x, y } = useMousePosition();
    // let imageAnimation = x;
    // if (showImg) imageAnimation = <div
    //     className='absolute h-[120px] w-[170px] left-[85px] top-[60px]
    //     bg-[url("https://images.unsplash.com/photo-1617104235043-44d7e019e442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60")]
    //     bg-cover bg-center z-10 transition-all duration-300
    //     '
    //     x={x} y={y}
    //     ></div>;
    //
    // else imageAnimation = "";
    //
    // const onMouseMove = (e) => {
    //     let rect = e.currentTarget.getBoundingClientRect();
    //     let x = e.clientX - rect.left;
    //     let y = e.clientY - rect.top;
    //
    //     console.log(x, y);
    // };

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [showImg, setShowImg] = useState(false);
    let imageAnimation = '';
     if (showImg) imageAnimation = <img
         src='https://images.unsplash.com/photo-1617104235043-44d7e019e442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80'
         alt={'hello'}
         style={{
             position: 'absolute',
             height: '200px',
             left: `${x}px`,
             top: y
         }}
     />
     else imageAnimation = "";



    useEffect(() => {
        const handleMouseMove = (event) => {
            setX(event.clientX);
            setY(event.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div>
            <div className='relative spacing flex justify-center items-center'>
                <div className='flex flex-row gap-x-4 justify-between z-40'>


                      <div>
                          {imageAnimation}
                          <h1 className='text-2xl hover:text-orange-500'
                              onMouseEnter={() => setShowImg(true)}
                              onMouseLeave={() => setShowImg(false)}
                          >
                              Products
                          </h1>
                      </div>
                    <h1 className='text-2xl hover:text-orange-500'
                        onMouseEnter={() => setShowImg(true)}
                        onMouseLeave={() => setShowImg(false)}
                    >
                        Gallery
                    </h1>

                    <h1 className='text-2xl hover:text-orange-500'
                        onMouseEnter={() => setShowImg(true)}
                        onMouseLeave={() => setShowImg(false)}
                    >
                        About
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Hover;