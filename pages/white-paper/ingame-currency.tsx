import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'

const tbHead = [{title: 'Skin Category'}, {title: 'Earning Bonus'}]

const tbData = [
  {skinCategory: 'Immortal', earningBonus: '2x'},
  {skinCategory: 'Mythical', earningBonus: '1.8x'},
  {skinCategory: 'Legendary', earningBonus: '1.8x'},
  {skinCategory: 'Epic', earningBonus: '1.2x'},
  {skinCategory: 'Rare', earningBonus: '1.1x'},
  {skinCategory: 'UnCommom', earningBonus: 'Null'},
  {skinCategory: 'Commom', earningBonus: 'Null'},
]

export default function ingameCurrency() {
  return (
    <PageContainer pageTitle="In-game Currency">
      <ContentContainer title={'Use LOP token to get the latest assests'}>
        <p className="text-center leading-loose tracking-wider">
          Players can earn in-game currency after completing a match. Matches
          will reward players with in-game currency and/or Gold depending on the
          type of match to use for utilities etc. in addition, players will have
          a higher earning potential of in-game currency and Gold based on the
          rarity of the respective Pharaoh used for that match.
        </p>
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

ingameCurrency.getLayout = WhitePaperLayout
