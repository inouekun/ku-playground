import { apiClient } from '@/api/apiClient'
import { type FetchWaifu } from '@/types/api/waifu'

export const fetchWaifu = async () => {
  const response = await apiClient.get<FetchWaifu>('/sfw/waifu')
  return response.data
}
