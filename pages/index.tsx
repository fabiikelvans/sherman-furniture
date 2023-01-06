import {Head} from "../seo/Head/Head";
import { Nunito, Titan_One } from '@next/font/google'
import Canvas from '../components/Canvas'
import Button from "../components/ui/button/Button";
import Furniture from "../components/Furniture/Furniture";
import MainCanvas from "../components/Canvas/MainCanvas";
import Nav from "../components/Header/Nav/Nav";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Collections from "../components/Collections/Collections";
import Products from "../components/Products/Products";
import Apartment from "../components/Apartment/Apartment";
import Journal from "../components/Journal/Journal";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import {GetServerSideProps} from "next";
import {fetchCategories} from "../utils/fetchCategories";
import {fetchProducts} from "../utils/fetchProducts";
import Preloader from "../components/Preloader/Preloader";
import React, {useEffect, useRef, useState} from "react";
import Modal from "../components/Modal/Modal";
import ButtonMain from "../components/ui/button/Button-Main";
import Cursor from "../components/ui/cursor/Cursor";
import Categories from "../components/Categories/Categories";
import Hover from "../components/Hover/Hover";
import Marquee from "../components/Marquee/Marquee";

const nunito = Nunito({ subsets: ['latin'] });
export const titan = Titan_One({
    subsets: ['latin'],
    weight: '400'
});

interface Props {
    categories: Category[];
    products: Product[];
}


export default function Home({ products, categories } : Props) {

    const ref = useRef(null);
    const [preloader, setPreload] = useState(true);

    useEffect(() => {
        if (!preloader && ref) {
            if (typeof window === "undefined" || !window.document) {
                return;
            }
        }
    }, [preloader]);


    const [timer, setTimer] = React.useState(3);

    const id = React.useRef(null);

    const clear = () => {
        {/*@ts-ignore*/}
        window.clearInterval(id.current);
        setPreload(false);
    };

    React.useEffect(() => {
        {/*@ts-ignore*/}
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    // @ts-ignore
    useEffect(() => {
        if (typeof window === "undefined" || !window.document) {
            return null;
        }
    });

    return (
    <>
        <Head title='Sherman Furniture & Design' description='Modern furniture and design store'/>

        <main>
        <div className='relative' style={nunito.style}>
            {/*------ Homepage Components ------*/}
            <Preloader/>
            <Header/>
            <Features/>
            <Marquee/>
            <Categories categories={categories}  products={products}/>
            <About/>
            <Collections/>
            <Products products={products}/>
            <Apartment/>
            <Journal/>
            <CTA/>
            <Footer/>
        </div>
      </main>
    </>
  )
}
// BACKEND CODE

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const categories = await fetchCategories();
    const products = await fetchProducts();
    // const session = await getSession(context);

    return {
        props: {
            categories,
            products,
            //session,
        },
    }
}