import Button from './button'
import { ArrowDownIcon, ArrowUpIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
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
    <div className="flex p-6 border border-neutral-100 bg-white rounded-lg justify-between">
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
  )
}
