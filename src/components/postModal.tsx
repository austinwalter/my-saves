import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Button from './button'
import View from './view'
import { Post } from '../lib/types'

type PostModalProps = {
  post?: Post;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function PostModal(props: PostModalProps) {
  const { isOpen, onClose, post } = props
  
  return (
    <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex justify-center">
        <Dialog.Panel className="container mx-auto h-[calc(100vh-3.5rem)] m-14 overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl">
          <Dialog.Title className="border-b border-neutral-100 px-4 py-2 flex justify-between">
            <span className="text-neutral-300">
              {"Dialog Title"}
            </span>
            <Button
              className="text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
              onClick={onClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </Button>
          </Dialog.Title>
          
          <div className="bg-white flex flex-col h-full">
            {post ? <View post={post} /> : null}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}