import {motion} from "framer-motion"
import Hero from "@/components/pages/home/hero/Hero"
import Partners from "@/components/pages/home/Partners"
import RoadMap from "@/components/pages/home/RoadMap"
import Teams from "@/components/pages/home/Teams"
import Tokenomics from "@/components/pages/home/Tokenomics"
import HomeLayout from "@/layouts/HomeLayout"
import JobAplication from "@/components/JobAplication"
import {useRouter} from "next/router"
import React, {useEffect, useState} from "react"

export default function Home() {
  // const location: any = useRouter()

  // useEffect(() => {
  //   if (location.query.ref) {
  //     localStorage.setItem("refId", location.query.ref)
  //   }
  // }, [location.query])

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  let interval: any

  const startTimer = () => {
    const countDownDate = new Date("jan 19, 2023 20:00:00").getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval])
  const settime = [
    {name: "days", data: days},
    {name: "hours", data: hours},
    {name: "minutes", data: minutes},
    {name: "seconds", data: seconds},
  ]

  return (
    //<motion.div
    //   exit={{opacity: 0}}
    //   initial={{opacity: 0}}
    //   animate={{opacity: 1}}>
    //   <Hero />
    //   <Tokenomics />
    //   <RoadMap />
    //   <Partners />
    //   <Teams />
    //   <JobAplication />
    // </motion.div>
    <div
      className={`bg-[url("/images/background.jpg")] bg-cover bg-top bg-slate-900/80 bg-blend-overlay w-full h-screen flex justify-center items-center`}
    >
      <div className="text-3xl font-aclonica uppercase text-center flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <h1>Updateing For new Website</h1>
          <div className="flex flex-row gap-4">
            <span className="text-2xl font-bold animate-[bounce_1s_ease_infinite]">
              .
            </span>
            <span className="text-2xl font-bold animate-[bounce_1s_ease_infinite_0.1s] ">
              .
            </span>
            <span className="text-2xl font-bold animate-[bounce_1s_ease_infinite_0.2s] ">
              .
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center border-2 border-slate-400 rounded-lg p-4 shadow-lg">
          {settime.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-2"
                key={index}
              >
                <span>{item.data}</span>
                <span className="text-xs">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
//Home.getLayout = HomeLayout
