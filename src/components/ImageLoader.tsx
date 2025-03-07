"use client";

import * as React from "react";
import {cn} from "@/lib/utils";

export default function ImageLoader({className}: {className?: string}) {
    return (
        <div className={cn("flex flex-col gap-5 p-1 px-2 shrink-0 min-[500px]:basis-1/2 md:basis-1/3 items-center", className)}>
            <div className="relative size-full max-w-72 max-h-72 flex aspect-square justify-center overflow-hidden rounded-[20px]">
                <div className="size-full object-cover bg-secondary-100 rounded-2xl animate-pulse" />
            </div>
            <section className="w-full h-20 flex flex-col gap-3">
                <div className='flex flex-col items-center gap-1 h-9'>
                    <div className='size-full rounded-2xl max-w-52 bg-gray-100 animate-pulse' />
                    <div className='size-full rounded-2xl max-w-52 bg-gray-100 animate-pulse' />
                </div>
                <div className='flex flex-col gap-1 h-5'>
                    <div className='w-full h-2.5 rounded-2xl bg-gray-100 animate-pulse' />
                    <div className='w-full h-2.5 rounded-2xl bg-gray-100 animate-pulse' />
                </div>
            </section>
        </div>
    )
}
