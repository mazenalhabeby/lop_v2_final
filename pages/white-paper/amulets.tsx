import TitleunderLine from '@/components/TitleunderLine'
import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'

const tbHead1 = [{title: 'Skin Category'}, {title: '	Chance of obtaining'}]

const tbData1 = [
  {
    SkinCategory: 'Immortal',
    obtaining: 'Null',
  },
  {
    SkinCategory: 'Mythical',
    obtaining: '0.1%',
  },
  {
    SkinCategory: 'Legendary',
    obtaining: '1.9%',
  },
  {
    SkinCategory: 'Epic',
    obtaining: '14%',
  },
  {
    SkinCategory: 'Rare',
    obtaining: '30%',
  },
  {
    SkinCategory: 'UnCommom',
    obtaining: '60%',
  },
  {
    SkinCategory: 'Commom',
    obtaining: 'Null',
  },
]

const tbHead2 = [{title: 'Skin Category'}, {title: '	Chance of obtaining'}]

const tbData2 = [
  {
    SkinCategory: 'Mythical',
    obtaining: '5%',
  },
  {
    SkinCategory: 'Legendary',
    obtaining: '20%',
  },
  {
    SkinCategory: 'Epic',
    obtaining: '75%',
  },
]

const tbHead3 = [{title: 'Skin Category'}, {title: '	Chance of obtaining'}]

const tbData3 = [
  {
    SkinCategory: 'Epic',
    obtaining: '10%',
  },
  {
    SkinCategory: 'Rare',
    obtaining: '25%',
  },
  {
    SkinCategory: 'UnCommom',
    obtaining: '65%',
  },
]

export default function amulets() {
  return (
    <PageContainer pageTitle="Type of Amulets">
      <ContentContainer title={'Amulets in League of Pharaohs'}>
        <p className="text-center leading-loose tracking-wider">
          In the NFT Marketplace, users can obtain the LOP Amulets through
          Raffle Events. To register for the raffle, users need to deposit $LOP
          tokens. Participants will be chosen at random to win the LOP Amulets
          whereas those who did not win, will be refunded their $LOP tokens.
          Users are able to trade and sell their LOP Amulets in the marketplace.
          The LOP Amulets contains NFTs of different rarities when opened. The
          chances of getting various skins are shown below:
        </p>
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
            Alpha Amulets
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">
          Premium grade Amulets can be sold in the marketplace or opened.
          Players who open the Alpha Amulets will have a chance to obtain the
          following NFTs:
        </p>
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
            Beta Amulets
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">
          High-grade Amulets can be sold in the marketplace or opened. Players
          who open the Beta Amulets will have a chance to obtain the following
          NFTs:
        </p>
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

amulets.getLayout = WhitePaperLayout
