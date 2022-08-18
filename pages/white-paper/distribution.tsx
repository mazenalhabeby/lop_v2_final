import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import Image from 'next/image'
const tbHead = [
  {title: 'Token Allocation'},
  {title: 'No of Tokens'},
  {title: '%'},
  {title: 'Vesting Period'},
]

const tbData = [
  {
    Allocation: 'Play to earn',
    Tokens: '2,500,000,000',
    pecent: '25%',
    Period: '6 MONTHS CLIFF THEN LINEAR VESTING MONTHLY',
  },
  {
    Allocation: 'Liquidity',
    Tokens: '100,000,000',
    pecent: '1%',
    Period: 'Locked',
  },
  {
    Allocation: 'Staking',
    Tokens: '1,500,000,000',
    pecent: '15%',
    Period: '3 MONTHS CLIFF 10% LINEAR VESTING MONTHLY',
  },
  {
    Allocation: 'Private sale',
    Tokens: '1000,000,000',
    pecent: '10%',
    Period: '5% TGE LINEAR VESTING MONTHLY',
  },
  {
    Allocation: 'Team Token',
    Tokens: '2,000,000,000',
    pecent: '20%',
    Period: '3 MONTHS CLIFF 2% LINEAR VESTING MONTHLY',
  },
  {
    Allocation: 'Pre-sale',
    Tokens: '200,000,000',
    pecent: '2%',
    Period: '10% TGE LINEAR VESTING MONTHLY FOR 10 MONTHS',
  },
  {
    Allocation: 'Marketing',
    Tokens: '500,000,000',
    pecent: '5%',
    Period: '2% TGE LINEAR VESTING MONTHLY',
  },
  {
    Allocation: 'NFT Staking',
    Tokens: '800,000,000',
    pecent: '8%',
    Period: '3 MONTHS CLIFF 10% LINEAR VESTING MONTHLY',
  },
  {
    Allocation: 'Centralized Exchange',
    Tokens: '500,000,000',
    pecent: '5%',
    Period: 'Unlocked',
  },
  {
    Allocation: 'Advisors',
    Tokens: '400,000,000',
    pecent: '4%',
    Period: 'LINEAR VESTING 10 MONTH',
  },
  {
    Allocation: 'Community',
    Tokens: '100,000,000',
    pecent: '1%',
    Period: 'LINEAR VESTING 12 MONTH',
  },
  {
    Allocation: 'Ecosystem fund',
    Tokens: '400,000,000',
    pecent: '4%',
    Period: '1 MONTH CLIFF LINEAR VESTING 6 MONTH',
  },
]

const details = [
  {title: 'Description', sub: 'LOP'},
  {title: 'Protocol', sub: 'BSC'},
  {title: 'Standard', sub: 'BEP20'},
  {title: 'Total Supply', sub: '10,00,000,000'},
]

export default function distribution() {
  return (
    <PageContainer pageTitle="Token distribution">
      <ContentContainer title={'Tokenomics plan made by experts'}>
        <p className="text-center leading-loose tracking-wider">
          For every successful project, comes a successful fund managament plan,
          we pride to say that we crafted the master formula to stabalize the
          token price for maximum outcome.
        </p>
        <div className="flex flex-col-reverse lg:flex-row justify-around w-full">
          <div>
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
                        {item.Allocation}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.Tokens}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.pecent}
                      </td>
                      <td className="border border-slate-600 p-2 text-xs">
                        {item.Period}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex felx-row gap-4">
              {details.map((item, i) => {
                return (
                  <div key={i} className="text-center">
                    <h3 className=" font-aclonica text-amber-500">
                      {item.title}
                    </h3>
                    <span>{item.sub}</span>
                  </div>
                )
              })}
            </div>
            <Image
              src="/images/chartfinal.png"
              alt="Token Distribution"
              width={390}
              height={280}
              priority
            />
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  )
}

distribution.getLayout = WhitePaperLayout
