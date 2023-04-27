import supabase from './dbClient'
import type { NextApiRequest } from 'next'
import { Post } from './types'

export default async function getCursorFeed(req: NextApiRequest) {
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
  const next = dataEnd ? 0
    : dir ? data[data.length-1].id : -data[posts.length-1].id

  return {
    posts,
    next,
    prev: -cursor,
    limit,
  }
}
