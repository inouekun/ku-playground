import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchWaifu } from './api/services/waifu'

export function App() {
  const queryClient = useQueryClient()

  const { isFetching, isError, data, error } = useQuery({
    queryKey: ['waifu'],
    queryFn: fetchWaifu,
    refetchOnWindowFocus: false
  })

  const onRefreshHandler = () => {
    void queryClient.invalidateQueries({ queryKey: ['waifu'] })
  }

  // return null

  if (isFetching) return <div>Loading...</div>
  if (isError) return <div>Error: {typeof error === 'string' ? error : ''}</div>

  return (
    <div className="flex flex-col">
      <button type="button" onClick={onRefreshHandler}>
        Refresh
      </button>
      <div className="flex">
        <img src={data?.url} alt="" className="object-contain w-60 h-60" />
      </div>
    </div>
  )
}
