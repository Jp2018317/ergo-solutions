"use client";

import * as React from "react";


export default function ImageLoader() {
    return (
        <div className="w-full p-10">
            <section className="grid grid-cols-3 max-md:grid-cols-2">
                <div className="flex flex-col gap-5 p-1 px-2 shrink-0 min-[500px]:basis-1/2 md:basis-1/3 items-center">
                    <div className="relative size-full max-w-72 max-h-72 flex aspect-square justify-center overflow-hidden rounded-[20px]">
                        <div className="size-full object-cover bg-secondary-100 rounded-2xl animate-pulse" />
                    </div>
                    <section className="w-full h-20 text-center flex flex-col gap-3">
                        <div className='w-full h-4 rounded-2xl bg-gray-100 animate-pulse' />
                        <div className='flex flex-col gap-1 h-5'>
                            <div className='w-full h-2.5 rounded-2xl bg-gray-100 animate-pulse' />
                            <div className='w-full h-2.5 rounded-2xl bg-gray-100 animate-pulse' />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
