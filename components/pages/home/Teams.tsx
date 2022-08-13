import MainButton from '@/components/MainButton'
import TeamMembers from '@/components/TeamMembers'
import TitleunderLine from '@/components/TitleunderLine'

const Teams = () => {
  return (
    <section id="our-team" className="bg-slate-700 text-slate-100">
      <div className="container mx-auto space-y-8 py-14">
        <div className="w-max mx-auto flex flex-col gap-4">
          <h3 className="font-papyrus text-3xl uppercase">leadership</h3>
          <TitleunderLine />
        </div>
        <TeamMembers />
      </div>
      <div
        className={` bg-black/90 bg-[url("/images/egypt_book.jpeg")] bg-no-repeat bg-cover bg-fixed bg-center bg-blend-overlay flex flex-row justify-center items-center gap-10 py-10`}>
        <MainButton btnName={'Papyrus'} type="link" />
        <MainButton
          btnName={'buy lop'}
          bgColor={'bg-cyan-300'}
          color={'text-amber-600'}
          colorHover={'hover:text-slate-500'}
          fontWeight="sami-bold"
          type="link"
          hrefLink="/sale-round"
        />
      </div>
    </section>
  )
}

export default Teams
