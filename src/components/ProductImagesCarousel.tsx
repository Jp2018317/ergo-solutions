"use client"
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
import {Product} from "@utils/types";
import {IMAGES_URL} from "@/config";

export type ProductImagesCarouselType = {
    product: Product
}

export default function ProductImagesCarousel({product}: ProductImagesCarouselType) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(1);
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            setApi={setApi}
            className="w-full relative flex items-center max-w-[1200px] px-0 max-sm:mb-5"
        >
            <CarouselContent className="w-full flex ml-0">
                { Array.from({ length: product.imgAmmount }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="flex flex-col gap-5 p-1 px-2 shrink-0 items-center"
                    >
                        <div
                            className="relative size-full max-w-[500px] max-h-[500px] flex aspect-square items-center justify-center overflow-hidden rounded-[20px]"
                        >
                            <ImageItem
                                alt={`Imagen ${index + 1}`}
                                height={500}
                                width={500}
                                src={`${IMAGES_URL}/${product.main_category.name}/${product.sub_category.name}/${product.name}/${index + 1}.webp`}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselCounter className='-bottom-4' current={current} setCurrent={setCurrent} count={count} />
            <CarouselPrevious className='left-10'/>
            <CarouselNext className='right-10'/>
        </Carousel>
    );
}
