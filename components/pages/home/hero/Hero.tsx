import {useViewportScroll} from 'framer-motion'
import dynamic from 'next/dynamic'
import Intro from './Intro'
import Features from './mobile/Features'
import HeroMobile from './mobile/HeroMobile'

const OverView = dynamic(() => import('./OverView'), {ssr: false})

const Hero = () => {
  const {scrollYProgress} = useViewportScroll()
  return (
    <div className="bg-black">
      <div className=" relative w-full hidden xl:block" style={{height: 3500}}>
        <div
          className=" absolute w-full h-full top-0 left-0 z-10"
          style={{height: 3500}}>
          <div className="sticky top-0 overflow-hidden">
            <Intro scrollYProgress={scrollYProgress} />
            <OverView scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
      <div className="xl:hidden">
        <HeroMobile />
        <Features />
      </div>
    </div>
  )
}

export default Hero
