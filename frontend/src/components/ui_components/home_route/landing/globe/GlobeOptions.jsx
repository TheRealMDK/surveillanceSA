export const ENABLE_HELPERS = false;

// GLOBE

export const GLOBE_SIZE = 1;
export const GLOBE_ORBIT_CONTROL_MIN_DIST = 1.7;
export const GLOBE_ORBIT_CONTROL_MAX_DIST = 1.7;
export const GLOBE_INITIAL_ANIMATION_SPEED = 1;
export const GLOBE_INITIAL_ANIMATION_DURATION = 8;

// PINS

export const SHOW_PINS = true;
export const PIN_RADIUS = 0.005;
export const DISTANCE_FROM_GLOBE_CENTER_RADIUS = 1.01;

export const DEFAULT_TRAVEL_PATH = [
  { name: "Dublin", lat: 53.3498, lon: 6.2603 },
  { name: "Bloemfontein", lat: -29.1129, lon: 26.2149 },
];

export const TRAVEL_PATH = [
  { name: "Dublin", lat: 53.3498, lon: 6.2603 },
  { name: "Bloemfontein", lat: -29.1129, lon: 26.2149 },
];

export const PINS = [
  { name: "Bhisho", lat: -32.8483, lon: 27.4356 },
  { name: "Bloemfontein", lat: -29.1129, lon: 26.2149 },
  { name: "Cape Town", lat: -33.9249, lon: 18.4241 },
  { name: "Durban", lat: -29.8587, lon: 31.0218 },
  { name: "Johannesburg", lat: -26.2056, lon: 28.0337 },
  { name: "Kimberly", lat: -28.7435, lon: 24.7626 },
  { name: "Mahikeng", lat: -25.8582, lon: 25.621 },
  { name: "Mbombela", lat: -25.4753, lon: 30.9694 },
  { name: "Mossel Bay", lat: -34.1836, lon: 22.1244 },
  { name: "Pietermaritzburg", lat: -29.6015, lon: 30.379 },
  { name: "Polokwane", lat: -23.8981, lon: 29.45 },
  { name: "Pretoria", lat: -25.7566, lon: 28.1914 },
];

// CLOUDS
export const SHOW_CLOUDS = false;
export const CLOUD_MESH_SIZE = 1.01;
export const CLOUD_ROTATION_SPEED = 0.0005;
export const CLOUD_TRANSPARENCY = true;
export const CLOUD_OPACITY = 0.45;

// LIGHTS
export const AMBIENT_LIGHT_COLOR = 0x009a99;
export const DIRECTIONAL_LIGHT_COLOR = "#009a99"; //0x009a99;
export const CHANGE_AMBIENT_LIGHT_COLOR = false;
export const CHANGE_DIRECTIONAL_LIGHT_COLOR = true;
export const DIRECTIONAL_LIGHT_INTENSITY = 10;
export const AMBIENT_LIGHT_INTENSITY = 0.5;
export const DISTANCE_FROM_CAMERA = 5;

// GRID

export const SHOW_GRID = true;
export const TOTAL_GRID_LAT_LINES = 48;
export const TOTAL_GRID_LON_LINES = 96;
export const GRID_LINE_RADIUS = 1.002; //1.02
export const GRID_ROTATION_SPEED = 0; //0.0005;
export const GRID_LINE_COLOR = "#009a99";
export const GRID_LINE_TRANSPARENCY = true;
export const GRID_LINE_OPACITY = 0.5;
