import React from 'react';
import Product from "../Products/Product";
import Link from "next/link";
import Category from "./Category";
import {useRouter} from "next/router";
import {urlFor} from "../../sanity";


interface Props {
    categories: Category[];
    products: Product[];
}


function Categories({ categories, products } : Props) {

    const router = useRouter();

    return (
        <div className='spacing'>
            <div className='flex justify-between flex-col md:flex-row items-center gap-8'>
                {
                    categories.map((category: Category) => (
                        <Category
                            key={category._id}
                            name={category.title}
                            link={() => router.push(`/furniture/${category.slug.current}`)}
                            image={urlFor(category.image[0]).url()}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Categories;