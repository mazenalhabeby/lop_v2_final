import TeamMembers from '@/components/TeamMembers'
import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'

export default function team() {
  return (
    <PageContainer pageTitle="Team & Advisors">
      <ContentContainer title={'Our Royal Family'}>
        <p className="text-center leading-loose tracking-wider">
          We strive to deliver what we promise on the right time in the right
          way, keep in touch with us on our Social Media channels to get the
          latest updates and accomplishments of LOP.
        </p>
        <TeamMembers />
      </ContentContainer>
    </PageContainer>
  )
}

team.getLayout = WhitePaperLayout
