import { useForm, SubmitHandler } from "react-hook-form";
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Button from './button'
import { Post } from '../lib/types'
import axios from 'axios'
import { to } from '../lib/utils'
import { ArrowPathIcon } from '@heroicons/react/20/solid'

type ModalProps = {
  post?: Post;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

type Inputs = {
  url: string,
};

export default function Modal(props: ModalProps) {
  const { isOpen, onClose, post } = props
  const { register, handleSubmit, reset, setError, formState } = useForm<Inputs>()
  const { isSubmitting, errors } = formState

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const [response, error] = await to(axios.post('/api/posts', data))

    if (error) {
      setError('root.serverError', {
        type: error.code,
        message: error.message
      })
    }

    reset()
    onClose()
  }

  return (
    <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="border mx-auto max-w-xl rounded-lg bg-white">
          <Dialog.Title className="border-b border-neutral-100 px-4 py-2 flex justify-between">
            <span className="text-neutral-300">
              {"Submit Url"}
            </span>
            <Button
              className="text-neutral-300 bg-white hover:bg-neutral-100 flex justify-center"
              onClick={onClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </Button>
          </Dialog.Title>
          
          <div className="bg-white p-6">
              <form
                className="flex justify-between gap-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="block grow">
                  <input
                    type="url"
                    className="mt-1 block w-full rounded-full border-neutral-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    placeholder="https://www.youtube.com/watch?v=xxxxxxxxxxx"
                    {...register("url", { required: true })}
                    
                  />
                </label>
                <Button
                  className="px-4 py-2 font-medium text-white bg-primary-500 hover:bg-primary-600"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? <ArrowPathIcon className="animate-spin h-5 w-5" />
                    : "Submit"}
                </Button>
              </form>
              {errors.url && <span className="text-red-500">
                {"This field is required"}
              </span>}
              {errors?.root?.serverError && <span className="text-red-500">
                {errors.root.serverError.message}
              </span>}
        </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}