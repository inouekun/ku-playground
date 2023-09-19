import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => config,
  async (error) => await Promise.reject(error)
)

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => await Promise.reject(error)
)
