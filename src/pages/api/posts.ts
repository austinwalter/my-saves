// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import supabase from '../../lib/dbClient';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, ResponseData } from '../../lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { query } = req

  const page = parseInt(query.page as string, 10)
  const offset = (page - 1) * 10

  const { data, count } = await supabase.from('posts')
    .select('*', { count: 'exact' })
    .range(offset, offset+10)
    .limit(10)

  const posts: Post[] = data ? data.map((entry) => (
    <Post>{
      id: entry.id,
      insertedAt: entry.inserted_at,
      updatedAt: entry.updated_at,
      short: entry.short,
      url: entry.url,
      youtubeId: entry.youtube_id,
    }
  )) : [] as Post[]

  const totalPages = count ? Math.ceil(count / 10) : 0;

  res.status(200).json({
    content: posts,
    lastPage: totalPages
  })
}
