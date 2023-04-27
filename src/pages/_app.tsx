import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import PostModal from '../components/postModal'
import Modal from '../components/modal'
import { Post } from '../lib/types'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false)
  const [isPostModalOpen, setPostModalOpen] = useState(false)
  const [post, setPost] = useState<Post | undefined>(undefined)

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const closePostModal = () => {
    setPostModalOpen(false)
    setPost(undefined)
    const { pathname } = router
    router.push(pathname, pathname, { shallow: true })
  }

  const openPostModal = (p: Post) => {
    setPostModalOpen(true)
    setPost(p)
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      <main className="flex flex-col min-h-screen">
        <Header openModal={openModal} />
        <Component {...pageProps} openModal={openPostModal} />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          post={post}
        />
        <PostModal
          isOpen={isPostModalOpen}
          onClose={closePostModal}
          post={post}
        />
      </main>
    </div>
  )
}
