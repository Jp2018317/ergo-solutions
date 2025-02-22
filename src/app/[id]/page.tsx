import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";
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
        .select(`*,main_category(*),sub_category(*)`)
        .eq('id', id)
        .single();

    const { data: products } = await supabase.from("products").select();

    return (
        <main className='space-y-14 divide-y divide-secondary-100/50 [&>section]:sm:pt-14 [&>section]:pt-4'>
            <div className='flex justify-center mt-4 sm:my-6 px-4'>
                <div className='w-full flex max-sm:flex-col max-w-[1200px] max-sm:gap-5'>
                    <ProductImagesCarousel product={product} />
                    <aside className='w-full flex flex-col gap-6 justify-between max-sm:items-center sm:p-4'>
                        <div className='w-full flex flex-col max-sm:items-center divide-y divide-secondary-100/50 [&>h6]:pt-6'>
                            <h4 className='font-semibold max-sm:text-h6 pb-4 max-sm:text-center'>{product.name}</h4>
                            <h6 className='text-secondary-400 font-normal max-sm:text-subtitle1'>
                                {product.description}
                            </h6>
                        </div>
                        <Button size='md' className='w-fit font-semibold'>Consultar</Button>
                    </aside>
                </div>
            </div>
            <ProductsCarousel products={products || []} />
        </main>
    );
}
