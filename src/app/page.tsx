import Example from '@public/logo/example.jpg';
import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";

export default function Home() {

    const ListProductsData = [
                {
                        id: '1',
                        name: 'Nombre del Producto 1',
                        description: 'Descripción del producto 1',
                },
                {
                        id: '2',
                        name: 'Nombre del Producto 2',
                        description: 'Descripción del producto 2',
                },
                {
                        id: '3',
                        name: 'Nombre del Producto 3',
                        description: 'Descripción del producto 3',
                },
                {
                        id: '4',
                        name: 'Nombre del Producto 4',
                        description: 'Descripción del producto 4',
                },
                {
                        id: '5',
                        name: 'Nombre del Producto 5',
                        description: 'Descripción del producto 5',
                }
            ]

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
    ]

  return (
      <main className='space-y-14'>
          <section className='flex flex-col items-center justify-center gap-6 bg-secondary-100 text-white w-full h-96 px-4'>
              <h4 className='max-lg:text-h6 text-center'>Mensaje atractivo publicitando la empresa y sus productos</h4>
              <h1 className='max-lg:text-h4 text-center'>PRODUCTO/SERVICIO</h1>
          </section>
          <ProductsCarousel products={ListProductsData} images={ProductImagesResponse} />
      </main>
  );
}
