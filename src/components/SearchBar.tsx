"use client";

import {useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";
import {Input} from "@/components/ui/input";
import {debounce} from "lodash";
import {SearchedProduct} from "@utils/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch, faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchedProduct[]>([]);
  const [loading, setLoading] = useState(false);

  // Función para buscar productos en Supabase con debounce
  const fetchProducts = debounce(async (searchTerm: string) => {
    setLoading(true);

    if (!searchTerm) {
      setResults([]);
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
        .from("products")
        .select("id, name")
        .ilike("name", `%${searchTerm}%`) // Búsqueda insensible a mayúsculas/minúsculas
        .limit(3); // Límite de resultados

    if (error) console.error(error);
    setResults(data || []);
    setLoading(false);
  }, 500); // Espera 500ms antes de hacer la petición

  // Ejecutar la búsqueda cuando el usuario escriba
  useEffect(() => {
    fetchProducts(query);
  }, [query]);

  return (
      <div className="relative w-full max-w-xs">
        <Input
            type="search"
            placeholder="Buscar"
            value={query}
            icon={<FontAwesomeIcon icon={faSearch} />}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-h-2 border rounded-2xl"
        />

        {query && (
            <div className="absolute left-0 right-0 mt-2 z-50 bg-white border shadow-md max-h-40 overflow-y-auto rounded-lg">
              {loading ? (
                  <div className="p-2 text-center">
                    <FontAwesomeIcon icon={faCircleNotch} className="animate-spin text-primary-300" />
                  </div>
              ) : results.length > 0 ? (
                  <ul>
                    {results.map((product) => (
                        <li key={product.id} className="p-2 hover:bg-gray-100 max-sm:text-caption">
                          {product.name}
                        </li>
                    ))}
                  </ul>
              ) : (
                  <div className="p-2 text-center max-sm:text-caption">
                    No se encontraron resultados
                  </div>
              )}
            </div>
        )}
      </div>
  );
}
