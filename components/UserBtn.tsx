import {signOut, useSession} from "next-auth/react"
import Link from "next/link"
import {useEffect, useRef, useState} from "react"
import {BsThreeDotsVertical} from "react-icons/bs"

const UserBtn = () => {
  const {data: session} = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  const dropdown = useRef<any>(null)

  const userLinks = [
    {linkName: "your balance", linkHref: "/balance", type: "link"},
    {linkName: "your invest", linkHref: "/investing-balance", type: "link"},
    {linkName: "sign out", type: "button"},
  ]

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showDropdown) return
    function handleClick(event: {target: any}) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    // clean up
    return () => document.removeEventListener("mousedown", handleClick)
  }, [showDropdown])

  return (
    <>
      {session?.user && (
        <div
          onClick={() => {
            setShowDropdown((b) => !b)
          }}
          className="flex flex-row items-center justify-center gap-2 nm-flat-slate-800-lg py-1 px-3 rounded-full relative cursor-pointer">
          <h4 className=" font-papyrus capitalize tracking-wider">
            welcome! {session.user.name?.split(" ").slice(0, 2).join(" ")}
          </h4>
          <div className=" nm-inset-slate-800 p-1 rounded-full">
            <BsThreeDotsVertical />
          </div>
          {showDropdown && (
            <div
              ref={dropdown}
              className=" absolute left-0 right-0 mx-auto top-10 w-max bg-slate-800 rounded-b-2xl flex flex-col justify-center items-center py-2 shadow-xl divide-y divide-amber-600">
              {userLinks.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="px-4 py-2 hover:text-amber-500 capitalize font-papyrus">
                    {item.type == "link" && (
                      //@ts-ignore
                      <Link href={item.linkHref}>
                        <a>{item.linkName}</a>
                      </Link>
                    )}
                    {item.type == "button" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault
                          signOut({callbackUrl: `${window.location.origin}`})
                        }}
                        className={
                          " nm-flat-slate-800 rounded-lg px-4 py-2 capitalize"
                        }>
                        {item.linkName}
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default UserBtn
