import React, {useCallback, useRef} from 'react';
import Product from "./Product";
import 'swiper/css';

// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";
SwiperCore.use([Pagination]);


interface Props {
    products: Product[];
}
function Products({ products }: Props) {

    // SLIDER SETTINGS
    const sliderRef = useRef<SwiperCore>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);


    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.line', {
                scrollTrigger: {
                    trigger: '.line',
                    start: "top bottom",
                    end: "bottom 400px",
                    scrub: 1,
                },
                duration: 1.8,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: 0.1,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );

    return (
        <div className='relative '>
            <div className="absolute top-[40%] w-full flex justify-between z-40 px-6 ">
                    <BsArrowLeftCircle onClick={handlePrev} className='h-8 w-8 cursor-pointer duration-200 hover:text-orange-600'/>

                    <BsArrowRightCircle  onClick={handleNext} className='h-8 w-8 cursor-pointer duration-200 hover:text-orange-600'/>
            </div>

        <div ref={scrollRef} className='spacing text-center'>{/*@ts-ignore*/}
            <Swiper ref={sliderRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    navigation={false}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                    className='flex'
            >
                {
                    products.map((product: Product) => (
                        <SwiperSlide key={product._id} className='line'>
                            <Product
                                product={product}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
        </div>
    );
}

export default Products;