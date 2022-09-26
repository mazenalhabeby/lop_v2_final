import MainButton from "@/components/MainButton"
import WebinarLayout from "@/layouts/WebinarLayout"

export default function Webinar() {
  return (
    <div>
      <div
        className={`h-screen bg-[url('/images/egypt_book.jpeg')] bg-center bg-cover bg-black/95 bg-blend-overlay relative`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" absolute bottom-0 fill-amber-400/40 z-10">
          <path
            fillOpacity="1"
            d="M0,160L120,138.7C240,117,480,75,720,53.3C960,32,1200,32,1320,32L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <div className="z-50 flex flex-row justify-end -space-x-24 h-[95vh] absolute right-8 bottom-0">
          <img src="/images/girl.png" alt="pest" className="z-50" />
          <img src="/images/boy.png" alt="abo" className="z-40 scale-x-[-1]" />
        </div>
        <div className="flex flex-col gap-y-12 p-6 z-50">
          <span className=" uppercase text-9xl font-bold tracking-tighter">
            Leage of pharaohs
          </span>
          <span className=" uppercase text-9xl font-bold tracking-tighter">
            Webinar
          </span>

          <div className="z-50">
            <MainButton
              btnName={"register now"}
              type="button"
              btnWidth=" w-52"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Webinar.getLayout = WebinarLayout
