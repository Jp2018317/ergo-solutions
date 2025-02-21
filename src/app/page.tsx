import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";
import {createClient} from '@/utils/supabase/server';

export default async function Home() {
    const supabase = await createClient();
    const { data: products } = await supabase.from("products").select();

  return (
      <main className='space-y-14'>
          <section className='flex flex-col items-center justify-center gap-6 bg-secondary-100 text-white w-full h-96 px-4'>
              <h4 className='max-lg:text-h6 text-center'>Mensaje atractivo publicitando la empresa y sus productos</h4>
              <h1 className='max-lg:text-h4 text-center'>PRODUCTO/SERVICIO</h1>
          </section>
          <ProductsCarousel products={products || []} />
      </main>
  );
}
