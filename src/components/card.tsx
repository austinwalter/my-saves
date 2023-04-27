import { Post } from '../lib/types'
import Image from 'next/image'

type CardProps = {
  item: Post;
  onClick?: () => void
};

export default function Card({ onClick, item }: CardProps) {
  return (
    <div
      className="bg-white break-inside-avoid px-2 py-2 mb-2 rounded-lg hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="p-1 font-bold">
        {item.title}
      </div>
      <Image
        alt={item.title}
        className="w-full aspect-video p-1 rounded-lg"
        height={item.short ? "512" : "288"}
        width={item.short ? "288" : "512"}
        src={item.image}
      />
    </div>
  )
}
