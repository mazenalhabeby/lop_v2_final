import TeamMembers from '@/components/TeamMembers'
import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'

export default function team() {
  const {t} = useTranslation('team')
  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
        <TeamMembers />
      </ContentContainer>
    </PageContainer>
  )
}

team.getLayout = WhitePaperLayout
