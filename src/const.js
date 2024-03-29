// URLs
const API_URL = "http://localhost:5006";
const LOGIN_URL = `${API_URL}/profiles`;
const FIGURES_URL = `${API_URL}/figures`;
const PROFILES_URL = `${API_URL}/profiles`;
const CART_URL = `${API_URL}/cart`;
const HISTORY_URL = `${API_URL}/history`;
const DELIVERY_URL = `${API_URL}/delivery`;
const PAYMENT_URL = `${API_URL}/payment`;

// DIRECTORIES
const ASSETS_DIR = "/assets";
const FIGURES_DIR = `${ASSETS_DIR}/figures`;
const ICONS = "http://localhost:3000/assets/icons/"
const IMAGES_CATALOG = "http://localhost:3000/assets/figures/"

const RUPIAH = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

export {
  API_URL,
  FIGURES_URL,
  PROFILES_URL,
  CART_URL,
  ASSETS_DIR,
  FIGURES_DIR,
  LOGIN_URL,
  ICONS,
  IMAGES_CATALOG,
  RUPIAH,
  HISTORY_URL,
  DELIVERY_URL,
  PAYMENT_URL
}
