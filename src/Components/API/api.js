import axios from "axios";
// Axios əsas konfiqurasiyası
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// GET metodu - Məlumatları çəkmək üçün
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

// POST metodu - Yeni məlumat göndərmək üçün
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};

// PUT metodu - Məlumatı yeniləmək üçün
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("PUT Error:", error);
    throw error;
  }
};

// DELETE metodu - Məlumatı silmək üçün
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("DELETE Error:", error);
    throw error;
  }
};
