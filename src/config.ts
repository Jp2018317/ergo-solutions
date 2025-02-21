// IMAGES BUCKET
export const IMAGES_BUCKET = 'product_images';
export const IMAGES_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${IMAGES_BUCKET}`;

export type RouteNames =
  '/'
  | '/productos';

export type Route = {
  key: string;
  label: string;
  routeName: RouteNames;
};

