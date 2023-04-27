import { useRouter } from 'next/router'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'
import Card from '../components/card'
import Button from '../components/button'
import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { Post, PostListResponseData } from '../lib/types'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  return res.json()
}

const getKey: SWRInfiniteKeyLoader = (index, prevData) => {
  if (prevData && (!prevData.next || !prevData.posts)) return null

  if (index === 0) return '/api/posts'

  return `/api/posts?cursor=${prevData.next}`
}

type HomeProps = {
  openModal: (post: Post) => void;
};

export default function Home({ openModal }: HomeProps) {
  const router = useRouter()
  const { pathname } = router
  
  const loadPost = (post: Post) => {
    openModal(post)
    router.push(pathname, `/p/${post.id}`, { shallow: true })
  }

  const {
    data: response,
    mutate,
    size,
    setSize,
    isValidating,
    isLoading
  } = useSWRInfinite<PostListResponseData>(getKey, fetcher);

  const data = response && response.map((r) => r.posts)
  const items = data ? ([] as Post[]).concat(...data) : [] as Post[]
  const next = response?.[response.length-1]?.next
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || !next
  const isRefreshing = isValidating && data && data.length === size

  return (
    <div className="container mx-auto px-6 pt-2">
      <div className="py-2">
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
      <div className="container mx-auto text-center">
        {isEmpty ? "No Saves Yet" : null}
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-2 [column-fill:_balance] box-border before:box-inherit after:box-inherit">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            onClick={() => loadPost(item)}
          />
        ))}
      </div>
      <div className="py-4">
        <Button
          className="w-full px-4 py-2 font-medium text-white bg-primary-500 hover:bg-primary-600 flex justify-center"
          disabled={isLoading || isReachingEnd}
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