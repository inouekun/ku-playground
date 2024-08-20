import { apiClient } from '@/api/apiClient'
import { type FetchFoxResponse } from '@/types/api/fox'

export const fetchFox = async () => {
  const response = await apiClient.get<FetchFoxResponse>('/floof')
  return response.data
}
