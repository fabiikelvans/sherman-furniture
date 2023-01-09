import React, {useEffect, useRef} from 'react';
import Nav from "../../components/Header/Nav/Nav";
import {sanityClient, urlFor} from "../../sanity";
import {GetStaticPaths, GetStaticProps} from "next";
import CTA from "../../components/CTA/CTA";
import {Head} from "../../seo/Head/Head";
import Footer from "../../components/Footer/Footer";
import {titan} from "../index";
import {fetchProducts} from "../../utils/fetchProducts";
import Product from "../../components/Products/Product";


interface Props {
    category: Category;
    products: Product[];
}

function FurniturePage({ products, category } : Props ) {


    return(
    <div>

        <Head title={`Sherman Furniture - ${category.title}`} description={category.title}/>

        <div>
            <div className='relative h-[100vh] '>
                <Nav/>
                <div className="absolute -z-10 top-0 left-0 header h-full w-full bg-center bg-[url('https://images.unsplash.com/photo-1616486598018-68d1c5683413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')]">
                    <div className="bg-black bg-opacity-60 w-full h-full absolute spacing flex justify-center items-center">
                        <div className="flex flex-col text-center">
                            <h4 className='font-light italic text-lg my-4 tracking-wider'>Category</h4>
                            <h1 className='text-6xl text-white z-50 font-bold' style={titan.style}>{category.title}</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className=''>
                <div className="products spacing grid grid-rows-1 gap-x-8 gap-y-12 grid-flow-row md:grid-flow-col">
                {category.products.map((product : Product) => (
                    <Product product={product} key={product._id}/>
                    ))}
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
    *[_type == 'category']{
        _id,
        slug{
            current
        }
    }`;


    const categories = await sanityClient.fetch(query);

    const paths = categories.map((category : Category) => ({
        params: {
            slug: category.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}


export const getStaticProps: GetStaticProps = async({params}) => {

    const query = `*[_type == 'category'  && slug.current == $slug][0]{
_id,
  ...,
    "products": *[_type == 'product' && references(^._id)]
}`
    ;

    const products = await fetchProducts();



    const category = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if(!category){
        return {
            notFound: true
        }
    }
    return {
        props: {
            category,
            products,
            revalidate: 2, // update cache after 2 sec
        }
    }
}

export default FurniturePage