import {Link} from "@components/link";
import Example from '@public/logo/example.jpg';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@components/carousel";
import * as React from "react";
import FooterComponent from "@components/FooterComponent";

export default function Home() {

    const ListProductsData = {
        data: {
            products: [
                {
                    product: {
                        id: 1,
                        name: 'Negocio 1',
                        description: 'Descripción del negocio 1',
                        address: 'Dirección del negocio 1',
                        phone: '1234567890',
                        email: '',
                    }
                },
                {
                    product: {
                        id: 2,
                        name: 'Negocio 1',
                        description: 'Descripción del negocio 1',
                        address: 'Dirección del negocio 1',
                        phone: '1234567890',
                        email: '',
                    }
                },
                {
                    product: {
                        id: 3,
                        name: 'Negocio 1',
                        description: 'Descripción del negocio 1',
                        address: 'Dirección del negocio 1',
                        phone: '1234567890',
                        email: '',
                    }
                },
                {
                    product: {
                        id: 4,
                        name: 'Negocio 1',
                        description: 'Descripción del negocio 1',
                        address: 'Dirección del negocio 1',
                        phone: '1234567890',
                        email: '',
                    }
                },
                {
                    product: {
                        id: 5,
                        name: 'Negocio 1',
                        description: 'Descripción del negocio 1',
                        address: 'Dirección del negocio 1',
                        phone: '1234567890',
                        email: '',
                    }
                }
            ]
        }
    }

    const ProductImagesResponse = [
        {
            key: '1',
            name: 'name',
            downloadUrl: Example.src,
        },
        {
            key: '2',
            name: 'name',
            downloadUrl: Example.src,
        },
        {
            key: '3',
            name: 'name',
            downloadUrl: Example.src,
        },
        {
            key: '4',
            name: 'name',
            downloadUrl: Example.src,
        },
        {
            key: '5',
            name: 'name',
            downloadUrl: Example.src,
        },
    ]

  return (
      <main className='space-y-14'>
          <section className='flex flex-col items-center justify-center gap-6 bg-secondary-100 text-white w-full h-96'>
              <h4 className='max-lg:text-h6 text-center'>Mensaje atractivo publicitando la empresa y sus productos</h4>
              <h1 className='max-lg:text-h4 text-center'>PRODUCTO/SERVICIO</h1>
          </section>
          <section className='w-full flex flex-col space-y-10 items-center px-4'>
              <div className='w-full max-w-[1200px] text-center'>
                  <h3 className='max-sm:text-h4 max-sm:font-bold'><span className='text-h3 max-sm:text-h4 max-sm:font-bold text-primary-300'>Produtos</span> que podrían interesarte</h3>
              </div>
                <Carousel
                          opts={{
                              align: 'start',
                          }}
                          className="w-full relative flex items-center max-w-[1200px] px-0"
                      >
                          <CarouselContent className="w-full flex ml-0">
                              {(ListProductsData?.data?.products || []).map((productData, index) => (
                                  <CarouselItem
                                      key={ProductImagesResponse[index].key}
                                      className="flex flex-col gap-5 p-1 px-2 shrink-0 min-[500px]:basis-1/2 md:basis-1/3 items-center"
                                  >
                                      <section
                                          className={`relative size-full max-w-72 max-h-72 flex aspect-square items-center justify-center overflow-hidden rounded-[20px]`}
                                          role="button"
                                          tabIndex={0}
                                      >
                                          <div className='size-full bg-secondary-100' />
                                      </section>
                                      <section
                                          className="w-full text-center space-y-3"
                                          role="button"
                                          tabIndex={0}
                                      >
                                          <h6 className="line-clamp-1">{productData.product.name}</h6>
                                          <p className="w-full line-clamp-2 text-body1">{productData.product.description}</p>
                                      </section>
                                  </CarouselItem>
                              ))}
                          </CarouselContent>
                    <CarouselPrevious className='left-10'/>
                    <CarouselNext className='right-10'/>
                </Carousel>
              <div className='w-full max-w-[1200px] text-center'>
                  <Link variant='default' href='/'>Ver más</Link>
              </div>
          </section>
          <FooterComponent />
      </main>
  );
}
