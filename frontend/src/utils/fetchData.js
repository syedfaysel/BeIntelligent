import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Set your API base URL here
  // You can also add headers, interceptors, etc. here
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error; // You can handle the error as needed
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error; // You can handle the error as needed
  }
};

export const updateData = async (endpoint, data) => {
  try {
    const response = await api.patch(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error; // You can handle the error as needed
  }
};