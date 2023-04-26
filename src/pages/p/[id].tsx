import supabase from '../../lib/dbClient'
import Sidebar from '../../components/sidebar'
import { Post } from '../../lib/types'

type PostProps = {
  post: Post;
  error: {
    status: number;
    statusText?: string;
  };
};

export default function Post({ post }: PostProps) {
  const { short, youtube_id } = post
  const vertStyle = "max-w-[calc((100vh*9/16)-80px)]"

  const handleUp = () => {
    console.log("up")
  }

  const handleDown = () => {
    console.log("down")
  }
  
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
          <Sidebar onClickUp={handleUp} onClickDown={handleDown} />
        </div>
      </div>
      <div className="absolute block sm:hidden inset-x-0 bottom-0 h-16 p-6 bg-white border-t border-neutral-100"></div>
    </>
  )
}

type Context = {
  params: {
    id: string
  }
}

export async function getServerSideProps({ params: { id } }: Context) {
  
  const { data: post } = await supabase.from('posts')
    .select('*')
    .eq('id', id)
    .single()

  return { props: { post } }
}