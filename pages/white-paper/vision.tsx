import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import {FaUsers} from 'react-icons/fa'
import {HiChip} from 'react-icons/hi'
import {ImPower} from 'react-icons/im'

const visionList = [
  {
    icon: FaUsers,
    title: 'Empower the Community',
    details:
      "We want our members to have full ownership of their assets and know that their feedback, suggestions and involvement makes a difference in LOP's evolution.",
  },
  {
    icon: HiChip,
    title: 'A Strong Ecosystem',
    details:
      'We aim to provide a fair, balanced, transparent and self-sustaining ecosystem where all players are incentivized to play and earn assets.',
  },
  {
    icon: ImPower,
    title: 'An Excellent Game',
    details:
      'As MOBA enthusiasts, we are cutting no corners and we are driven to create an absolutely fantastic gaming experience.',
  },
]

export default function vision() {
  return (
    <PageContainer pageTitle="Vision & Mission">
      <ContentContainer title={'Vision & Mission'}>
        <p className="text-center leading-loose tracking-wider">
          To create an excellent, stable and ever-evolving block-chain game;
          which empowers our community with equal opportunity to earn assets
          while enjoying a great MOBA gaming experience.
        </p>
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

vision.getLayout = WhitePaperLayout
