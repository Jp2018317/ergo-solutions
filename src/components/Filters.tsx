"use client";

import * as React from "react";

export default function Filters() {
    //const searchParams = useSearchParams();
    //const router = useRouter();

    //const [minPrice, setMinPrice] = React.useState(0);
    //const [maxPrice, setMaxPrice] = React.useState(5000);

    //const handlePriceFilter = () => {
    //    const params = new URLSearchParams(searchParams.toString());
    //    params.set("minPrice", minPrice.toString());
    //    params.set("maxPrice", maxPrice.toString());
    //    router.push(`?${params.toString()}`);
    //};

    return (
        <aside className="flex flex-col min-w-64 text-center sm:gap-4">
            <h3 className="max-sm:text-[30px]">Productos</h3>
            <div className="border border-gray-200 rounded-lg p-4">
                {/*
                    <span className="font-semibold mb-2">Filtrar por precio</span>
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="flex items-center gap-2">
                            <span>Mínimo:</span>
                            <input
                                type="number"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                min={0}
                                max={maxPrice}
                            />
                        </label>
                        <label className="flex items-center gap-2">
                            <span>Máximo:</span>
                            <input
                                type="number"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                min={minPrice}
                                max={5000}
                            />
                        </label>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2"
                            onClick={handlePriceFilter}
                        >
                            Aplicar filtro
                        </button>
                    </div>
            */}
            </div>
        </aside>
);
}
