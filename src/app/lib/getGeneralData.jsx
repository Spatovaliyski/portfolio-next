import apiService from "../utils/service";


/**
 * Retreives the basic WP /wp-json data, where some general site info is stored. (Site title, description, icon)
 * @returns {Promise<Array>} An array of objects representing work experience posts.
 */
export default async function getGeneralData() {
  const data = await apiService.getGeneralData();

  /**
   * Pre-define what data we'll use, no mapping needed.
   */
  const formattedData = {
    icon: data.site_icon_url,
    name: data.name,
    description: data.description,
  }

  return formattedData;
}