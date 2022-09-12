import React, {useEffect, useState} from "react"
import {MdExpandLess, MdExpandMore, MdTranslate} from "react-icons/md"
import {useRouter} from "next/router"
import Link from "next/link"

const LangBtn = () => {
  const router = useRouter()

  const {locale} = router

  const currentLang =
    locale === "en-US" ? "ENGLISH" : locale === "ar" ? " العربية " : undefined

  const langauge = [
    {
      code: "en-US",
      name: "ENGLISH",
      country_code: "en",
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "ar",
    },
  ]

  const [open, setOpen] = useState(false)

  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!open) return
    function handleClick(event: {target: any}) {
      //@ts-ignore
      if (anchorRef.current && !anchorRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    // clean up
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  const style = {
    wrapper: `relative`,
    btn__wrapper: `relative cursor-pointer rounded-xl bg-opacity-5 px-2 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:bg-opacity-20`,
    btn__overlay: `absolute top-0 left-0 h-full w-full rounded-xl`,
    icon__size: `w-5 h-5`,
    item: `w-full p-2 text-center transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white`,
  }
  return (
    <div className={style.wrapper}>
      <div
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        className={style.btn__wrapper}
        onClick={handleToggle}>
        <div className={style.btn__overlay}></div>
        <div className="flex flex-row text-center">
          <MdTranslate className={style.icon__size} />
          <p className="px-2">{currentLang}</p>
          {open ? (
            <MdExpandLess className={style.icon__size} />
          ) : (
            <MdExpandMore className={style.icon__size} />
          )}
        </div>
      </div>

      {open && (
        <div
          ref={anchorRef}
          id="menu-list-grow"
          className={`${
            open ? "flex" : "hidden"
          } absolute top-9 left-0 right-0 z-[99] flex-col items-center divide-y divide-yellow-400 rounded-b-lg p-2 shadow-lg bg-slate-800`}>
          {langauge.map((obj) => (
            <Link href={router.asPath} locale={obj.code} key={obj.country_code}>
              <a onClick={handleToggle} className={style.item}>
                {obj.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default LangBtn
