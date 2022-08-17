import MainButton from '@/components/MainButton'
import StoresIcon from '@/components/StoresIcon'
import TitleunderLine from '@/components/TitleunderLine'

const HeroMobile = () => {
  return (
    <section style={{height: 'calc(100vh)'}} className=" relative">
      <div className="h-full before:absolute before:inset-0 before:bg-[url('/images/pharaohs-wall.jpg')] before:bg-center before:opacity-80 before:blur-sm before:conttent-['']"></div>
      <div className="absolute top-0 h-full w-full">
        <div className="h-[40%] w-full"></div>
        <div className={`grid grid-rows-2 h-[60%] bg-slate-800 pb-3 2xl:pb-0`}>
          <div className="row-start-2 self-end 2xl:self-center hero_content pt-2">
            <div className="flex flex-col text-center items-center gap-y-5">
              <div className="flex flex-col gap-1">
                <h2 className=" capitalize font-aclonica tracking-wider text-lg">
                  available soon on
                </h2>
                <TitleunderLine />
              </div>
              <div className="flex flex-row gap-6">
                <StoresIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute w-full h-[80%] top-1 flex items-center justify-center">
        <div className="absolute rounded-lg w-full md:w-4/5 h-4/5 md:h-4/5 bg-black">
          <video
            autoPlay={true}
            muted
            preload="metadata"
            playsInline
            loop
            src="/videos/hero-video.mp4"
            data-object-fit="cover"
            data-object-position="center center"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
            className="h-full w-full rounded-lg opacity-70"></video>
        </div>
        <div className="absolute w-[95%] md:w-[78%] h-[83%] md:h-[83%] border-2 rounded-tr-[3rem] rounded-bl-[3rem] border-yellow-600 flex flex-col gap-2 items-center justify-center">
          <div className="flex flex-col text-center gap-2 text-white text-2xl md:text-4xl">
            <h1 className="uppercase font-papyrus font-semibold">
              live as <span className="text-yellow-500 ">a-king</span>
            </h1>
            <span className="uppercase font-papyrus font-semibold">
              fight as <span className="text-yellow-500 ">a-legend</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <MainButton btnName={'Papyrus'} type="link" />
            <MainButton
              btnName={'buy lop'}
              bgColor={'bg-amber-500'}
              colorHover="text-slate-100"
              fontWeight="sami-bold"
              type="link"
              hrefLink="/sale"
            />
          </div>
        </div>
        <div
          className={` absolute bottom-12 py-2 px-4 rounded-t-3xl text-center font-papyrus text-xl leading-loose capitalize tracking-wider bg-[url("/images/papyusPaper.png")] bg-center bg-cover text-black font-semibold shadow-xl`}>
          buy lOP with <br />
          ICO round price
          <div className="text-3xl text-amber-900 animate-bounce">0.025$</div>
        </div>
      </div>
    </section>
  )
}

export default HeroMobile
