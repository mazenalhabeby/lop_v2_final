import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import Image from 'next/image'

export default function equipments() {
  return (
    <PageContainer pageTitle="Equipment">
      <ContentContainer title={'Empower your Pharaohs'}>
        <p className="text-center leading-loose tracking-wider">
          Players can purchase equipment in-game to make their Pharaohs more
          powerful. Making wise purchases can significantly alter the results of
          a match. Earning gold and purchasing the right equipment is vital to
          securing victory in the MOBA landscape.
          <br /> There are 6 primary equipment attributes - Physical damage,
          Magical damage, Defense, Movement, Jungle and Support. Each category
          of equipment has different tiers, whereby Tier 1 is the lowest and
          Tier 3 is the highest. Players can obtain higher tier equipment by
          purchasing it directly or combining lower tier items.
        </p>
        <Image
          src={'/images/white-paper/3907.png'}
          width={550}
          height={400}
          alt={'rewarding'}
          className={' rounded-lg shadow-lg'}
        />
      </ContentContainer>
    </PageContainer>
  )
}

equipments.getLayout = WhitePaperLayout
