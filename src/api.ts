import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Remplacez par l'URL de votre API Flask

export const getPhotos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/photos`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addPhoto = async (photoData: PhotoData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/photos`, photoData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchPhotos = async (query: string) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/photos/search?q=${query}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

interface PhotoData {
    marque: string;
    chassis: string;
    annee: number;
}

// Ajoutez d'autres fonctions d'appel à l'API selon les besoins
