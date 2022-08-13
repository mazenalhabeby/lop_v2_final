import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import {BiCloudDownload} from 'react-icons/bi'
import {BsShield} from 'react-icons/bs'
import {FiHeadphones, FiUsers} from 'react-icons/fi'

const tokenList = [
  {
    icon: BsShield,
    title: '50% of all profits',
    details:
      '50% of all profits across the platform will be used to buy back and burn LOP to reduce the total supply of the token hence increasing the token value, the remaining 50% goes for further game development and enhances etc.',
  },
  {
    icon: FiUsers,
    title: 'DEFI/STAKING',
    details:
      'Where users can stake tokens to earn more $LOP tokens. As we grow our network of partnerships, LP and several other tokens may become available for staking on the LOP platform',
  },
  {
    icon: FiHeadphones,
    title: 'EVENTS',
    details:
      'Players will have several ongoing opportunities to earn rare skins and extra $LOP tokens. These events include but are not limited to, raffles and E-sport tournaments.',
  },
  {
    icon: BiCloudDownload,
    title: 'NFT MARKETPLACE',
    details: 'Where users can buy, trade and sell their NFTs.',
  },
]

export default function lopTokengover() {
  return (
    <PageContainer pageTitle="The $LOP Token">
      <ContentContainer title={'Game made best'}>
        <p className="text-center leading-loose tracking-wider">
          League of Pharaohs economy is composed of the NFT Marketplace, DEFI
          and In-Game Economy that help sustain the development of the game. NFT
          marketplace where users trade and sell their skins to obtain rarer
          skins. Users can also stake other tokens to obtain $LOP tokens on the
          platform.
        </p>
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

lopTokengover.getLayout = WhitePaperLayout
