import * as React from "react";
import ProductsCarousel from "@/components/ProductsCarousel";
import Example from "@public/logo/example.jpg";
import {Link} from "@components/link";
import {ImageItem} from "@components/image-item";
import Filters from "@/components/Filters";


export default function Productos() {

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
        },
        {
            id: '6',
            name: 'Nombre del Producto 6',
            description: 'Descripción del producto 6',
        },
        {
            id: '7',
            name: 'Nombre del Producto 7',
            description: 'Descripción del producto 7',
        },
        {
            id: '8',
            name: 'Nombre del Producto 8',
            description: 'Descripción del producto 8',
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
        {
            key: '6',
            name: 'name',
            src: Example.src,
        },
        {
            key: '7',
            name: 'name',
            src: Example.src,
        },
        {
            key: '8',
            name: 'name',
            src: Example.src,
        },
    ]

  return (
      <main className='space-y-14 divide-y divide-secondary-100/50 [&>section]:sm:pt-10 [&>section]:pt-4'>
          <section className='flex justify-center gap-2'>
              <div className='w-full flex max-sm:flex-col gap-4 max-w-[1200px] px-4 sm:divide-x divide-secondary-100/50'>
                  <Filters />
                      <section className='grid grid-cols-3 max-md:grid-cols-2 sm:pl-2'>
                          {(ListProductsData || []).map((productData, index) => (
                              <div
                                  key={productData.id}
                                  className="flex flex-col gap-5 p-1 px-2 shrink-0 min-[500px]:basis-1/2 md:basis-1/3 items-center"
                              >
                                  <Link
                                      href={`/${productData.id}`}
                                      className={`relative size-full max-w-72 max-h-72 flex aspect-square items-center justify-center overflow-hidden rounded-[20px]`}
                                  >
                                      <ImageItem alt={'alt'} height={290} width={290}
                                                 src={ProductImagesResponse[index].src}/>
                                  </Link>
                                  <section
                                      className="w-full text-center space-y-3"
                                  >
                                      <h6 className="line-clamp-1">{productData.name}</h6>
                                      <p className="w-full line-clamp-2 text-body1 text-secondary-300">{productData.description}</p>
                                  </section>
                              </div>
                          ))}
                      </section>
              </div>
          </section>
          <ProductsCarousel products={ListProductsData} images={ProductImagesResponse}/>
      </main>
  );
}
