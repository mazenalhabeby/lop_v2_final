import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'
import {BiCloudDownload} from 'react-icons/bi'
import {BsShield} from 'react-icons/bs'
import {FiHeadphones, FiUsers} from 'react-icons/fi'

export default function LopTokengover() {
  const {t} = useTranslation('wlopTokengover')

  const tokenList = [
    {
      icon: BsShield,
      title: t('categ1'),
      details: t('details1'),
    },
    {
      icon: FiUsers,
      title: t('categ2'),
      details: t('details2'),
    },
    {
      icon: FiHeadphones,
      title: t('categ3'),
      details: t('details3'),
    },
    {
      icon: BiCloudDownload,
      title: t('categ4'),
      details: t('details4'),
    },
  ]
  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
        <ul className="flex flex-col lg:flex-row flex-wrap justify-around w-full text-center">
          {tokenList.map((item, i) => {
            return (
              <li key={i} className="w-full lg:w-1/5">
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

LopTokengover.getLayout = WhitePaperLayout
