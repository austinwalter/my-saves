import Button from './button'
import { ArrowDownIcon, ArrowUpIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

type SidebarProps = {
  onClickUp: () => void;
  onClickDown: () => void;
};

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="flex p-6 border border-neutral-100 bg-white rounded-lg justify-between">
      <div className="flex gap-2">
        <Button
          className="border border-neutral-300 p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
          onClick={props.onClickDown}
        >
          <ArrowDownIcon className="h-5 w-5" />
        </Button>
        <Button
          className="border border-neutral-300 p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
          onClick={props.onClickUp}
        >
          <ArrowUpIcon className="h-5 w-5" />
        </Button>
      </div>
      <Button
        className="p-3 text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
      >
        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
      </Button>
    </div>
  )
}