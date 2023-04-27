import Head from "next/head";
import supabase from '../../lib/dbClient'
import View from '../../components/view'
import { Post } from '../../lib/types'

type PostProps = {
  post: Post;
  error: {
    status: number;
    statusText?: string;
  };
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{`MySaves | ${post.title}`}</title>
        <meta name="title" content={`MySaves | ${post.title}`} />
        <meta name="description" content={"MySaves is a web application that allows visitors to submit YouTube videos, see all the submissions, and play the videos submitted by others in a beautiful UI."} />

        <meta property="og:site_name" content="MySaves" />
        <meta property="og:title" content={`MySaves | ${post.title}`} />
        <meta property="og:url" content={`${process.env.VERCEL_URL}/p/${post.id}`} />
        <meta property="og:description" content={"MySaves is a web application that allows visitors to submit YouTube videos, see all the submissions, and play the videos submitted by others in a beautiful UI."} />
        <meta property="og:image" content={post.image} />

        <meta name="twitter:title" content={`MySaves | ${post.title}`} />
        <meta name="twitter:url" content={`${process.env.VERCEL_URL}/p/${post.id}`} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:description" content={"MySaves is a web application that allows visitors to submit YouTube videos, see all the submissions, and play the videos submitted by others in a beautiful UI."} />

        <link rel="image_src" href={post.image} />
        <link as="image" rel="preload" href={post.image} />
        <link rel="canonical" href={`${process.env.VERCEL_URL}/p/${post.id}`} />
      </Head>
      <View post={post} />
    </>
  )
}

type PostContext = {
  params: {
    id: string
  }
}

export async function getServerSideProps({ params: { id } }: PostContext) {

  const { data: post } = await supabase.from('posts')
    .select('*')
    .eq('id', id)
    .single()

  return { props: { post } }
}