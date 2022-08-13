import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import Image from 'next/image'

const pharaohsList = [
  {
    image: '/images/white-paper/bastlack.webp',
    title: 'Bastlack',
    details:
      'bastlack is quite a mystery, rumor has it that this maiden is an avatar of Bastet. To the naked eye, bastlack is a woman of unrivaled beauty, and therein lies her power. Both a fighter and a lover, if she can’t seduce you to death, she’ll rip you to shreds. Beneath the facade is a feline huntress of the deadliest kind.',
  },
  {
    image: '/images/white-paper/horbot.webp',
    title: 'Horbot',
    details:
      'horbot is a powerful robot. It was invented and manufactured on the orders of the god Horus to defend the homeland from the enemies, but there was a glitch in its system and Transformation into a robot with full consciousness and an independent personality, and now his goal is to establish the kingdom of the robotic god.',
  },
  {
    image: '/images/white-paper/zaya.webp',
    title: 'Zaya',
    details:
      'She is the daughter of an army commander from whom she learned martial arts skills, but she was always inclined to peace until her little sister was kidnapped and her father was killed in an attack on the village in which she was living, and from this moment she decided to find her little sister and avenge to her father.',
  },
  {
    image: '/images/white-paper/bako.webp',
    title: 'Bako',
    details:
      'Medjai chieftain and warrior that led a band of warriors patrolling the Sahara desert. dedicated much of his life ensuring with other Medjai warriors that the High Priest Imhotep did not return from the dead and went on to instruct younger warriors.',
  },
]

export default function pharaohs() {
  return (
    <PageContainer pageTitle="Pharaohs">
      <ContentContainer title={'Scoop of Our Characters'}>
        <p className="text-center leading-loose tracking-wider">
          League of Pharaohs is an eSports MOBA NFT game based on block-chain
          technology. Players can play for free and choose any of the 10
          "Origin" pharaohs to use at the start of the game. Each pharaohs has
          one passive and three active skills. The pharaohs are categorized into
          5 roles based on their utility in the game, which is Tank, Mage,
          Marksman, Support and Assassin
        </p>
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row flex-wrap justify-around">
          {pharaohsList.map((item, i) => {
            return (
              <div
                key={i}
                className={
                  'w-full lg:w-1/5 nm-flat-slate-700-lg rounded-lg p-2 text-center'
                }>
                <Image
                  src={item.image}
                  width={300}
                  height={450}
                  alt={item.title}
                />
                <h2 className="text-amber-500 text-lg font-aclonica uppercase">
                  {item.title}
                </h2>
                <p className=" leading-loose tracking-wider">{item.details}</p>
              </div>
            )
          })}
        </div>
      </ContentContainer>
    </PageContainer>
  )
}

pharaohs.getLayout = WhitePaperLayout
