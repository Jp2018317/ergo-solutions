// IMAGES BUCKET
export const IMAGES_BUCKET = 'product_images';
export const IMAGES_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${IMAGES_BUCKET}`;
export const PRODUCTS_PER_PAGE = 6;

// socials
export const WHATSAPP_NUMBER = '50314212'

export const TABLE_ROWS = [
  { label: "Altura máxima de plataforma (m)", key: "max_platform_height" },
  { label: "Altura máxima de trabajo (m)", key: "max_working_height" },
  { label: "Altura máxima de la máquina (m)", key: "max_machine_height" },
  { label: "Tamaño de la plataforma (mm)", key: "platform_size" },
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
  { label: "Cargador (V)", key: "charger" },
  { label: "Batería (v/ah)", key: "battery" },
  { label: "Distancia mínima al suelo (mm)", key: "min_ground_clearance" },
  { label: "Carga máxima (kg)", key: "load_capacity" },
  { label: "Altura mínima de la plataforma (mm)", key: "min_platform_height" },
  { label: "Potencia del motor (kw)", key: "motor" },
  { label: "Tiempo de elevación (s)", key: "lifting_time" },
  { label: "Rueda motriz (Φ)", key: "drive_wheel" },
  { label: "Altura mínima retraída (m)", key: "min_retracted_height" },
  { label: "Tamaño total (mm)", key: "total_size" },
  { label: "Voltaje (V)", key: "voltage" },
  { label: "Capacidad de la plataforma extensible (kg)", key: "extendable_platform_capacity" },
  { label: "Longitud de la plataforma extensible (mm)", key: "extendable_platform_length" },
  { label: "Sistema de protección contra baches", key: "pothole_protection_system" },
  { label: "Altura total plegada (mm)", key: "total_height_folded" },
  { label: "Altura máxima plegada (mm)", key: "max_height_folded" },
  { label: "Tamaño de los neumáticos (Φ)", key: "tire_size" },
  { label: "Altura máxima de elevación (m)", key: "max_lifting_height" },
  { label: "Altura total con barandillas extendidas (m)", key: "total_height_rails_extended" },
  { label: "Altura total con barandillas plegadas (m)", key: "total_height_rails_folded" },
  { label: "Cobertura del estabilizador (m)", key: "stabilizer_coverage" },
  { label: "Peso neto (kg)", key: "net_weight" },
  { label: "Velocidad máxima de conducción descendente con carga completa/vacía (m/s)", key: "descending_speed_full_load_empty" },
  { label: "Ancho de pasillo 1000x1200 palet (mm)", key: "aisle_width_1000x1200_pallet" },
  { label: "Ancho de pasillo 800x1200 palet (mm)", key: "aisle_width_800x1200_pallet" },
  { label: "Capacidad máxima de escalada con carga completa/vacía (%)", key: "climbing_ability_full_load_empty" },
  { label: "Velocidad de conducción con carga completa/vacía (m/s)", key: "driving_speed_full_load_empty" },
  { label: "Velocidad de elevación con carga completa/vacía (m/s)", key: "lifting_speed_full_load_empty" },
  { label: "Altura mínima de elevación (m)", key: "min_height" },
  { label: "Altura máxima de elevación (m)", key: "max_height" },
  { label: "Tiempo de elevación (s)", key: "elevation_time" },
  { label: "Tamaño de base (mm)", key: "base_size" },
  { label: "Número de ventosas", key: "suction_cups_count" },
  { label: "Diámetro de ventosa (mm)", key: "suction_cup_diameter" },
  { label: "Motor de elevación", key: "elevation_motor" },
  { label: "Tamaño de ventosa (mm)", key: "suction_cup_size" },
  { label: "Rotación", key: "rotation" },
  { label: "Inclinación", key: "tilt" },
  { label: "Tamaño del marco de ventosa", key: "suction_cup_frame_size" },
  { label: "Capacidad de una ventosa individual (kg)", key: "single_suction_cup_capacity" },
  { label: "Tamaño máximo de vidrio (mm)", key: "max_glass_size" },
  { label: "Tamaño mínimo de vidrio (mm)", key: "min_glass_size" },
  { label: "Altura vertical (mm)", key: "vertical_height" },
  { label: "Ajuste horizontal (mm)", key: "horizontal_adjustment" },
  { label: "Longitud de esparcidor (mm)", key: "spread_length" },
  { label: "Ancho de esparcidor (mm)", key: "spread_width" },
  { label: "Longitud de hoja (mm)", key: "sheet_length" },
  { label: "Altura de grúa (mm)", key: "crane_height" },
  { label: "Longitud del brazo (mm)", key: "arm_length" },
  { label: "Recorrido de elevación (mm)", key: "lifting_travel" },
  { label: "Tamaño de pieza de trabajo", key: "workpiece_size" },
  { label: "Presión del aire (MPa)", key: "air_pressure" },
  { label: "Energía atómica", key: "atomic_energy" },
  { label: "Tamaño de la máquina (mm)", key: "machine_size" },
  { label: "Velocidad", key: "speed" },
  { label: "Voltaje de control (V)", key: "control_voltage" },
  { label: "Potencia de salida (kw)", key: "output_power" },
  { label: "Ángulo de entrada/salida", key: "input_output_angle" },
  { label: "Panel de control", key: "control_panel" },
  { label: "Altura de viaje (mm)", key: "travel_height" },
  { label: "Altura propia (mm)", key: "own_height" },
  { label: "Tipo de tijera", key: "scissor_type" },
  { label: "Material del marco de plataforma", key: "platform_frame_material" }
];

export type RouteNames =
  '/'
  | '/productos';

export type Route = {
  key: string;
  label: string;
  routeName: RouteNames;
};

