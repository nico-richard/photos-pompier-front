import axios from "axios";
import { Photo } from "./interfaces/Photo";
import { Category } from "./interfaces/Category";

const API_BASE_URL = "http://localhost:5000"; // Remplacez par l'URL de votre API Flask

export const getPhotos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/photo`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPhoto = async (photoData: Photo) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/photo`, photoData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCategory = async (categoryData: Category) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/category`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchPhotos = async (query: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/photo/search?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Ajoutez d'autres fonctions d'appel à l'API selon les besoins
