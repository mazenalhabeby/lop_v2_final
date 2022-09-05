import TitleunderLine from '@/components/TitleunderLine'
import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'

export default function Amulets() {
  const {t} = useTranslation('wamulets')

  const tbHead1 = [{title: t('subhead1')}, {title: t('subhead2')}]

  const tbData1 = [
    {
      SkinCategory: t('subtitle1'),
      obtaining: 'Null',
    },
    {
      SkinCategory: t('subtitle2'),
      obtaining: '0.1%',
    },
    {
      SkinCategory: t('subtitle3'),
      obtaining: '1.9%',
    },
    {
      SkinCategory: t('subtitle4'),
      obtaining: '14%',
    },
    {
      SkinCategory: t('subtitle5'),
      obtaining: '30%',
    },
    {
      SkinCategory: t('subtitle6'),
      obtaining: '60%',
    },
    {
      SkinCategory: t('subtitle7'),
      obtaining: 'Null',
    },
  ]

  const tbHead2 = [{title: t('subhead1')}, {title: t('subhead2')}]

  const tbData2 = [
    {
      SkinCategory: t('subtitle2'),
      obtaining: '5%',
    },
    {
      SkinCategory: t('subtitle3'),
      obtaining: '20%',
    },
    {
      SkinCategory: t('subtitle4'),
      obtaining: '75%',
    },
  ]

  const tbHead3 = [{title: t('subhead1')}, {title: t('subhead2')}]

  const tbData3 = [
    {
      SkinCategory: t('subtitle4'),
      obtaining: '10%',
    },
    {
      SkinCategory: t('subtitle5'),
      obtaining: '25%',
    },
    {
      SkinCategory: t('subtitle6'),
      obtaining: '65%',
    },
  ]

  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
        <div className="w-full lg:w-1/2">
          <table className="table-auto w-full border-collapse border border-slate-600">
            <thead>
              <tr>
                {tbHead1.map((item, i) => {
                  return (
                    <th
                      key={i}
                      className="border border-slate-600 py-2 bg-amber-600">
                      {item.title}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tbData1.map((item, i) => {
                return (
                  <tr key={i} className="text-center">
                    <td className="border border-slate-600 p-2">
                      {item.SkinCategory}
                    </td>
                    <td className="border border-slate-600 p-2">
                      {item.obtaining}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className=" font-aclonica uppercase tracking-widest text-lg">
            {t('title2')}
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">{t('prag1')}</p>
        <div className="w-full lg:w-1/2">
          <table className="table-auto w-full border-collapse border border-slate-600">
            <thead>
              <tr>
                {tbHead2.map((item, i) => {
                  return (
                    <th
                      key={i}
                      className="border border-slate-600 py-2 bg-amber-600">
                      {item.title}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tbData2.map((item, i) => {
                return (
                  <tr key={i} className="text-center">
                    <td className="border border-slate-600 p-2">
                      {item.SkinCategory}
                    </td>
                    <td className="border border-slate-600 p-2">
                      {item.obtaining}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className=" font-aclonica uppercase tracking-widest text-lg">
            {t('title3')}
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">{t('prag3')}</p>
        <div className="w-full lg:w-1/2">
          <table className="table-auto w-full border-collapse border border-slate-600">
            <thead>
              <tr>
                {tbHead3.map((item, i) => {
                  return (
                    <th
                      key={i}
                      className="border border-slate-600 py-2 bg-amber-600">
                      {item.title}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tbData3.map((item, i) => {
                return (
                  <tr key={i} className="text-center">
                    <td className="border border-slate-600 p-2">
                      {item.SkinCategory}
                    </td>
                    <td className="border border-slate-600 p-2">
                      {item.obtaining}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </ContentContainer>
    </PageContainer>
  )
}

Amulets.getLayout = WhitePaperLayout
