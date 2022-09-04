import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'
import {FaUsers} from 'react-icons/fa'
import {HiChip} from 'react-icons/hi'
import {ImPower} from 'react-icons/im'

export default function Vision() {
  const {t} = useTranslation('wvision')

  const visionList = [
    {
      icon: FaUsers,
      title: t('subtitle1'),
      details: t('details1'),
    },
    {
      icon: HiChip,
      title: t('subtitle2'),
      details: t('details2'),
    },
    {
      icon: ImPower,
      title: t('subtitle3'),
      details: t('details3'),
    },
  ]
  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
        <ul className="flex flex-col lg:flex-row flex-wrap justify-around w-full text-center">
          {visionList.map((item, i) => {
            return (
              <li key={i} className="w-full lg:w-1/4">
                <div className="bg-amber-500 w-max p-2 rounded-full mx-auto">
                  <item.icon className=" text-4xl" />
                </div>
                <h3 className="text-amber-500 font-semibold my-2">
                  {item.title}
                </h3>
                <p className=" leading-loose tracking-wider">{item.details}</p>
              </li>
            )
          })}
        </ul>
      </ContentContainer>
    </PageContainer>
  )
}

Vision.getLayout = WhitePaperLayout
