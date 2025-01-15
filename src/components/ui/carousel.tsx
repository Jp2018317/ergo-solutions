'use client';

import * as React from 'react';
import {
    createContext,
    Dispatch,
    forwardRef,
    HTMLAttributes,
    KeyboardEvent,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';
import useEmblaCarousel, {type UseEmblaCarouselType} from 'embla-carousel-react';

import {cn} from '@/lib/utils';
import {Button, ButtonProps} from '@/components/ui/button';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: 'horizontal' | 'vertical'
    setApi?: (api: CarouselApi) => void
};

export type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />');
    }

    return context;
}

const Carousel = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = 'horizontal',
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === 'horizontal' ? 'x' : 'y',
            },
            plugins,
        );
        const [canScrollPrev, setCanScrollPrev] = useState(false);
        const [canScrollNext, setCanScrollNext] = useState(false);

        const onSelect = useCallback((cbApi: CarouselApi) => {
            if (!cbApi) {
                return;
            }

            setCanScrollPrev(cbApi.canScrollPrev());
            setCanScrollNext(cbApi.canScrollNext());
        }, []);

        const scrollPrev = useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const handleKeyDown = useCallback(
            (event: KeyboardEvent<HTMLDivElement>) => {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    scrollPrev();
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    scrollNext();
                }
            },
            [scrollPrev, scrollNext],
        );

        useEffect(() => {
            if (!api || !setApi) {
                return;
            }

            setApi(api);
        }, [api, setApi]);

        useEffect(() => {
            if (!api) {
                return;
            }

            onSelect(api);
            api.on('reInit', onSelect);
            api.on('select', onSelect);


            return () => {
                api?.off('select', onSelect);
            };
        }, [api, onSelect]);

        return useMemo(() => (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn('relative', className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        ), [carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext, ref, handleKeyDown, className, props, children]);
    },
);
Carousel.displayName = 'Carousel';

const CarouselContent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
        <div ref={carouselRef} className="overflow-hidden w-full">
            <div
                ref={ref}
                className={cn(
                    'flex',
                    orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
                    className,
                )}
                {...props}
            />
        </div>
    );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                'min-w-0 shrink-0 grow-0 basis-full',
                orientation === 'horizontal' ? 'pl-4' : 'pt-4',
                className,
            )}
            {...props}
        />
    );
});
CarouselItem.displayName = 'CarouselItem';

export interface CarouselCounterProps
    extends HTMLAttributes<HTMLDivElement> {
    count: number,
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>
    jump?: boolean,
}

const CarouselCounter = forwardRef<
    HTMLDivElement,
    CarouselCounterProps
>(({
       className, count, current, setCurrent, jump = false, ...props
   }, ref) => {
    const { orientation, api } = useCarousel();

    function scrollToSelected(itemPosition: number) {
        setCurrent(itemPosition + 1);
        api?.scrollTo(itemPosition, jump);
    }

    return (
        <div
            ref={ref}
            {...props}
            className={cn(
                'absolute w-full flex justify-center gap-2 max-w-[90%]',
                orientation === 'horizontal'
                    ? '-bottom-6 left-1/2 -translate-x-1/2'
                    : '-left-6 top-1/2 -translate-y-1/2 flex-col',
                className,
            )}
        >
            {Array.from({ length: count }).map((_, index) => (
                <Button
                    key={index}
                    onClick={() => scrollToSelected(index)}
                    variant="ghost"
                    className={cn(
                        'w-2.5 h-2.5 ring-1 ring-secondary-100 rounded-full bg-secondary-100 hover:bg-primary-500 p-0',
                        index + 1 === current && 'bg-primary-500 ring-primary-500',
                    )}
                />
            ))}
        </div>
    );
});
CarouselCounter.displayName = 'CarouselCounter';

const CarouselPrevious = forwardRef<
    HTMLButtonElement,
    ButtonProps
>(({
       className, variant = 'outline', size = 'icon', ...props
   }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                'absolute h-9 max-sm:h-8 w-9 max-sm:w-8 bg-white/75 dark:bg-black/75 hover:bg-white/75 dark:hover:bg-black/75 shadow-none rounded-full',
                orientation === 'horizontal'
                    ? 'left-2 max-sm:left-0 top-1/2 -translate-y-1/2'
                    : 'top-2 max-sm:top-0 left-1/2 -translate-x-1/2 rotate-90',
                !canScrollPrev && 'hidden',
                className,
            )}
            onClick={scrollPrev}
            {...props}
        >
            <FontAwesomeIcon className="text-[14px]" icon={faChevronLeft} />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = forwardRef<
    HTMLButtonElement,
    ButtonProps
>(({
       className, variant = 'outline', size = 'icon', ...props
   }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                'absolute h-9 max-sm:h-8 w-9 max-sm:w-8 bg-white/75 dark:bg-black/75 hover:bg-white/75 dark:hover:bg-black/75 shadow-none rounded-full',
                orientation === 'horizontal'
                    ? 'right-2 max-sm:right-0 top-1/2 -translate-y-1/2'
                    : 'bottom-2 max-sm:bottom-0  left-1/2 -translate-x-1/2 rotate-90',
                !canScrollNext && 'hidden',
                className,
            )}
            onClick={scrollNext}
            {...props}
        >
            <FontAwesomeIcon className="text-[14px]" icon={faChevronRight} />
            <span className="sr-only">Next slide</span>
        </Button>
    );
});
CarouselNext.displayName = 'CarouselNext';

export {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselCounter,
    useCarousel,
};
