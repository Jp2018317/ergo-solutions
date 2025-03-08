"use client";

import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselCounter,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@components/carousel";
import {ImageItem} from "@components/image-item";
import {Link} from "@components/link";
import {Product} from "@utils/types";
import {IMAGES_URL} from "@/config";
import ImageLoader from "@/components/ImageLoader";


export type ProductsCarouselType = {
  products: Product[] | null
}

export default function ProductsCarousel({products}: ProductsCarouselType) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

  return (
      <section className='w-full flex flex-col space-y-10 items-center px-4 py-6 sm:py-10'>
        <div className='w-full max-w-[1200px] text-center'>
          <h3 className='max-sm:text-h4 max-sm:font-bold'><span
              className='text-h3 max-sm:text-h4 max-sm:font-bold text-primary-300'>Productos</span> que podrían
            interesarte</h3>
        </div>
        <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full relative flex items-center max-w-[1200px] px-0 "
            setApi={setApi}
        >
          <CarouselContent className="w-full flex ml-0">
            {products ? (
                products.map((productData, index) => (
                    <CarouselItem
                        key={index}
                        className="flex flex-col gap-5 p-1 px-2 shrink-0 min-[500px]:basis-1/2 md:basis-1/3 items-center"
                    >
                        <Link
                            href={`/${productData.id}`}
                            className={`relative size-full max-w-72 max-h-72 flex aspect-square items-center justify-center overflow-hidden rounded-[20px]`}
                        >
                            <ImageItem
                                alt={'alt'}
                                height={290}
                                width={290}
                                src={`${IMAGES_URL}/${productData.main_category}/${productData.sub_category}/${productData.name}/1.jpg`}
                            />
                        </Link>
                        <section
                            className="w-full text-center space-y-3"
                        >
                            <h6 className="line-clamp-1">{productData.name}</h6>
                            <p className="w-full line-clamp-2 text-body1 text-secondary-300">{productData.description}</p>
                        </section>
                    </CarouselItem>
                )
            )) : (
                <div className="w-full">
                    <section className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
                        <ImageLoader />
                        <ImageLoader className='max-md:hidden'/>
                        <ImageLoader className='max-md:hidden' />
                    </section>
                </div>
            )}
          </CarouselContent>
          <CarouselCounter current={current} setCurrent={setCurrent}  count={count} />
          <CarouselPrevious className='left-10'/>
          <CarouselNext className='right-10'/>
        </Carousel>
        <div className='w-full max-w-[1200px] text-center pt-4'>
          <Link className='font-semibold' size='lg' variant='primary' href='/productos'>Ver más</Link>
        </div>
      </section>
  );
}





