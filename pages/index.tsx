import {motion} from 'framer-motion'
import Hero from '@/components/pages/home/hero/Hero'
import Partners from '@/components/pages/home/Partners'
import RoadMap from '@/components/pages/home/RoadMap'
import Teams from '@/components/pages/home/Teams'
import Tokenomics from '@/components/pages/home/Tokenomics'
import HomeLayout from '@/layouts/HomeLayout'
import JobAplication from '@/components/JobAplication'
import {useRouter} from 'next/router'
import {useEffect} from 'react'

export default function Home() {
  const location: any = useRouter()

  useEffect(() => {
    if (location.query.ref) {
      localStorage.setItem('refId', location.query.ref)
    }
  }, [location.query])
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <Hero />
      <Tokenomics />
      <RoadMap />
      <Partners />
      <Teams />
      <JobAplication />
    </motion.div>
  )
}
Home.getLayout = HomeLayout
