import JobAplication from '@/components/JobAplication'
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
      <JobAplication />
    </section>
  )
}

export default Teams
