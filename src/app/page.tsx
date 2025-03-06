import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";
import {createClient} from '@/utils/supabase/server';
import CompanySlider from "@/components/CompanySlider";

export default async function Home() {
    const supabase = await createClient();
    const { data: products } = await supabase.from("products").select().limit(6);

  return (
      <main className='flex flex-col items-center w-full'>
          <ProductsCarousel products={products} />
          <CompanySlider />
      </main>
  );
}
