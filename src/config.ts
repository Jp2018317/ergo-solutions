// IMAGES BUCKET
export const IMAGES_BUCKET = 'product_images';
export const IMAGES_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${IMAGES_BUCKET}`;
export const PRODUCTS_PER_PAGE = 9;

// socials
export const WHATSAPP_NUMBER = '50314212'

export const TABLE_ROWS = [
  { label: "Modelo", key: "model" },
  { label: "Altura máxima de plataforma (mm)", key: "max_platform_height" },
  { label: "Altura máxima de trabajo (mm)", key: "max_working_height" },
  { label: "Altura máxima de la máquina (mm)", key: "max_machine_height" },
  { label: "Tamaño de la plataforma", key: "platform_size" },
  { label: "Velocidad máxima de conducción descendente (m/s)", key: "max_drive_speed_down" },
  { label: "Velocidad máxima de conducción ascendente (m/s)", key: "max_drive_speed_up" },
  { label: "Radio de giro mínimo (mm)", key: "min_turning_radius" },
  { label: "Capacidad máxima de ascenso (%)", key: "max_climbing_capacity_percent" },
  { label: "Tamaño de las ruedas", key: "wheel_size" },
  { label: "Longitud total (mm)", key: "total_length" },
  { label: "Ancho total (mm)", key: "total_width" },
  { label: "Altura total (mm)", key: "total_height" },
  { label: "Peso total (kg)", key: "total_weight" },
  { label: "Ángulo máximo de inclinación permitido (°)", key: "max_allowable_angle" },
  { label: "Capacidad máxima de ascenso (%)", key: "max_climbing_ability" },
  { label: "Cargador", key: "charger" },
  { label: "Batería", key: "battery" },
  { label: "Distancia mínima al suelo (mm)", key: "min_ground_clearance" },
  { label: "Carga máxima (kg)", key: "load_capacity" },
  { label: "Altura mínima de la plataforma (mm)", key: "min_platform_height" },
  { label: "Motor", key: "motor" },
  { label: "Tiempo de elevación (s)", key: "lifting_time" },
  { label: "Rueda motriz", key: "drive_wheel" },
  { label: "Altura mínima retraída (mm)", key: "min_retracted_height" },
  { label: "Tamaño total", key: "total_size" },
  { label: "Voltaje", key: "voltage" },
  { label: "Capacidad de la plataforma extensible (kg)", key: "extendable_platform_capacity" },
  { label: "Longitud de la plataforma extensible (mm)", key: "extendable_platform_length" },
  { label: "Sistema de protección contra baches", key: "pothole_protection_system" },
  { label: "Altura total plegada (mm)", key: "total_height_folded" },
  { label: "Altura máxima plegada (mm)", key: "max_height_folded" },
  { label: "Tamaño de los neumáticos", key: "tire_size" },
  { label: "Altura máxima de elevación (mm)", key: "max_lifting_height" },
  { label: "Altura total con barandillas extendidas (mm)", key: "total_height_rails_extended" },
  { label: "Altura total con barandillas plegadas (mm)", key: "total_height_rails_folded" },
  { label: "Cobertura del estabilizador", key: "stabilizer_coverage" },
  { label: "Peso neto (kg)", key: "net_weight" },
];

export type RouteNames =
  '/'
  | '/productos';

export type Route = {
  key: string;
  label: string;
  routeName: RouteNames;
};

