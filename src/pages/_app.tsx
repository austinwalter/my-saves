import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Modal from '../components/modal'
import { Post } from '../lib/types'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  const [isModalOpen, setModalOpen] = useState(false)
  const [post, setPost] = useState<Post | undefined>(undefined)

  const closeModal = () => {
    setModalOpen(false)
    setPost(undefined)
    router.push(pathname, pathname, { shallow: true })
  }

  const openModal = (p: Post) => {
    setModalOpen(true)
    setPost(p)
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      <main className="flex flex-col min-h-screen">
        <Header />
        <Component {...pageProps} openModal={openModal} />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          post={post}
        />
      </main>
    </div>
  )
}
