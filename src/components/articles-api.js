import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = 'QtOocgwAsMRnNrfxO03A2yDHR41drrw-3ZPHK3EEWSI';

export const fetchImages = async (topic, currentPage) => {
    try {
        const res = await axios.get(`search/photos`, {
            params: {
                query: topic,
                page: currentPage,
                per_page: 10,
            },
            headers: {
                Authorization: `Client-ID ${API_KEY}`,
            },
        });
        console.log(res.data);
        return res.data.results.map((image) => ({
            id: image.id,
            url: image.urls.small,
            alt_description: image.alt_description,
        }));
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};