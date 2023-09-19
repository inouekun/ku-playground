import { type FetchWaifu } from '../../types/api/waifu'
import { apiClient } from '../apiClient'

export const fetchWaifu = async () => {
  const response = await apiClient.get<FetchWaifu>('/sfw/waifu')
  return response.data
}
