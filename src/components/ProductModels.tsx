import React from "react";
import {ProductModel} from "@utils/types";
import {TABLE_ROWS} from "@/config";

export type ProductModelsType = {
    models: ProductModel[]
}

export default async function ProductModels({ models }: ProductModelsType) {
    return (
        <section className='flex justify-center sm:my-6 p-4'>
            <div className='w-full flex max-sm:flex-col max-w-[1200px] max-sm:gap-5'>
                <div className="overflow-x-auto w-full">
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                        <thead>
                        <tr className="bg-primary-300 text-white">
                            <th className="p-2">Model</th>
                            {models.map((model) => (
                                <th key={model.model} className="p-2">{model.model}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {TABLE_ROWS
                            .filter(row => models.some(model => model[row.key as keyof typeof model] !== null))
                            .map((row, index) => (
                                <tr key={row.key} className={index % 2 === 0 ? "bg-gray-100/30" : "bg-secondary-100/50"}>
                                    <td className="p-2 font-semibold">{row.label}</td>
                                    {models.map((model) => (
                                        <td key={model.model} className="p-3 text-center">
                                            {model[row.key as keyof typeof model] ?? "-"}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
