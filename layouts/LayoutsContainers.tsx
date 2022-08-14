import {SidebarContextProvider} from '@/context/SidebarContext'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {ChildrenTypeProp} from 'types'

function LayoutsContainers({children}: ChildrenTypeProp) {
  const {locale} = useRouter()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  return (
    <div>
      <Head>
        <title>LEAGUE OF PHARAOHS</title>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WEPC74HGWB"></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-WEPC74HGWB');
        </script>
      </Head>
      {children}
    </div>
  )
}

export default LayoutsContainers
