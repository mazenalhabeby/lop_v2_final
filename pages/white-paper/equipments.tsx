import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

export default function Equipments() {
  const {t} = useTranslation('wequipments')
  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">
          {t('Prag')}
          <br />
          {t('prag1')}
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

Equipments.getLayout = WhitePaperLayout
