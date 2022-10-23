import Link from "next/link"
import {useRouter} from "next/router"
import {useEffect} from "react"
import useTranslation from "next-translate/useTranslation"

const DefaultLinks = () => {
  const {asPath} = useRouter()
  const router = useRouter()
  const {t} = useTranslation("common")
  useEffect(() => {
    // Test for the ugliness.
    if (window.location.hash === "#_=_") {
      router.push({pathname: "/sale"})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])

  const defaultLink = [
    {
      linkName: t("papyrusPaper"),
      href: "/white-paper",
    },
    {
      linkName: t("sellRound"),
      href: "/sale",
    },
    {
      linkName: "lop investing",
      href: "/investing",
    },
    {
      linkName: t("yourBalance"),
      href: "/balance",
    },
  ]

  return (
    <div>
      <ul className="flex flex-col lg:flex-row items-center gap-4 ">
        {defaultLink.map((link, i) => {
          return (
            <li
              className="tracking-wide uppercase h-full w-[7.5rem] text-center cursor-pointer"
              key={i}>
              <Link href={link.href}>
                <a
                  className={`${
                    asPath == link.href ? "text-amber-500" : "text-slate-100"
                  }`}>
                  {link.linkName}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DefaultLinks
