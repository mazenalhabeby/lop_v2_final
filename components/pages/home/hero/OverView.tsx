import styles from '@/styles/components/pages/home/hero/Oveiw.module.css'
import {motion, useTransform} from 'framer-motion'
import {useEffect, useState} from 'react'

const OverView = ({scrollYProgress}: any) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const [leftDoorMovmentOpen, setLeftDoorMovmentOpen] = useState(0)
  const [leftDoorMovmentClose, setLeftDoorMovmentClose] = useState(0)

  const [rightDoorMovmentOpen, setRightDoorMovmentOpen] = useState(0)
  const [rightDoorMovmentClose, setRightDoorMovmentClose] = useState(0)

  const [doorsHight, setDoorsHight] = useState(0)
  const [doorsPosition, setdoorsPosition] = useState<any>()

  const containerscale = useTransform(scrollYProgress, [0, 0.2], [3.3, 1])
  const rightDoor = useTransform(
    scrollYProgress,
    [0.25, 0],
    [rightDoorMovmentClose, rightDoorMovmentOpen]
  )
  const LeftDoor = useTransform(
    scrollYProgress,
    [0.25, 0],
    [leftDoorMovmentClose, leftDoorMovmentOpen]
  )
  const contentOpactiy = useTransform(scrollYProgress, [0.28, 0.32], [0, 1])
  function handleResize() {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    setDoorsHight(
      screenWidth == 1280 ? screenWidth * 0.00072 : screenWidth * 0.00072
    )
    setdoorsPosition(
      screenWidth == 1280
        ? screenWidth * 0.13
        : screenWidth >= 1360 && screenWidth <= 1439
        ? screenWidth * 0.14
        : screenWidth >= 1440 && screenWidth <= 1535
        ? screenWidth * 0.145
        : screenWidth >= 1536 && screenWidth <= 1599
        ? screenWidth * 0.152
        : screenWidth >= 1600 && screenWidth <= 1679
        ? screenWidth * 0.158
        : screenWidth >= 1680 && screenWidth <= 1792
        ? screenWidth * 0.161
        : screenWidth >= 1793 && screenWidth <= 1919
        ? screenWidth * 0.168
        : screenWidth >= 1920 && screenWidth <= 2559
        ? screenWidth * 0.173
        : screenWidth >= 2560
        ? screenWidth * 0.195
        : screenWidth * 0.13
    )

    setRightDoorMovmentOpen(
      screenWidth == 1280 ? screenWidth * 0.7 : screenWidth * 0.7
    )
    setRightDoorMovmentClose(
      screenWidth == 1280
        ? screenWidth * 0.475
        : screenWidth >= 1360 && screenWidth <= 1439
        ? screenWidth * 0.48
        : screenWidth >= 1440 && screenWidth <= 1535
        ? screenWidth * 0.484
        : screenWidth >= 1536 && screenWidth <= 1599
        ? screenWidth * 0.49
        : screenWidth >= 1600 && screenWidth <= 1679
        ? screenWidth * 0.493
        : screenWidth >= 1680 && screenWidth <= 1792
        ? screenWidth * 0.497
        : screenWidth >= 1793 && screenWidth <= 1919
        ? screenWidth * 0.501
        : screenWidth >= 1920 && screenWidth <= 2559
        ? screenWidth * 0.506
        : screenWidth >= 2560
        ? screenWidth * 0.523
        : screenWidth * 0.475
    )

    setLeftDoorMovmentOpen(
      screenWidth == 1280 ? screenWidth * 0.16 : screenWidth * 0.1
    )

    setLeftDoorMovmentClose(
      screenWidth == 1280
        ? screenWidth * 0.332
        : screenWidth >= 1360 && screenWidth <= 1439
        ? screenWidth * 0.336
        : screenWidth >= 1440 && screenWidth <= 1535
        ? screenWidth * 0.342
        : screenWidth >= 1536 && screenWidth <= 1599
        ? screenWidth * 0.346
        : screenWidth >= 1600 && screenWidth <= 1679
        ? screenWidth * 0.348
        : screenWidth >= 1680 && screenWidth <= 1792
        ? screenWidth * 0.352
        : screenWidth >= 1793 && screenWidth <= 1919
        ? screenWidth * 0.356
        : screenWidth >= 1920 && screenWidth <= 2559
        ? screenWidth * 0.361
        : screenWidth >= 2560
        ? screenWidth * 0.376
        : screenWidth * 0.332
    )

    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleResize])

  return (
    <div>
      <motion.div
        className={`${styles.wrapper}`}
        style={{scale: containerscale}}>
        <div className={`${styles.container}`}>
          <div className="flex flex-row">
            <motion.img
              src="/images/leftDoor.png"
              className={` absolute `}
              style={{
                left: LeftDoor,
                scale: doorsHight,
                top: doorsPosition,
              }}
            />
            <motion.img
              src="/images/rightDoor.png"
              className={` absolute `}
              style={{
                left: rightDoor,
                scale: doorsHight,
                top: doorsPosition,
              }}
            />
          </div>
        </div>
        <motion.div
          className="absolute inset-0 flex items-center max-w-7xl mx-auto"
          style={{opacity: contentOpactiy}}>
          <div className="grid grid-cols-12 px-6 gap-8">
            <p className={`${styles.text_wrapper} text-black`}>
              Engage in epic 5v5 strategic warfare in League of Pharaohs. Your
              goal? Destroy the opposing team's Beacon of Power. Sounds easy?!
              Maybe... Do you work as a team? Do you use terrain to your
              advantage? Do you strategically ambush the enemy? Do you gather
              gold and upgrade your pharaohs? Your skill, teamwork, wit, and
              determination shall decide whether you return home a hero, or in a
              coffin...
            </p>

            <iframe
              src="https://www.youtube.com/embed/A-Y4iHUpurU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-tr-[2rem] rounded-bl-[2rem] outline outline-offset-8 outline-2 outline-yellow-600 dark:outline-yellow-500 col-span-6 justify-self-center w-full h-full"></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default OverView
