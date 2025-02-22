import React from "react";
import {ProductModel} from "@utils/types";

export type ProductModelsType = {
    models: ProductModel[]
}

export default async function ProductModels({ models }: ProductModelsType) {
    const tableRows = [
        { label: "Altura máxima de plataforma (mm)", key: "max_platform_height" },
        { label: "Altura máxima de trabajo (mm)", key: "max_working_height" },
        { label: "Longitud total (mm)", key: "total_length" },
        { label: "Ancho total (mm)", key: "total_width" },
        { label: "Altura total (mm)", key: "total_height" },
        { label: "Tamaño de la plataforma", key: "platform_size" },
        { label: "Distancia mínima al suelo (mm)", key: "min_ground_clearance" },
        { label: "Radio de giro mínimo (mm)", key: "min_turning_radius" },
        { label: "Batería", key: "battery" },
        { label: "Cargador", key: "charger" },
        { label: "Capacidad máxima de ascenso (%)", key: "max_climbing_ability" },
        { label: "Ángulo máximo de inclinación permitido (°)", key: "max_allowable_angle_of_work" },
        { label: "Peso total (kg)", key: "total_weight" },
    ];

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
                        {tableRows
                            .filter(row => models.some(model => model[row.key as keyof typeof model] !== null)) // Filtrar filas vacías
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
