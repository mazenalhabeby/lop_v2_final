import TitleunderLine from '@/components/TitleunderLine'
import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import useTranslation from 'next-translate/useTranslation'

export default function NftCharacter() {
  const {t} = useTranslation('wnftCharacter')

  const tbHead1 = [
    {title: t('subhead1')},
    {title: t('subhead2')},
    {title: t('subhead3')},
  ]

  const tbData1 = [
    {
      skinCategory: t('subtitle1'),
      earningBonus: '10',
      obtain: t('subtb1'),
    },
    {
      skinCategory: t('subtitle2'),
      earningBonus: '9',
      obtain: t('subtb2'),
    },
    {
      skinCategory: t('subtitle3'),
      earningBonus: '8',
      obtain: t('subtb3'),
    },
    {
      skinCategory: t('subtitle4'),
      earningBonus: '6',
      obtain: t('subtb4'),
    },
    {
      skinCategory: t('subtitle5'),
      earningBonus: '4',
      obtain: t('subtb5'),
    },
    {
      skinCategory: t('subtitle6'),
      earningBonus: '2',
      obtain: t('subtb6'),
    },
    {
      skinCategory: t('subtitle7'),
      earningBonus: '1',
      obtain: t('subtb7'),
    },
  ]
  const tbHead2 = [{title: t('subhead4')}, {title: t('subhead5')}]

  const tbData2 = [
    {
      Combination: t('subtb8'),
      Result: t('subtb9'),
    },
    {
      Combination: t('subtb10'),
      Result: t('subtb11'),
    },
  ]
  return (
    <PageContainer pageTitle={t('pageTitle')}>
      <ContentContainer title={t('title')}>
        <p className="text-center leading-loose tracking-wider">
          {t('Prag')}
          <br />
          {t('prag1')}
        </p>
        <div className=" w-full lg:w-1/2">
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
                      {item.skinCategory}
                    </td>
                    <td className="border border-slate-600 p-2">
                      {item.earningBonus}
                    </td>
                    <td className="border border-slate-600 p-2">
                      {item.obtain}
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
        <p className="text-center leading-loose tracking-wider">
          {t('prag3')}
          <br />
          {t('prag4')}
          <br />
          {t('prag5')}
        </p>
        <div className="flex flex-col gap-2">
          <h2 className=" font-aclonica uppercase tracking-widest text-lg">
            {t('title3')}
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">
          {t('prag6')}
          <br />
          {t('prag7')}
        </p>
        <span>{t('example')}</span>
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
                      {item.Combination}
                    </td>
                    <td className="border border-slate-600 p-2">
                      {item.Result}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className=" font-aclonica uppercase tracking-widest text-lg">
            {t('title4')}
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">
          {t('prag8')}
          <br />
          {t('prag9')}
        </p>
      </ContentContainer>
    </PageContainer>
  )
}

NftCharacter.getLayout = WhitePaperLayout
