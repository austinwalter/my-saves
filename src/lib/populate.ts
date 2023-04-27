import supabase from './dbClient'
import { to, shuffle } from './utils';
import axios from 'axios'
import * as cheerio from 'cheerio';

const urls = [
  'https://www.youtube.com/watch?v=-YUXq_M2pSU',
  'https://www.youtube.com/watch?v=3kjmBf4sWq4',
  'https://www.youtube.com/watch?v=VSKjRMpB_4k',
  'https://www.youtube.com/watch?v=oyHiPbwF_ks',
  'https://www.youtube.com/shorts/U5qMutFgz8A',
  'https://www.youtube.com/watch?v=Eeuo9iWH9DU',
  'https://www.youtube.com/shorts/_RKdWYqgu3Y',
  'https://www.youtube.com/shorts/iiVxaOn0H_k',
  'https://www.youtube.com/watch?v=69mgaaK6E48',
  'https://www.youtube.com/shorts/asHethF_o_M',
  'https://www.youtube.com/shorts/ZqL3qTJJIc4',
  'https://www.youtube.com/watch?v=vrFQkLyGLzc',
  'https://www.youtube.com/watch?v=Qsn7jfCWl98',
  'https://www.youtube.com/shorts/k2YGTSCT0q0',
  'https://www.youtube.com/watch?v=9Gh3hIJ6hoY',
  'https://www.youtube.com/shorts/CRTjZTwIyI0',
  'https://www.youtube.com/shorts/Cjqy1dXdywE',
  'https://www.youtube.com/shorts/wE-cNpIxn40',
  'https://www.youtube.com/watch?v=_wQ9cTUbH7U',
  'https://www.youtube.com/shorts/1iBThaP_TaY',
  'https://www.youtube.com/watch?v=XY76dn6RfJo',
  'https://www.youtube.com/watch?v=7L5xqwkmroo',
  'https://www.youtube.com/shorts/aBzHJDHzCEM',
  'https://www.youtube.com/watch?v=CtjEXoXy2_k',
  'https://www.youtube.com/shorts/xrgcjGIp3HU',
  'https://www.youtube.com/watch?v=Tz7BLRSGMto',
  'https://www.youtube.com/shorts/aTmWUBzntOE',
  'https://www.youtube.com/watch?v=mhNcztyXySM',
  'https://www.youtube.com/shorts/52r4gEIGslc',
  'https://www.youtube.com/shorts/_Ptnlp9QKgw'
]

export default async function populate() {  
  for (const url of urls) {
    const [resp, err] = await to(axios.get(url))

    if (err) {
      if (err.response) {
        console.log(err.response.status)
      } else if (err.request) {
        console.log(err.request)
      } else {
        console.log(err.message)
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

    const { error } = await supabase.from('posts').insert(attrs)

    if (error) console.log(error)
  }
}
