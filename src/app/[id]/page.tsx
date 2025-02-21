import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";
import Example from "@public/logo/example.jpg";
import {Button} from "@components/button";
import ProductImagesCarousel from "@/components/ProductImagesCarousel";
import {supabase} from "@/lib/supabase";

interface ProductProps {
    params: Promise<{ id: string }>
}

export default async function Product({ params }: ProductProps) {
    const id = (await params).id

    const { data: product } = await supabase
        .from('products')
        .select("*")
        .eq('id', id)
        .single();

    const { data: products } = await supabase.from("products").select();

    const ProductImagesResponse = [
        {
            key: '1',
            name: 'name',
            src: Example.src,
        },
        {
            key: '2',
            name: 'name',
            src: Example.src,
        },
        {
            key: '3',
            name: 'name',
            src: Example.src,
        },
        {
            key: '4',
            name: 'name',
            src: Example.src,
        },
        {
            key: '5',
            name: 'name',
            src: Example.src,
        },
    ];

    return (
        <main className='space-y-14 divide-y divide-secondary-100/50 [&>section]:sm:pt-14 [&>section]:pt-4'>
            <div className='flex justify-center mt-4 sm:my-6 px-4'>
                <div className='w-full flex max-sm:flex-col max-w-[1200px]'>
                    <ProductImagesCarousel images={ProductImagesResponse} />
                    <aside className='w-full flex flex-col gap-6 justify-between max-sm:items-center sm:p-4'>
                        <div className='w-full flex flex-col max-sm:items-center divide-y divide-secondary-100/50 [&>h6]:pt-6'>
                            <h3 className='max-sm:text-[30px]'>{product.name}</h3>
                            <h6 className='text-secondary-400 font-normal max-sm:text-center'>
                                {product.description}
                            </h6>
                        </div>
                        <Button size='lg' className='w-fit font-semibold'>Consultar</Button>
                    </aside>
                </div>
            </div>
            <ProductsCarousel products={products || []} />
        </main>
    );
}
