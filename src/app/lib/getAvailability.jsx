import apiService from "../utils/service";
import he from 'he';

/**
 * Retrieves work work availability from the rest api.
 * @returns {Promise<Array>} An array of objects representing work experience posts.
 */
export default async function getAvailability() {
  const data = await apiService.getAvailability();
  
  return data;
}