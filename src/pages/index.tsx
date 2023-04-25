import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'
import Card from '../components/card'
import Button from '../components/button'
import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { Post, ResponseData } from '../lib/types'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  return res.json()
}

const getKey: SWRInfiniteKeyLoader = (index, previousPageData) => {
  if (
    previousPageData &&
    previousPageData.content &&
    !previousPageData?.content.length
  ) return null
  return `/api/posts?page=${index+1}`
}

export default function Home() {
  const {
    data: response,
    mutate,
    size,
    setSize,
    isValidating,
    isLoading
  } = useSWRInfinite<ResponseData>(getKey, fetcher);

  const data = response && response.map((r) => r.content)
  const items = data ? ([] as Post[]).concat(...data) : [] as Post[]
  const pageSize = (response && response[0].lastPage) || 0
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || !(size && size < pageSize)
  const isRefreshing = isValidating && data && data.length === size

  return (
    <div className="container mx-auto px-6 pt-2">
      <div>
        <Button
          className="px-4 py-2 font-medium text-white bg-primary-500 hover:bg-primary-600 flex justify-center"
          disabled={isRefreshing}
          onClick={() => mutate()}
        >
          {isRefreshing
            ? <ArrowPathIcon className="animate-spin h-5 w-5" />
            : "refresh"}
        </Button>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-2 [column-fill:_balance] box-border before:box-inherit after:box-inherit">
        {isEmpty ? <p>Yay, no issues found.</p> : null}
        {items.map((item) => (
          <Card
            key={item.id}
            srcId={item.youtube_id}
            short={item.short}
          />
        ))}
      </div>
      <div>
        <Button
          className="w-full px-4 py-2 font-medium text-white bg-primary-500 hover:bg-primary-600 flex justify-center"
          disabled={isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoading
            ? <ArrowPathIcon className="animate-spin h-5 w-5" />
            : "load more"}
        </Button>
      </div>
    </div>
  )
}