import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <main className="flex flex-col min-h-screen">
        <Header {...pageProps} />
        <Component {...pageProps} />
      </main>
    </div>
  )
}
