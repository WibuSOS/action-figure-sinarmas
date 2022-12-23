// URLs
const API_URL = "http://localhost:5006";
const LOGIN_URL = `${API_URL}/profiles`;
const FIGURES_URL = `${API_URL}/figures`;

// DIRECTORIES
const ASSETS_DIR = "/assets";
const FIGURES_DIR = `${ASSETS_DIR}/figures`;
const ICONS = "http://localhost:3000/assets/icons/"
const IMAGES_CATALOG = "http://localhost:3000/assets/figures/"

const RUPIAH = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
}
export { API_URL, FIGURES_URL, ASSETS_DIR, FIGURES_DIR, ICONS, IMAGES_CATALOG, RUPIAH }
