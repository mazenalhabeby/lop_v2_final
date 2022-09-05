import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'
import {GiTrophyCup, GiVikingChurch} from 'react-icons/gi'
import {RiSwordFill} from 'react-icons/ri'

export default function GameMode() {
  const {t} = useTranslation('wgameMode')

  const gameModeList = [
    {
      icon: RiSwordFill,
      title: t('subtitle1'),
      details: (
        <p>
          {t('details1')}
          <br />
          {t('details1-1')}
        </p>
      ),
    },
    {
      icon: GiVikingChurch,
      title: t('subtitle2'),
      details: (
        <p>
          {t('details2')}
          <br />
          {t('details2-2')}
        </p>
      ),
    },
    {
      icon: GiTrophyCup,
      title: t('subtitle3'),
      details: <p>{t('details3')}</p>,
    },
  ]

  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
        <div className="flex flex-col gap-6">
          {gameModeList.map((item, i) => {
            return (
              <div key={i} className="flex flex-row items-center gap-4">
                <div className="bg-amber-500 p-2 rounded-full">
                  <item.icon className=" text-6xl" />
                </div>
                <div>
                  <h3 className=" font-aclonica uppercase text-amber-500">
                    {item.title}
                  </h3>
                  <div className=" max-w-lg">{item.details}</div>
                </div>
              </div>
            )
          })}
        </div>
      </ContentContainer>
    </PageContainer>
  )
}

GameMode.getLayout = WhitePaperLayout
