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
        <meta itemProp="name" content={`MySaves | ${post.title}`} />
        <meta itemProp="og:title" content={`MySaves | ${post.title}`} />
        <meta itemProp="description" content={"MySaves is a web application that allows visitors to submit YouTube videos, see all the submissions, and play the videos submitted by others in a beautiful UI."} />
        <meta itemProp="og:description" content={"MySaves is a web application that allows visitors to submit YouTube videos, see all the submissions, and play the videos submitted by others in a beautiful UI."} />
        <meta itemProp="image" content={post.image} />
        <meta itemProp="og:image" content={post.image} />
        <meta itemProp="og:url" content={`${process.env.VERCEL_URL}/p/${post.id}`} />
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