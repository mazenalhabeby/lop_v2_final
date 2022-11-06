import ThemesModeBtn from "../ThemesModeBtn"
import Community from "./Community"

export default function NavBar() {
  return (
    <div
      id="main-nav"
      className="flex flex-col container bg-bg-secondary-light dark:bg-bg-secondary-dark shadow-md">
      <div className="flex flex-row gap-2 justify-end px-4 py-1 bg-slate-900 text-white text-sm">
        <h2 className=" uppercase">join the community :</h2>
        <Community isIcon={true} />
      </div>
      <div className="flex flex-row gap-2 py-2 px-4">
        <ThemesModeBtn />
      </div>
    </div>
  )
}
