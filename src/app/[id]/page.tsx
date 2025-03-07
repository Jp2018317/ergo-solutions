import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";
import ProductImagesCarousel from "@/components/ProductImagesCarousel";
import {supabase} from "@/lib/supabase";
import ProductModels from "@/components/ProductModels";
import {WHATSAPP_NUMBER} from "@/config";
import {redirect} from "next/navigation";
import ProductSpecifications from "@/components/ProductSpecifications";
import BreadCrumbs from "@/components/BreadCrumbs";

interface ProductProps {
    params: Promise<{ id: string }>
}

export default async function Product({ params }: ProductProps) {
    const id = (await params).id

    const { data: product, error } = await supabase
        .from('products')
        .select(`*,main_category(*),sub_category(*)`)
        .eq('id', id)
        .single();

    if (error || !product) {
        redirect('/')
    }

    const { data: productModels } = await supabase
        .from('product_models')
        .select(`*`)
        .eq('product_id', id)

    const { data: products } = await supabase.from("products").select().limit(6);

    return (
        <main className='space-y-10 sm:space-y-14 divide-y divide-secondary-100/50 [&>section]:sm:pt-14 [&>section]:pt-4'>
            <section className='flex justify-center px-4 !pt-4 md:min-h-[500px]'>
                <div className='w-full flex max-sm:flex-col max-w-[1200px] max-sm:gap-5'>
                    <ProductImagesCarousel product={product} />
                    <aside className='w-full flex flex-col justify-between max-sm:items-center sm:p-4'>
                        <div className='size-full flex flex-col'>
                            <BreadCrumbs main_category={product.main_category} sub_category={product.sub_category}  />
                            <div className='w-full flex flex-col max-sm:items-center divide-y divide-secondary-100/50 [&>p]:py-6'>
                                <h4 className='font-semibold max-sm:text-h6 pb-4 py-2 max-sm:text-center'>{product.name}</h4>
                                <p className='text-secondary-400 font-normal text-subtitle1 text- max-sm:text-subtitle1'>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                            <div className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm
                              transition-colors focus-visible:outline-none focus-visible:ring-2
                              focus-visible:ring-action-light-green focus-visible:ring-offset-0 disabled:pointer-events-none text-action
                              bg-primary-300 bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] 
                              bg-gradient-to-r from-primary-300 to-primary-200  text-white py-[14px] px-[24px] hover:bg-gradient-to-r 
                              hover:from-primary-300 hover:to-primary-200 active:bg-gradient-to-r active:from-primary-200 active:to-primary-100
                              disabled:bg-none disabled:text-gray-400 disabled:bg-gray-100 font-semibold`}
                            >
                                Consultar
                            </div>
                        </a>
                    </aside>
                </div>
            </section>
            {
                productModels && productModels?.length > 0 && (
                    <ProductModels models={productModels} />
                )
            }
            {
                product.specifications && (
                    <ProductSpecifications specifications={product.specifications} />
                )
            }
            <ProductsCarousel products={products || []} />
        </main>
    );
}
