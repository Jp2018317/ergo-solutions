'use client';

import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselCounter,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@components/carousel';
import {cn} from '@/lib/utils';
import {useRouter} from 'next/navigation';
import {ImageItem} from './image-item';

export interface ProductCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  productInfo: { product: any };
  image?: { key: string, downloadUrl: string },
  redirect?: string
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCarouselProps>(
  ({
    className,
    productInfo,
    image,
    redirect,
    ...props
  }, ref) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const router = useRouter();

    function handleRedirect() {
      if (!redirect) return;

      router.push(redirect);
    }

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
      <div
        className={cn('transition-all flex justify-center w-full h-fit hover:opacity-85', className)}
      >
        <div className="relative space-y-4 gap-y-4 w-full max-sm:max-w-[350px] max-lg:max-w-[195px] max-w-[290px]">
          <Carousel
            opts={{
              align: 'end',
            }}
            className="w-full"
            ref={ref}
            orientation="horizontal"
            setApi={setApi}
            {...props}
          >
            <CarouselContent>
              {image ? (
                  <CarouselItem
                    className={cn(
                      'flex flex-col items-center',
                    )}
                    key={image.key}
                  >
                    <section
                      className={`relative w-[290px] h-[300px] max-lg:w-[195px] max-lg:h-[200px] max-sm:w-40 max-sm:h-40
                      flex aspect-square items-center justify-center overflow-hidden rounded-[20px]`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={handleRedirect}
                      onClick={handleRedirect}
                    >
                      <ImageItem
                        src={image.downloadUrl}
                        alt={productInfo.product.name}
                        width={290}
                        height={300}
                      />
                    </section>
                  </CarouselItem>
              ) : (
                <CarouselItem
                  className="flex flex-col items-center"
                  key="default"
                >
                  <section
                    className={`relative w-[290px] h-[300px] max-lg:w-[195px] max-lg:h-[200px] max-sm:w-40 max-sm:h-40
                    flex aspect-square items-center justify-center overflow-hidden rounded-[20px]`}
                  >
                    <ImageItem
                      alt={productInfo.product.name}
                      width={290}
                      height={300}
                    />
                  </section>
                </CarouselItem>
              )}
            </CarouselContent>
            {
                    count > 1 && (
                      <CarouselCounter className="max-sm:hidden" setCurrent={setCurrent} current={current} count={count} />
                    )
              }
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <section
            className="max-sm:max-w-[350px] max-lg:max-w-[200px] max-w-[290px] space-y-3"
            role="button"
            tabIndex={0}
            onKeyDown={handleRedirect}
            onClick={handleRedirect}
          >
            <header className="w-full flex md:gap-2 gap-1 justify-between">
              <h6 className="line-clamp-1">{productInfo.product.name}</h6>
            </header>
            <p className="w-full line-clamp-2 text-body1">{productInfo.product.description}</p>
          </section>
        </div>
      </div>
    );
  },
);

ProductCard.displayName = 'ProductCard';

export default ProductCard;
