import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchFox } from '@/api/services/fox'
import { Button } from '@/components/Button'

export function App() {
  const queryClient = useQueryClient()

  const { isFetching, isError, data, error, isLoading } = useQuery({
    queryKey: ['fox'],
    queryFn: fetchFox
  })

  const onRefreshHandler = () => {
    void queryClient.invalidateQueries({ queryKey: ['fox'] })
  }

  if (isError) return <div>Error: {typeof error === 'string' ? error : ''}</div>

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4 items-center">
        <Button className="w-fit" onClick={onRefreshHandler}>
          GET fox
        </Button>

        {isFetching ? (
          <span>fetching now...</span>
        ) : isLoading ? (
          <span>loading now...</span>
        ) : (
          <div className="flex justify-center">
            <img src={data?.image} alt="fox" />
          </div>
        )}
      </div>
    </div>
  )
}
