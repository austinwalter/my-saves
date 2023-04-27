// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import supabase from '../../lib/dbClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import getCursorFeed from '../../lib/cursor'
import { Post, PostResponseData, PostListResponseData } from '../../lib/types'
import { to } from '../../lib/utils';
import axios from 'axios'
import * as cheerio from 'cheerio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostResponseData | PostListResponseData>
) {
  const { body, method } = req

  switch (method) {
    case 'GET':
      const results = await getCursorFeed(req)
      res.status(200).json(results)
      break
    case 'POST':
      if (!body || !body.url) res.status(400)

      const [resp, err] = await to(axios.get(body.url))

      if (err) {
        if (err.response) {
          res.status(err.response.status);
        } else if (err.request) {
          res.status(400)
        } else {
          res.status(400)
        }
      }

      const $ = cheerio.load(resp.data)
      const attrs = {
        short: !!$('link[rel="canonical"]').attr('href')?.includes('shorts'),
        url: $('link[rel="canonical"]').attr('href'),
        title: $('meta[property="og:title"]').attr('content'),
        image: $('meta[property="og:image"]').attr('content'),
        youtube_id: $('meta[itemprop="videoId"]').attr('content'),
        embed_url: $('link[itemprop="embedUrl"]').attr('href')
      }

      const { data, error, status } = await supabase.from('posts').insert(attrs).select()

      if (error || status > 201) res.status(status)
      res.status(status).json({ post: <Post>{...data} })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
