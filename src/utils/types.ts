export type MainCategory = {
    id: string,
    name: string,
}

export type SubCategory = {
    id: string,
    main_category_id: string,
    name: string,
}

export type Product = {
    id: string,
    name: string,
    description: string
    imgAmmount: number
    main_category: MainCategory
    sub_category: SubCategory
}
