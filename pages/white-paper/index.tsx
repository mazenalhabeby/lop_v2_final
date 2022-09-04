import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

export default function whitePaper() {
  const {t} = useTranslation('whitePaperHome')
  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
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
