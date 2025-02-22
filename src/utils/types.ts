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

export type ProductModel = {
    model: string;
    max_platform_height: number;
    max_working_height: number;
    total_length: number;
    total_width: number;
    total_height: number;
    platform_size: string;
    min_ground_clearance: number;
    min_turning_radius: number;
    battery: string;
    charger: string;
    max_climbing_ability: string;
    max_allowable_angle_of_work: number;
    total_weight: number;
}
