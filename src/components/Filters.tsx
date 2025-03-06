import * as React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {MainCategory, SubCategory} from "@utils/types";
import {Button} from "@components/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBroom} from "@fortawesome/free-solid-svg-icons";

export default function Filters({ main_categories, sub_categories, onChange, }: {
    main_categories: MainCategory[] | null;
    sub_categories: SubCategory[];
    onChange: (filters: { main_category: string; sub_category: string, page: string }) => void;
}) {
    const [selectedMainCategory, setSelectedMainCategory] = React.useState("");
    const [selectedSubCategory, setSelectedSubCategory] = React.useState("");

    const handleSubCategoryClick = (mainCategory: string, subCategory: string) => {
        setSelectedMainCategory(mainCategory);
        setSelectedSubCategory(subCategory);
        onChange({ main_category: mainCategory, sub_category: subCategory, page: '1' });
    };

    return (
        <aside className="flex flex-col w-full md:w-80 min-w-64 text-center sm:gap-4">
            <h4 className="max-sm:text-[25px] font-semibold pb-2">Categorías</h4>
            <div className="border border-gray-200 rounded-lg px-4">
                <Accordion type="single" collapsible>
                    {main_categories ? (
                        main_categories.map((category) => (
                            <AccordionItem key={category.id} value={category.id}>
                                <AccordionTrigger className={`${selectedMainCategory === category.name
                                    && 'text-primary-300 !font-semibold underline underline-offset-2'}`}
                                >
                                    {category.name}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {sub_categories
                                        .filter((sub) => sub.main_category_id === category.id)
                                        .map((subcategory) => (
                                            <button
                                                key={subcategory.id}
                                                onClick={() => handleSubCategoryClick(category.name, subcategory.name)}
                                                className={`block w-full text-left text-body2 p-2 hover:bg-gray-100 ${
                                                    selectedMainCategory === category.name && selectedSubCategory === subcategory.name
                                                        && 'text-primary-300 font-semibold underline underline-offset-2'
                                                }`}
                                            >
                                                {subcategory.name}
                                            </button>
                                        ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    ) : (
                        <div className="py-3">No se encontraron categorias</div>
                    )}
                </Accordion>
            </div>
            <Button
                variant='secondary'
                size='sm'
                onClick={() => {
                    setSelectedMainCategory("");
                    setSelectedSubCategory("");
                    onChange({ main_category: "", sub_category: "", page: "1" });
                }}
                className='flex gap-2 items-center justify-center max-md:my-2'
            >
                <FontAwesomeIcon className='text-caption' icon={faBroom} />
                Limpiar filtros
            </Button>
        </aside>
    );
}
