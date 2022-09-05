import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

export default function Pharaohs() {
  const {t} = useTranslation('wPharaohs')
  const pharaohsList = [
    {
      image: '/images/white-paper/bastlack.webp',
      title: t('categ1'),
      details: t('details1'),
    },
    {
      image: '/images/white-paper/horbot.webp',
      title: t('categ2'),
      details: t('details2'),
    },
    {
      image: '/images/white-paper/zaya.webp',
      title: t('categ3'),
      details: t('details3'),
    },
    {
      image: '/images/white-paper/bako.webp',
      title: t('categ4'),
      details: t('details4'),
    },
  ]

  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
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

Pharaohs.getLayout = WhitePaperLayout
