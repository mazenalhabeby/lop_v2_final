import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import Image from 'next/image'

export default function whitePaper() {
  return (
    <PageContainer pageTitle="Introduction">
      <ContentContainer title={'League of Pharaohs (LOP)'}>
        <p className="text-center leading-loose tracking-wider">
          It is a MOBA NFT-game inspired by DOTA2 and League of Legends. LOP
          aspires to create an engaging community with a thriving economy;
          focusing on Free-to-Play and Play-to-Earn mechanics by leveraging
          blockchain technology. LOP's model is a zero-barrier entry model where
          anyone can play and progress in the game with no upfront costs
          required. With this model, LOP's aim is to transform the eSports scene
          where everybody can earn like a professional gamer. This project is
          venturing into a genre with a player base of over 250 million
          worldwide. 99.99% of the existing global player base generates NO
          income from the sport. We aim to change that and give all players an
          opportunity to enjoy the game and earn a living anytime, anywhere and
          on any mobile device. The MOBA genre became popular when DoTA was
          first introduced into the eSports scene over 20 years ago. It has
          since then grown exponentially, to become the foundation of the most
          iconic eSports tournament worldwide. Fast forward twenty years and the
          gaming world is still obsessed with playing MOBA games. The average
          player spends 8 hours a day playing MOBA games; simply because this
          competitive genre provides endless replay value via its strategic,
          team-oriented and adrenaline-fueled battles. We see League of Pharaohs
          as the latest evolution for MOBA games where players can convert their
          enjoyment and commitment into real- world assets. Let's Pawn-to-Earn
        </p>
        <Image
          src={'/images/white-paper/characters.png'}
          width={600}
          height={350}
          alt={'main characters'}
        />
      </ContentContainer>
    </PageContainer>
  )
}

whitePaper.getLayout = WhitePaperLayout
