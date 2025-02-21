import * as React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Filters({ main_categories, sub_categories, onChange }: {
    main_categories: { id: string; name: string }[],
    sub_categories: { id: string; name: string; main_category_id: string }[],
    onChange: (filters: any) => void
}) {
    return (
        <aside className="flex flex-col w-80 min-w-64 text-center sm:gap-4">
            <h4 className="max-sm:text-[30px]">Categorías</h4>
            <div className="border border-gray-200 rounded-lg p-4">
                <Accordion type="single" collapsible>
                    {main_categories.map((category) => (
                        <AccordionItem key={category.id} value={category.id}>
                            <AccordionTrigger>{category.name}</AccordionTrigger>
                            <AccordionContent>
                                {sub_categories
                                    .filter((sub) => sub.main_category_id === category.id)
                                    .map((subcategory) => (
                                        <button
                                            key={subcategory.id}
                                            onClick={() => onChange({
                                                main_category: category.name,
                                                sub_category: subcategory.name
                                            })}
                                            className="block w-full text-left text-body2 p-2 hover:bg-gray-100"
                                        >
                                            {subcategory.name}
                                        </button>
                                    ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </aside>
    );
}
