import Button from './button'
import { ArrowDownIcon, ArrowUpIcon, ArrowTopRightOnSquareIcon, TrashIcon, ShareIcon } from '@heroicons/react/20/solid'
import { Post } from '../lib/types'

type SidebarProps = {
  onClickUp: () => void;
  onClickDown: () => void;
  next: number;
  prev: number;
  post: Post;
};

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="p-6 border border-neutral-100 bg-white rounded-lg">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            className="border border-neutral-300 p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
            onClick={props.onClickDown}
            disabled={props.prev > 0 && props.next === 0}
          >
            <ArrowDownIcon className="h-5 w-5" />
          </Button>
          <Button
            className="border border-neutral-300 p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
            onClick={props.onClickUp}
            disabled={props.next > 0 && props.prev === 0}
          >
            <ArrowUpIcon className="h-5 w-5" />
          </Button>
        </div>
        <a
          className="p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
          target="_blank"
          href={props.post.url}
          rel="noopener noreferrer"
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </div>
      <div className="p-2">
        {props.post.title}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            className="p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
          >
            <TrashIcon className="h-5 w-5" />
          </Button>
        </div>
        <Button
          className="p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
          onClick={() => {navigator.clipboard.writeText(`${process.env.VERCEL_URL}/p/${props.post.id}`)}}
          >
          <ShareIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
