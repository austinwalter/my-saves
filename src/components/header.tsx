import { PlusIcon } from '@heroicons/react/20/solid'

type HeaderProps = {
  openModal: () => void;
};

export default function Header(props: HeaderProps) {
  return (
    <nav>
      <div  className="shrink-0 bg-white border-b border-neutral-100 h-14 px-6 py-2 flex justify-between items-center">
        <a className="font-bold text-primary-500 text-xl" href="#">
          MySaves
        </a>
        <div className="block lg:hidden">
          <span className="inline-flex gap-4">
            <button
              className="flex items-center px-4 py-1 border border-primary-500 bg-primary-500 rounded-full text-white"
              onClick={props.openModal}
            >
              <PlusIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </button>
          </span>
        </div>
        <div className="hidden lg:block">
          <span className="inline-flex gap-4">
            <button
              className="hover:bg-neutral-50 border border-primary-500 rounded-full px-4 py-1 text-primary-500 tracking-wider"
              onClick={props.openModal}
            >
              {'Add Link'}
            </button>
          </span>
        </div>
      </div>
    </nav>
  )
}

