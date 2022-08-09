import {motion} from 'framer-motion'
import Image from 'next/image'

const Loader = () => {
  return (
    <motion.div
      className="h-screen w-full text-white text-center flex flex-col justify-center items-center"
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <div className=" animate-bounce">
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={250}
          height={250}
          priority
        />
      </div>
      <h2 className="text-4xl font-papyrus animate-pulse tracking-widest">
        Loading . . .
      </h2>
    </motion.div>
  )
}

export default Loader
