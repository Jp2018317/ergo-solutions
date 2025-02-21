import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";
import FilteredProducts from "@/components/FilteredProducts";
import {createClient} from "@utils/supabase/server";

export default async function Products() {
    const supabase = await createClient();

    const { data: carouselProducts, error: carouselError } = await supabase
        .from("products")
        .select()
        .limit(6);

    const { data: filteredProducts, error: filteredError } = await supabase
        .from("products")
        .select()
        .range(0, 9); // Paginación: primeros 10 productos

    const { data: main_categories } = await supabase
        .from("main_categories")
        .select();

    const { data: sub_categories } = await supabase
        .from("sub_categories")
        .select();

    if (carouselError || filteredError) {
        console.error("Error obteniendo productos:", carouselError || filteredError);
    }

    return (
        <main className="space-y-14 divide-y divide-secondary-100/50 [&>section]:sm:pt-10 [&>section]:pt-4">
            <section className="flex justify-center gap-2">
                <div className="w-full flex max-sm:flex-col gap-4 max-w-[1200px] px-4 sm:divide-x divide-secondary-100/50">
                    <FilteredProducts main_categories={main_categories || []} sub_categories={sub_categories || []} products={filteredProducts || []} />
                </div>
            </section>
            <ProductsCarousel products={carouselProducts || []} />
        </main>
    );
}
