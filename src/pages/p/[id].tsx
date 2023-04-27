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
        <title>{post.title} | MySaves</title>
        <meta itemProp="name" content={post.title} />
        <meta itemProp="image" content={post.image} />
        <meta itemProp="image" content={post.image} />
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