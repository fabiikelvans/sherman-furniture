import React, {useEffect, useRef} from 'react';
import Nav from "../../components/Header/Nav/Nav";
import {sanityClient, urlFor} from "../../sanity";
import {GetStaticPaths, GetStaticProps} from "next";
import {CiShoppingCart} from "react-icons/ci";
import {useDispatch} from "react-redux";
import {toggleAffinityModal} from "../../redux/features/modalSlice";
import {addToBasket} from "../../redux/features/basketSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import {BsStars} from "react-icons/bs";
import CTA from "../../components/CTA/CTA";
import {Head} from "../../seo/Head/Head";
import {Expo, gsap} from "gsap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import {PortableText} from '@portabletext/react'
import {titan} from "../index";
import {MdVerifiedUser} from "react-icons/md";
import Button from "../../components/ui/button/Button";
import Modal from "../../components/Modal/Modal";
import {useIsomorphicLayoutEffect} from "usehooks-ts";


interface Props {
    product: Product;
}

function PageTransition({product} : Props) {

    let mainRef = useRef(null);

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"

    let svg = useRef(null);

    const t1 = gsap.timeline();

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.loader-wrap-heading h1', {
                duration: 1,
                y: 200,
                ease: "power4.out",
                delay: 1,
                opacity: 0,
                skewY: 10,
                stagger: {
                    amount: 0.4,
                }
            })
                .to('.loader-wrap-heading h1', {
                    delay: 1.5,
                    y: -200,
                    skewY: 10,
                })
                .to('#svg', {
                duration: 0.8,
                attr: { d: curve },
                ease: "power2.easeIn",
            })
                .to('#svg', {
                    duration: 0.8,
                    attr: { d: flat },
                    ease: "power2.easeOut",
                });
            t1.to('.loader-wrap', {
                y: -1500,
            })
            t1.to('.loader-wrap', {
                zIndex: -1,
                display: "none"
            })
                .to('.preloader', {
                    x: "-200%",
                    duration: 2,
                })
            .from('.container h1', {
                    y: 100,
                    opacity: 0,
                }, '-=1.5')


        }, mainRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, [])

    return (
        <div ref={mainRef}>
            <div  className='preloader text-white fixed top-0 left-0 w-full h-full flex items-center justify-center z-[99] ' >
                <div className="loader-wrap absolute h-[100vh] w-full bg-transparent relative">
                    <svg viewBox='0 0 1000 1000' preserveAspectRatio='none' fill={'#064E3B'} className='absolute w-[100vw] h-[110vh]'>
                        <path id='svg' d='M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z'> </path>
                    </svg>
                    <div className="loader-wrap-heading absolute left-[40%] top-[20%]">
                        <h1 className='text-4xl' style={titan.style}>{product.title}</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Product({product} : Props ) {

    const dispatch = useDispatch();

    // Toggle Modal
    const toggleBasketModal = () => {
        dispatch(toggleAffinityModal())
    }

    // Add Item to Basket
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }

    return(
    <div>
        <Head title={`Sherman Furniture - ${product.title}`} description={product.title}/>

        <div>
            <Nav/>
            <PageTransition product={product} />

            <div className='spacing relative '>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="product-page-image w-[100%] md:w-[50%]">
                        <div className="relative">
                            <Image
                                className='image'
                                src={urlFor(product.image[0]).url()}
                                alt={product.title}
                                width={500}
                                height={600}
                            />
                        </div>
                    </div>

                    <div className="product-page-description w-[100%] md:w-[50%]">
                        <div className="star-1">
                            <MdVerifiedUser className='h-8 w-8 text-red-500 '/>
                        </div>
                        <h1 className='container text-4xl font-bold my-6' style={titan.style}>{product.title}</h1>

                        <div className='text-sm font-light leading-7'>
                            <PortableText
                                value={product.description}
                            />
                        </div>


                        <div className='my-12 py-6 px-[10%] rounded-xl bg-[#243026] flex items-center justify-between'>
                            <div onClick={
                                (ev) => {
                                    ev.stopPropagation();
                                    toggleBasketModal();
                                    addItemToBasket();
                                }}
                            >
                                <Button
                                    title='Add to Cart'
                                    icon={<CiShoppingCart className='h-6 w-6'/>} />
                            </div>
                            <h1>|</h1>
                            <h4 className='text-lg' style={titan.style}>${product.price}</h4>
                        </div>
                    </div>
                </div>

            </div>

            <CTA/>
            <Footer/>
        </div>

    </div>
)
;
}


export const getStaticPaths : GetStaticPaths = async() => {
    const query = `
    *[_type == 'product'] {
        _id,
        slug{
            current
        }
    }`;

    const products = await sanityClient.fetch(query);

    const paths = products.map((product : Product) => ({
        params: {
            slug: product.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}


export const getStaticProps: GetStaticProps = async({params}) => {

    const query = `  *[_type == "product" && slug.current == $slug][0] { 
        _id,
  ...
    }`
    ;


    const product = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if(!product){
        return {
            notFound: true
        }
    }
    return {
        props: {
            product,
            revalidate: 2, // update cache after 2 sec
        }
    }
}

export default Product