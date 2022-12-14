import {motion, useTransform} from "framer-motion"
import MainButton from "../../../MainButton"
import styles from "@/styles/components/pages/home/hero/Intro.module.css"
import StoresIcon from "@/components/StoresIcon"
import Image from "next/image"
import liveKey from "@/assets/images/liveKey.png"
import useTranslation from "next-translate/useTranslation"

const title = {
  visible: {opacity: 1, y: 0},
  hidden: {opacity: 0, y: 50},
}

const titleWords = [
  {word: "live"},
  {word: "as", delay: 0.2},
  {word: "a - king", delay: 0.4},
  {word: "&", delay: 0.6},
  {word: "fight", delay: 0.8},
  {word: "as", delay: 1},
  {word: "a - legend", delay: 1.2},
]

const charactersImg = [
  {srcLink: "/images/anobus.png", alt: "anobus", height: 500, width: 250},
  {srcLink: "/images/pharaohs.png", alt: "pharaohs", height: 500, width: 200},
  {srcLink: "/images/horas.png", alt: "horas", height: 500, width: 220},
]

const Intro = ({scrollYProgress}: any) => {
  const {t} = useTranslation("home")
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, 100 * 4])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const btnOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const containerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  return (
    <motion.div
      className={`${styles.wrapper}`}
      style={{opacity: containerOpacity}}>
      <div className={`${styles.container}`}>
        <video
          autoPlay={true}
          muted
          loop
          id="myVideo"
          className={`${styles.video}`}>
          <source src="/videos/fog-effects.mp4" />
        </video>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
          className={`${styles.pharaohs_wrapper}`}>
          <div className={`${styles.pharaohs_container}`}>
            {charactersImg.map((character, i) => {
              return (
                <Image
                  src={character.srcLink}
                  className={`${styles.pharaohs}`}
                  alt={character.alt}
                  key={i}
                  height={character.height}
                  width={character.width}
                  priority
                />
              )
            })}
            <div
              className={`absolute top-0 right-6 py-4 px-4 rounded text-center font-papyrus text-lg leading-loose capitalize tracking-wider bg-[url("/images/papyusPaper.png")] bg-center bg-cover text-black font-semibold shadow-xl`}>
              {t("heroTextAds")} <br />
              {t("heroTextAds2")}
              <div className="text-5xl text-amber-900 animate-bounce">
                0.025$
              </div>
            </div>
            <div className="-mx-12 h-48 flex items-end ">
              <div className="animate-bounce-slow">
                <Image
                  src="/images/livekey.png"
                  width={50}
                  height={90}
                  alt={"lifekey"}
                  priority
                />
              </div>
            </div>

            <motion.div
              className={`${styles.pharaohs_title}`}
              style={{y: titleY, opacity: titleOpacity}}>
              {titleWords.map((word, i) => {
                return (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={title}
                    transition={
                      word.delay
                        ? {duration: 0.5, delay: word.delay}
                        : {duration: 0.5}
                    }
                    key={i}>
                    {word.word}
                  </motion.span>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 90}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 1.4}}
          className=" absolute w-full bottom-52 inset-x-0 flex items-center justify-center z-40 gap-10"
          style={{opacity: btnOpacity}}>
          <MainButton
            btnName={t("whiteBTN")}
            type="link"
            hrefLink="/white-paper"
          />
          <MainButton
            btnName={t("buyBTN")}
            bgColor={"bg-cyan-300"}
            color={"text-slate-900"}
            colorHover={"hover:text-amber-700"}
            fontWeight="sami-bold"
            type="link"
            hrefLink="https://difx.com/login"
          />
          <MainButton
            btnName={"LOP INVEST"}
            bgColor={"bg-cyan-300"}
            color={"text-slate-900"}
            colorHover={"hover:text-amber-700"}
            fontWeight="sami-bold"
            type="link"
            hrefLink="/investing"
          />
        </motion.div>
      </div>
      <div className=" fixed bottom-0 w-full z-20">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 1.4}}
          className="flex flex-col gap-y-2 text-center mx-auto glass_effect w-max p-2 rounded-t-3xl">
          <h4 className=" font-papyrus text-2xl text-slate-900 capitalize">
            {t("availableSoon")}
          </h4>
          <StoresIcon />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Intro
