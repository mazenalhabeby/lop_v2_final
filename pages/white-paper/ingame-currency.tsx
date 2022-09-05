import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'

export default function IngameCurrency() {
  const {t} = useTranslation('wingameCurrency')

  const tbHead = [{title: t('subhead1')}, {title: t('subhead2')}]

  const tbData = [
    {skinCategory: t('subtitle1'), earningBonus: '2x'},
    {skinCategory: t('subtitle2'), earningBonus: '1.8x'},
    {skinCategory: t('subtitle3'), earningBonus: '1.8x'},
    {skinCategory: t('subtitle4'), earningBonus: '1.2x'},
    {skinCategory: t('subtitle5'), earningBonus: '1.1x'},
    {skinCategory: t('subtitle6'), earningBonus: 'Null'},
    {skinCategory: t('subtitle7'), earningBonus: 'Null'},
  ]
  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">{t('Prag')}</p>
        <div className="w-full lg:w-1/2">
          <table className="table-auto w-full border-collapse border border-slate-600">
            <thead>
              <tr>
                {tbHead.map((item, i) => {
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
              {tbData.map((item, i) => {
                return (
                  <tr key={i} className="text-center">
                    <td className="border border-slate-600 p-2">
                      {item.skinCategory}
                    </td>
                    <td className="border border-slate-600 p-2">
                      {item.earningBonus}
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

IngameCurrency.getLayout = WhitePaperLayout
