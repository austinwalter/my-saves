import { PlusIcon, UserIcon } from '@heroicons/react/20/solid'

export default function Header() {
  return (
    <nav>
      <div className="shrink-0 bg-white border-b border-neutral-100 px-6 py-2 flex justify-between items-center">
        <a className="font-bold text-primary-500 text-xl" href="#">
          MySaves
        </a>
        <div className="block lg:hidden">
          <span className="inline-flex gap-4">
            <button className="flex items-center px-4 py-1 border border-primary-500 bg-primary-500 rounded-full text-white">
              <PlusIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </button>
            <button className="flex items-center px-4 py-1 border border-primary-500 rounded-full text-primary-500">
              <UserIcon
                className="h-5 w-5 text-primary-500"
                aria-hidden="true"
              />
            </button>
          </span>
        </div>
        <div className="hidden lg:block">
          <span className="inline-flex gap-4">
            <button className="hover:bg-neutral-50 border border-neutral-500 rounded-full px-4 py-1 text-neutral-500 tracking-wider">
              {'Add Link'}
            </button>
            <button className="hover:bg-neutral-50 border border-primary-500 rounded-full px-4 py-1 text-primary-500 tracking-wider">
              {'Log In'}
            </button>
          </span>
        </div>
      </div>
    </nav>
  )
}
