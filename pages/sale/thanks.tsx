import DefaultLayout from '@/layouts/DefaultLayout'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {BsCheckLg} from 'react-icons/bs'

export default function Thanks() {
  const router = useRouter()
  console.log(router.query.isBuy)

  useEffect(() => {
    if (!router.query || !router.query.isBuy) {
      router.push('/sale')
    }
  }, [])
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <div
        className="pt-24 pb-12 px-2 flex flex-col justify-around items-center "
        style={{minHeight: 'calc(100vh - 13.1rem)'}}>
        <div className="bg-green-600 p-2 rounded-full">
          <BsCheckLg className="text-3xl" />
        </div>
        <h2 className=" font-papyrus font-semibold text-3xl text-center leading-loose tracking-widest capitalize">
          Thank you for purchasing the LOP Tokens.
          <br /> You can check your balance in your personal account
        </h2>
        <Link href={'/balance'}>
          <a className="bg-amber-600 text-xl font-papyrus font-semibold tracking-widest uppercase p-3 rounded-lg shadow-lg">
            your balance
          </a>
        </Link>
      </div>
    </motion.div>
  )
}
Thanks.getLayout = DefaultLayout
