// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import supabase from '../../lib/dbClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, PostListResponseData } from '../../lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostListResponseData>
) {
  const { query } = req

  const cursor = parseInt(query.cursor as string, 10) || 0
  const limit = parseInt(query.limit as string, 10)   || 10

  const dir = (cursor >= 0)
  const id = dir ? cursor : -cursor

  const baseQuery = supabase.from('posts')
    .select('*')
    .order('id', { ascending: dir })
    .limit(limit+1)

  const cursorQuery = dir ? baseQuery.gte('id', id) : baseQuery.lt('id', id)
  const dbQuery = cursor == 0 ? baseQuery : cursorQuery
  const { data: raw } = await dbQuery

  const data: Post[] = raw ? raw.map(p => <Post>{...p}) : [] as Post[]
  const dataEnd: boolean = data.length < limit+1
  const posts: Post[] = dataEnd ? data : data.slice(0, -1)
  const next = dir ? data[data.length-1].id : -data[posts.length-1].id

  res.status(200).json({
    posts,
    next: dataEnd ? 0 : next,
    prev: -cursor,
    limit,
  })
}
