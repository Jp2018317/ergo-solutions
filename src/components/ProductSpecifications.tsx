import React from "react";

export type ProductModelsType = {
    specifications: string
}

export default async function ProductSpecifications({ specifications }: ProductModelsType) {
    return (
        <section className='flex justify-center sm:my-6 p-4'>
            <div className='w-full flex max-sm:flex-col max-w-[1200px] max-sm:gap-5'>
                <div className='w-full flex flex-col max-sm:items-center divide-y divide-secondary-100/50 [&>p]:pt-6'>
                    <h4 className='font-semibold max-sm:text-h6 pb-4 max-sm:text-center'>Principales
                        <span className='text-h4 max-sm:text-h6 font-bold text-primary-300'> especificaciones</span> y
                        <span className='text-h4 max-sm:text-h6 font-bold text-primary-300'> características</span>
                    </h4>
                    <p className='text-secondary-400 font-normal text-subtitle1 text- max-sm:text-subtitle1' style={{ whiteSpace: 'pre-line' }}>
                        {specifications}
                    </p>
                </div>
            </div>
        </section>
    );
};
