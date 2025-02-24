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
import {Button} from "@components/button";

export type ProductsCarouselType = {
    products: Product[];
    main_categories: MainCategory[] | null;
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

    // Estados para la paginación
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; // Cambiado a 9 productos

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
                .range((currentPage - 1) * productsPerPage, currentPage * productsPerPage - 1); // Ajustar rango según la página

            if (filters.main_category) {
                query = query.eq("main_category", filters.main_category);
            }

            if (filters.sub_category) {
                query = query.eq("sub_category", filters.sub_category);
            }

            const { data, error } = await query;

            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setFilteredProducts(data || []);
            }

            setIsLoading(false);
        };

        fetchFilteredProducts();
    }, [filters, currentPage]); // Añadido currentPage a las dependencias

    // Calcular los productos para la página actual
    const currentProducts = filteredProducts;

    // Funciones de paginación
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="size-full flex max-md:flex-col gap-4">
            <Filters main_categories={main_categories} sub_categories={sub_categories} onChange={setFilters} />
            {isLoading ? (
                <div className="w-full md:p-10">
                    <section className="grid grid-cols-3 max-md:grid-cols-2">
                        <ImageLoader />
                        <ImageLoader />
                        <ImageLoader className="max-sm:hidden" />
                        <ImageLoader className="max-sm:hidden" />
                        <ImageLoader className="max-sm:hidden" />
                        <ImageLoader className="max-sm:hidden" />
                    </section>
                </div>
            ) : (
                <div className="size-full md:p-10">
                    {currentProducts.length > 0 ? (
                        <>
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
                                            <h6 className="line-clamp-1">{productData.name}</h6>
                                            <p className="w-full line-clamp-2 text-body1 text-secondary-300">{productData.description}</p>
                                        </section>
                                    </div>
                                ))}
                            </section>

                            {/* Controles de paginación */}
                            <div className="pagination w-full flex items-center justify-center gap-2 mt-10">
                                <Button onClick={prevPage} disabled={currentPage === 1}>
                                    Anterior
                                </Button>
                                <span className="px-4 text-lg">{currentPage}</span>
                                <Button onClick={nextPage} disabled={currentProducts.length < productsPerPage}>
                                    Siguiente
                                </Button>
                            </div>
                        </>
                    ) : (
                        <div className="size-full max-h-[40rem] max-md:h-40 flex items-center justify-center text-center">
                            No se encontraron productos
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
