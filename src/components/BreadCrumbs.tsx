"use client";

import * as React from "react";
import {MainCategory, SubCategory} from "@utils/types";
import {Link} from "@components/link";

export type BreadCrumbsProps = {
    main_category: MainCategory;
    sub_category: SubCategory;
}

export default function BreadCrumbs({main_category, sub_category}: BreadCrumbsProps) {
    const params = new URLSearchParams({
        main_category: main_category.name,
        sub_category: sub_category.name
    });

    return (
        <div className='w-full flex max-md:justify-center gap-1.5' >
            <span className='flex items-center text-secondary-400 max-sm:text-caption'>
              {main_category.name}
            </span>
            <span className='flex items-center !font-semibold max-sm:text-caption'>{' > '}</span>
            <Link size='link' variant='subtleLink' href={`/productos?${params.toString()}`} className='!font-semibold px-0 max-sm:text-caption'>
                {sub_category.name}
            </Link>
        </div>
    );
}
