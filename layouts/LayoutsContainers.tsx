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
      </Head>
      {children}
    </div>
  )
}

export default LayoutsContainers
