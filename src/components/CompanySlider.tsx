import * as React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@components/carousel";

export default function CompanySlider() {
    return(
        <section className='size-full flex flex-col items-center justify-center px-4 bg-secondary-100/25 min-h-96'>
            <Carousel className="w-full relative flex items-center max-w-[1200px] px-0 ">
                <CarouselContent className="size-full flex ml-0 items-center max-w-[1200px]">
                    <CarouselItem className="flex flex-col gap-5 p-1 px-2 shrink-0 items-center">
                        <h2 className='text-primary-300 max-sm:text-h4 max-sm:font-bold'>MISIÓN</h2>
                        <p className='text-center text-secondary-500 max-sm:text-body1 max-sm: text-subtitle1 max-w-2xl'>
                            Nuestra misión es impulsar el éxito de nuestros clientes proporcionándoles soluciones de maquinaria
                            industrial de alta calidad, confiables e innovadoras que optimicen su productividad y eficiencia operativa.
                            Nos comprometemos a brindar un servicio excepcional, asesoramiento experto y soporte continuo para satisfacer
                            las necesidades cambiantes de las industrias a las que servimos.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col gap-5 p-1 px-2 shrink-0 items-center">
                        <h2 className='text-primary-300 max-sm:text-h4 max-sm:font-bold'>VISIÓN</h2>
                        <p className='text-center text-secondary-500 max-sm:text-body1 max-sm: text-subtitle1 max-w-2xl'>
                            Nuestra visión es ser el líder indiscutible en el mercado de equipos industriales, reconocido por nuestra excelencia,
                            innovación y compromiso inquebrantable con el éxito de nuestros clientes. Aspiramos a ser el socio estratégico
                            preferido de las industrias, impulsando su crecimiento y desarrollo a través de soluciones tecnológicas avanzadas
                            y un servicio excepcional.
                        </p>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
