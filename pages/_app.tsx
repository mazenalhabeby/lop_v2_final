import type {AppProps} from 'next/app'
import {NextPage} from 'next'
import {ReactElement, ReactNode, useState} from 'react'
import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import {Toaster} from 'react-hot-toast'
import {Web3Provider} from '@ethersproject/providers'
import {Web3ReactProvider} from '@web3-react/core'
import {Router} from 'next/router'
import Loader from '@/components/Loader'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  session: any
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function MyApp({
  Component,
  session,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  return (
    <SessionProvider session={session}>
      <Web3ReactProvider getLibrary={getLibrary}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Toaster />
            {getLayout(<Component {...pageProps} />)}
          </>
        )}
      </Web3ReactProvider>
    </SessionProvider>
  )
}
