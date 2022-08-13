import TitleunderLine from '@/components/TitleunderLine'
import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'

const tbHead1 = [
  {title: 'Skin Category'},
  {title: 'Rarity Level'},
  {title: 'How to obtain'},
]

const tbData1 = [
  {skinCategory: 'Immortal', earningBonus: '10', obtain: 'NFT Skin Fusion'},
  {
    skinCategory: 'Mythical',
    earningBonus: '9',
    obtain: 'Pre-Launch Events & LOP Amulet',
  },
  {
    skinCategory: 'Legendary',
    earningBonus: '8',
    obtain: 'LOP Events/Rank Rewards',
  },
  {
    skinCategory: 'Epic',
    earningBonus: '6',
    obtain: 'LOP Amulet, Alpha Amulet & NFT Skin Fusion',
  },
  {
    skinCategory: 'Rare',
    earningBonus: '4',
    obtain: 'LOP Amulet, Beta Amulet & NFT Skin Fusion',
  },
  {
    skinCategory: 'UnCommom',
    earningBonus: '2',
    obtain: 'LOP Amulet, Beta Amulet & NFT Skin Fusion',
  },
  {
    skinCategory: 'Commom',
    earningBonus: '1',
    obtain: 'LOP Amulet, Beta Amulet',
  },
]
const tbHead2 = [{title: 'Fuse Combination'}, {title: 'Result'}]

const tbData2 = [
  {
    Combination: '1 x "Mythical" skin + 1 x “Legendary" skin + 2x “Epic" skin',
    Result: 'Immortal',
  },
  {
    Combination: '1 x "Legendary" skin + 3 “Epic" skin',
    Result: 'Mythical',
  },
]
export default function nftCharacter() {
  return (
    <PageContainer pageTitle="NFT Characters">
      <ContentContainer title={'the Egyptian Ancient Realm'}>
        <p className="text-center leading-loose tracking-wider">
          For in-game mechanics, NFT rarity changes the appearance of the
          respective Pharaoh and increase the earning potential of in-game
          currency for Regular and P2E matches. <br />
          In the NFT Marketplace, NFT rarities will affect the staking mechanism
          in the marketplace and the player's account level. Higher the rarity
          of the NFT, the higher potential earnings of $LOP tokens when staked
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
            NFT staking
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">
          In addition to battles in the ancient arena, Players can send their
          Pharaoh (NFT) for staking in the LOP charging portal where NFT
          characters yield token rewards. <br />
          Each NFT character has a mining power that can be upgraded through NFT
          fusion to upgrade its rarity level. User's mining power would be
          determined by the total mining power of all their NFT characters. The
          amount of LOP tokens mined per day depends on the total mining power
          across all users on a weighted average period.
          <br /> Apart from earning from $LOP tokens, users can earn tokens from
          League of Pharaohs partners.
        </p>
        <div className="flex flex-col gap-2">
          <h2 className=" font-aclonica uppercase tracking-widest text-lg">
            NFT fusion
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">
          In the NFT Marketplace, this feature allows users to combine various
          NFTs together to create a higher tier NFT character. Thi way to obtain
          an "Immortal" Character. After some time, most players will find that
          they have collected extra low to mid-tier rarity NFTs. This feature
          gives them a chance to burn their obsolete inventory and obtain a
          higher tier NFT if conditions are met. <br />
          way to obtain an "Immortal" Character. After some time, most players
          will find that they have collected extra low to mid-tier rarity NFTs.
          This feature gives them a chance to burn their obsolete inventory and
          obtain a higher tier NFT if conditions are met.
        </p>
        <span>For example:</span>
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
            NFT bonus
          </h2>
          <TitleunderLine />
        </div>
        <p className="text-center leading-loose tracking-wider">
          A set bonus can be obtained when users have collected the same NFT
          rarity level for all 5 different roles (Tank, Mage, Marksman, Support
          and Assassin). Set bonus effects will grant a Boost effect, which
          multiplies the total mining multiplier of the user. The Boost effect
          will be calculated on top of the Account Level mining multiplier. For
          example, a Level 5 account (with a Legendary bonus set) will have a
          mining multiplier of 1.25x and a Boost effect of 2.5x. This is
          calculated as 1.25x TIMES 2.5x = 3.125x Moreover,
          <br /> set bonus effects will unlock certain in-game features. All
          higher set bonuses will have the features of the lower set bonuses
          below them.
        </p>
      </ContentContainer>
    </PageContainer>
  )
}

nftCharacter.getLayout = WhitePaperLayout
