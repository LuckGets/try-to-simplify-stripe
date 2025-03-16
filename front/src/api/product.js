import axios from "../configs/axios";

/**
 *
 * @param {string} endpoint
 * @returns {string} url
 */
function formatProductEndpoint(endpoint) {
  const baseUrl = "/products";
  if (!endpoint) return baseUrl;
  return `${baseUrl}${endpoint}`;
}

const productsApi = {
  getManyProducts() {
    return axios.get(formatProductEndpoint());
  },
};

export default productsApi;
