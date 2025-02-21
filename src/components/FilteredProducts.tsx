"use client";

import * as React from "react";
import {useEffect, useState} from "react";
import {MainCategory, Product, SubCategory} from "@utils/types";
import {Link} from "@components/link";
import {ImageItem} from "@components/image-item";
import Filters from "./Filters";
import {IMAGES_URL} from "@/config";
import {supabase} from "@/lib/supabase";
import ImageLoader from "@/components/ImageLoader";

export type ProductsCarouselType = {
    products: Product[];
    main_categories: MainCategory[];
    sub_categories: SubCategory[];
};

export default function FilteredProducts({ products, main_categories, sub_categories }: ProductsCarouselType) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState<{ main_category: string; sub_category: string }>({
        main_category: "",
        sub_category: "",
    });

    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    useEffect(() => {
        if(isFirstLoad) {
            setIsFirstLoad(false);
            return;
        }
        const fetchFilteredProducts = async () => {
            setIsLoading(true);

            const query = supabase
                .from("products")
                .select(`*,main_category(*),sub_category(*)`)

            if(filters.main_category) {
                query.eq("main_category", filters.main_category)
            }

            if(filters.sub_category) {
                query.eq("sub_category", filters.sub_category)
            }

            const { data, error } = await query;

            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setFilteredProducts(data || []);
                console.log({filteredProducts})
            }

            setIsLoading(false);
        };
        fetchFilteredProducts();
    }, [filters]);

    return (
        <div className="w-full flex gap-4">
            <Filters main_categories={main_categories} sub_categories={sub_categories} onChange={setFilters} />
            {isLoading ? (
               <ImageLoader />
            ) : (
                <div className="w-full p-10">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((productData) => (
                            <section key={productData.id} className="grid grid-cols-3 max-md:grid-cols-2">
                                <div className="flex flex-col gap-5 p-1 px-2 shrink-0 min-[500px]:basis-1/2 md:basis-1/3 items-center">
                                    <Link href={`/${productData.id}`} className="relative size-full max-w-72 max-h-72 flex aspect-square items-center justify-center overflow-hidden rounded-[20px]">
                                        <ImageItem
                                            alt={productData.name}
                                            height={290}
                                            width={290}
                                            src={`${IMAGES_URL}/${productData.main_category.name}/${productData.sub_category.name}/${productData.name}/1.webp`}
                                        />
                                    </Link>
                                    <section className="w-full text-center space-y-3">
                                        <h6 className="line-clamp-1">{productData.name}</h6>
                                        <p className="w-full line-clamp-2 text-body1 text-secondary-300">{productData.description}</p>
                                    </section>
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="size-full max-h-[30rem] flex items-center justify-center text-center">
                            No se encontraron productos
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
