// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, ResponseData } from '../../utils/types'

const posts: Post[] = [
  { id: 1, short: false, srcId: "-YUXq_M2pSU", url: "https://www.youtube.com/watch?v=-YUXq_M2pSU" },
  { id: 2, short: true,  srcId: "ZqL3qTJJIc4", url: "https://www.youtube.com/shorts/ZqL3qTJJIc4" },
  { id: 3, short: false, srcId: "vrFQkLyGLzc", url: "https://www.youtube.com/watch?v=vrFQkLyGLzc" },
  { id: 4, short: true,  srcId: "U5qMutFgz8A", url: "https://www.youtube.com/shorts/U5qMutFgz8A" },
  { id: 5, short: false, srcId: "69mgaaK6E48", url: "https://www.youtube.com/watch?v=69mgaaK6E48" },
  { id: 6, short: true,  srcId: "asHethF_o_M", url: "https://www.youtube.com/shorts/asHethF_o_M" },
  { id: 7, short: false, srcId: "Qsn7jfCWl98", url: "https://www.youtube.com/watch?v=Qsn7jfCWl98" },
  { id: 8, short: true,  srcId: "Cjqy1dXdywE", url: "https://www.youtube.com/shorts/Cjqy1dXdywE" },
  { id: 9, short: false, srcId: "Eeuo9iWH9DU", url: "https://www.youtube.com/watch?v=Eeuo9iWH9DU" },
  { id: 10, short: true, srcId: "_RKdWYqgu3Y", url: "https://www.youtube.com/shorts/_RKdWYqgu3Y" },
  { id: 11, short: false, srcId: "VSKjRMpB_4k", url: "https://www.youtube.com/watch?v=VSKjRMpB_4k" },
  { id: 12, short: true,  srcId: "iiVxaOn0H_k", url: "https://www.youtube.com/shorts/iiVxaOn0H_k" },
  { id: 13, short: false, srcId: "oyHiPbwF_ks", url: "https://www.youtube.com/watch?v=oyHiPbwF_ks" },
  { id: 14, short: true,  srcId: "k2YGTSCT0q0", url: "https://www.youtube.com/shorts/k2YGTSCT0q0" },
  { id: 15, short: false, srcId: "9Gh3hIJ6hoY", url: "https://www.youtube.com/watch?v=9Gh3hIJ6hoY" },
  { id: 16, short: true,  srcId: "CRTjZTwIyI0", url: "https://www.youtube.com/shorts/CRTjZTwIyI0" },
  { id: 17, short: false, srcId: "3kjmBf4sWq4", url: "https://www.youtube.com/watch?v=3kjmBf4sWq4" },
  { id: 18, short: true,  srcId: "_Ptnlp9QKgw", url: "https://www.youtube.com/shorts/_Ptnlp9QKgw" },
  { id: 19, short: false, srcId: "7L5xqwkmroo", url: "https://www.youtube.com/watch?v=7L5xqwkmroo" },
  { id: 20, short: true,  srcId: "aBzHJDHzCEM", url: "https://www.youtube.com/shorts/aBzHJDHzCEM" },
  { id: 21, short: false, srcId: "CtjEXoXy2_k", url: "https://www.youtube.com/watch?v=CtjEXoXy2_k" },
  { id: 22, short: true,  srcId: "wE-cNpIxn40", url: "https://www.youtube.com/shorts/wE-cNpIxn40" },
  { id: 23, short: false, srcId: "_wQ9cTUbH7U", url: "https://www.youtube.com/watch?v=_wQ9cTUbH7U" },
  { id: 24, short: true,  srcId: "1iBThaP_TaY", url: "https://www.youtube.com/shorts/1iBThaP_TaY" },
  { id: 25, short: false, srcId: "XY76dn6RfJo", url: "https://www.youtube.com/watch?v=XY76dn6RfJo" },
  { id: 26, short: true,  srcId: "xrgcjGIp3HU", url: "https://www.youtube.com/shorts/xrgcjGIp3HU" },
  { id: 27, short: false, srcId: "Tz7BLRSGMto", url: "https://www.youtube.com/watch?v=Tz7BLRSGMto" },
  { id: 28, short: true,  srcId: "aTmWUBzntOE", url: "https://www.youtube.com/shorts/aTmWUBzntOE" },
  { id: 29, short: false, srcId: "mhNcztyXySM", url: "https://www.youtube.com/watch?v=mhNcztyXySM" },
  { id: 30, short: true,  srcId: "52r4gEIGslc", url: "https://www.youtube.com/shorts/52r4gEIGslc" }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { query } = req

  const page = parseInt(query.page as string, 10)
  const offset = (page - 1) * 10
  const totalPages = Math.ceil(posts.length / 10);
  const paginatedPosts = posts.slice(offset).slice(0, 10)

  res.status(200).json({
    content: paginatedPosts,
    lastPage: totalPages
  })
}
