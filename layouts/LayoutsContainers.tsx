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
        <meta
          name="facebook-domain-verification"
          content="u5h4aw86ylzoqssxtqqgz7hsq72rsj"
        />
        <script
          type="application/javascript"
          src="/components/scripts/FB.js"></script>
        <noscript>
          <img
            height="1"
            width="1"
            //@ts-ignore
            style="display:none"
            src="https://www.facebook.com/tr?id=654574859662239&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      {children}
    </div>
  )
}

export default LayoutsContainers
