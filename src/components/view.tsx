import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Post } from '../lib/types'
import Sidebar from './sidebar'
import BottomBar from './bottomBar'
import useSWR from 'swr'

type ViewProps = {
  post: Post;
};

const fetcher = (url: string, cursor: number) => (
  fetch(`${url}?cursor=${cursor}&limit=1`)
  .then(res => res.json())
)

export default function View(props: ViewProps) {
  const router = useRouter()
  const { pathname } = router
  const [post, setPost] = useState(props.post)
  const [next, setNext] = useState(props.post.id)
  const [prev, setPrev] = useState(-props.post.id)
  const [cursor, setCursor] = useState(props.post.id)
  const vertStyle = "max-w-[calc((100vh*9/16)-120px)]"
  const { data, error, isLoading } = useSWR(['/api/posts', cursor], ([u, c]) => fetcher(u,c))
  
  useEffect(() => {
    if (data && data.prev !== prev) setPrev(data.prev)
    if (data && data.next !== next) setNext(data.next)
    if (data && data.posts && data.posts[0] !== post) {
      setPost(data.posts[0])
      router.push(pathname, `/p/${data.posts[0].id}`, { shallow: true })  
    }
  }, [data, prev, next, post, router, pathname]);

  const handleUp = () => {
    if (prev > 0) {
      setCursor(prev)
    } else {
      setCursor(next)
    }
  }

  const handleDown = () => {
    if (prev < 0) {
      setCursor(prev)
    } else {
      setCursor(next)
    }
  }
  
  const { short, youtube_id } = post

  return (
    <>
      <div className={`flex-1 grid grid-cols-1 ${short ? "sm:content-center" : "content-center"} sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2 py-6`}>
        <div className={`sm:col-span-2 md:col-span-3 lg:col-span-4 flex-1 w-full ${short ? vertStyle : ""} min-h-0 max-h-full mx-auto`}>
          <div className={`${short ? "aspect-[9/16]" : "aspect-video"}`}>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtube_id}?autoplay=1&mute=1`}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
        <div className="hidden sm:block">
          <Sidebar
            onClickUp={handleUp}
            onClickDown={handleDown}
            next={next}
            prev={prev}
            post={post}
          />
        </div>
      </div>
      <div className="absolute block sm:hidden inset-x-0 bottom-0 h-16 p-2 bg-white border-t border-neutral-100">
        <BottomBar
          onClickUp={handleUp}
          onClickDown={handleDown}
          next={next}
          prev={prev}
          post={post}
        />
      </div>
    </>
  )
}
