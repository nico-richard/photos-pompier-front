import axios from 'axios'
import { Vehicle } from './interfaces/Vehicle'
import { Category } from './interfaces/Category'
import { Vue } from './interfaces/Vues'
const API_BASE_URL = 'http://localhost:5000' // Remplacez par l'URL de votre API Flask

export const getVehicles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vehicles`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const addVehicle = async (vehicleData: Vehicle) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/vehicle`, vehicleData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteVehicle = async (vehicle_id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/vehicle/${vehicle_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const addCategory = async (categoryData: Category) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/category`, categoryData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getVuesByVehicleId = async (vehicle_id: number) => {
  try {
    const response = await axios.get<Vue[]>(`${API_BASE_URL}/vue/${vehicle_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getPhotosNameToAdd = async () => {
  try {
    const response = await axios.get<string[]>(`${API_BASE_URL}/photos-to-add`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const addVue = async (vueData: Vue) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/vue`, vueData)
    return response.data
  } catch (error) {
    throw error
  }
}