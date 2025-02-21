import {useEffect, useState} from 'react';
import {Product} from '@utils/types';
import {supabase} from '@/lib/supabase';

export const useFilteredProducts = (initialProducts: Product[]) => {
    const [productsData, setProductsData] = useState<Product[]>(initialProducts);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [filters, setFilters] = useState<{ main_category?: string, sub_category?: string }>({});
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        const fetchFilteredProducts = async () => {
            setIsLoading(true);

            const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('main_category', filters.main_category)
                .eq('sub_category', filters.sub_category);

            if (!error) {
                setProductsData(data);
            }

            setIsLoading(false);
        };

        fetchFilteredProducts();
    }, [filters]);

    return { productsData, isLoading, setFilters };
};
