"use client";

import * as React from "react";
import {useEffect, useState} from "react";
import {MainCategory, Product, SubCategory} from "@utils/types";
import {Link} from "@components/link";
import {ImageItem} from "@components/image-item";
import Filters from "./Filters";
import {IMAGES_URL, PRODUCTS_PER_PAGE} from "@/config";
import {supabase} from "@/lib/supabase";
import ImageLoader from "@/components/ImageLoader";
import {Button} from "@components/button";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export type ProductsCarouselType = {
    products: Product[];
    main_categories: MainCategory[] | null;
    sub_categories: SubCategory[];
};

export default function FilteredProducts({ products, main_categories, sub_categories }: ProductsCarouselType) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState<{ main_category: string; sub_category: string, page: string }>({
        main_category: "",
        sub_category: "",
        page: "1",
    });
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    // Estados para la paginación
    const initialPage = searchParams.get("page")
    const [currentPage, setCurrentPage] = useState(initialPage ? parseInt(initialPage) : 1);

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
            return;
        }

        const fetchFilteredProducts = async () => {
            setIsLoading(true);

            let query = supabase
                .from("products")
                .select(`*, main_category(*), sub_category(*)`)
                .range((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE - 1);

            if (filters.main_category) {
                query = query.eq("main_category", filters.main_category);
            }

            if (filters.sub_category) {
                query = query.eq("sub_category", filters.sub_category);
            }

            const params = new URLSearchParams(searchParams.toString());
            params.set("main_category", filters.main_category);
            params.set("sub_category", filters.sub_category);
            params.set("page", filters.page);
            router.push(pathname + '?' + params.toString(), {scroll: false});

            setCurrentPage(parseInt(filters.page));

            const { data, error } = await query;

            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setFilteredProducts(data || []);
            }

            setIsLoading(false);
        };

        fetchFilteredProducts();
    }, [filters, currentPage]);

    const currentProducts = filteredProducts;

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        setFilters({ ...filters, page: (currentPage + 1).toString() });
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setFilters({ ...filters, page: (currentPage - 1).toString() });
        }
    };

    return (
        <div className="size-full flex max-md:flex-col gap-4">
            <Filters main_categories={main_categories || []} sub_categories={sub_categories} onChange={setFilters} />
            {isLoading ? (
                <div className="w-full md:p-10">
                    <section className="grid grid-cols-3 max-md:grid-cols-2 gap-4">
                        {Array.from({ length: PRODUCTS_PER_PAGE }).map((_, index) => (
                            <ImageLoader key={index} />
                        ))}
                    </section>
                    <div className="pagination w-full flex items-center justify-center gap-2 mt-10">
                        <Button disabled>
                            Anterior
                        </Button>
                        <span className="px-4 text-lg">{currentPage}</span>
                        <Button disabled>
                            Siguiente
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="size-full md:p-10">
                    {currentProducts.length > 0 ? (
                            <section className="grid grid-cols-3 max-md:grid-cols-2">
                                {currentProducts.map((productData) => (
                                    <div key={productData.id} className="flex flex-col gap-5 p-1 px-2 shrink-0 min-[500px]:basis-1/2 md:basis-1/3 items-center">
                                        <Link href={`/${productData.id}`} className="relative size-full max-w-72 max-h-72 flex aspect-square items-center justify-center overflow-hidden rounded-[20px]">
                                            <ImageItem
                                                alt={productData.name}
                                                height={290}
                                                width={290}
                                                src={`${IMAGES_URL}/${productData.main_category.name}/${productData.sub_category.name}/${productData.name}/1.webp`}
                                            />
                                        </Link>
                                        <section className="w-full text-center space-y-3">
                                            <h6 className="line-clamp-2 max-md:line-clamp-3 max-md:text-subtitle1 max-md:font-bold">{productData.name}</h6>
                                            <p className="w-full line-clamp-2 text-body1 max-md:text-body2 text-secondary-300">{productData.description}</p>
                                        </section>
                                    </div>
                                ))}
                            </section>
                    ) : (
                        <div className="size-full max-h-[40rem] max-md:h-40 flex items-center justify-center text-center">
                            No se encontraron productos
                        </div>
                    )}

                    <div className="pagination w-full flex items-center justify-center gap-2 mt-10">
                        <Button onClick={prevPage} disabled={currentPage === 1}>
                            Anterior
                        </Button>
                        <span className="px-4 text-lg">{currentPage}</span>
                        <Button onClick={nextPage} disabled={currentProducts.length < PRODUCTS_PER_PAGE}>
                            Siguiente
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
