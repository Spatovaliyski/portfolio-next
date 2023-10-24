import apiService from "../utils/service";

export default async function getMedia(id) {
  const data = await apiService.getThumbnail(id);

  return {
    sizes: data.sizes,
    url: data.source_url,
  }
}