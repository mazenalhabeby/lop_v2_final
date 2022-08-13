import ContentContainer from '@/components/white-paper/ContentContainer'
import PageContainer from '@/components/white-paper/PageContainer'
import WhitePaperLayout from '@/layouts/WhitePaperLayout'
import {GiTrophyCup, GiVikingChurch} from 'react-icons/gi'
import {RiSwordFill} from 'react-icons/ri'

const gameModeList = [
  {
    icon: RiSwordFill,
    title: 'Normal Match',
    details: (
      <p>
        Normal Match is the first and earliest game mode in League of Pharaohs.
        All other game modes use the mechanics of Normal Matches as their base.
        It is an UNRANKED 5v5 PVP experience. This means that players do not
        lose rank titles if they did not win the game.
        <br />
        This mode is suitable for beginners who need to familiarize themselves
        with the gameplay mechanics. You are free to choose any Pharaoh to play
        with. However, you are not allowed to have more than one of the same
        Pharaohs on your team. The opposing team, however, CAN pick the same
        Pharaoh that is chosen on your team. Players can earn in-game currency
        by completing each normal match.
      </p>
    ),
  },
  {
    icon: GiVikingChurch,
    title: 'NFT Match',
    details: (
      <p>
        NFT Match is a competitive seasonal game mode that runs for a specific
        period of time. You will be competing with other players sharing your
        ranked division bracket. Players will have access to play all the 10
        "Origin" Pharaohs as long as they have a certain number of NFT skins at
        any rarity level.
        <br />
        The rank titles from lowest to highest are Sentinel, Royal Knight,
        vizier, greatest Vizier, King of pharaohs, god of pharaohs. Sentinel is
        the lowest division, whereas the god of pharaohs is for the best of the
        best. Every time you win a Ranked match, you will gain MMR and in-game
        currency. The amount of in-game currency will be higher compared to
        playing a normal match. When the season ends, the rankings will be reset
        accordingly and a new season begins.
      </p>
    ),
  },
  {
    icon: GiTrophyCup,
    title: 'Tournment',
    details: (
      <p>
        A tournament is a feature of the game that allows organizers to host
        in-game tournaments. It will be supervised by the League of Pharaohs.
        Each participating team has to pay a registration fee, where 5% of the
        total registration fee collected will be for the tournament organizer to
        cover for the administration purpose. The teams will challenge each
        other for the total prize pool allocated for that specific tournament.
        The prize pool consists of $LOP tokens.
      </p>
    ),
  },
]

export default function gameMode() {
  return (
    <PageContainer pageTitle="Game Mode">
      <ContentContainer
        title={'Get the rush of the battle, earn the glory of the Kings'}>
        <p className="text-center leading-loose tracking-wider">
          In League of Pharaohs, there are currently three game modes which are
          Normal Match, NFT Match and Tournament. Each game mode will reward
          players with in- game currency after completing each match.
        </p>
        <div className="flex flex-col gap-6">
          {gameModeList.map((item, i) => {
            return (
              <div key={i} className="flex flex-row items-center gap-4">
                <div className="bg-amber-500 p-2 rounded-full">
                  <item.icon className=" text-6xl" />
                </div>
                <div>
                  <h3 className=" font-aclonica uppercase text-amber-500">
                    {item.title}
                  </h3>
                  <div className=" max-w-lg">{item.details}</div>
                </div>
              </div>
            )
          })}
        </div>
      </ContentContainer>
    </PageContainer>
  )
}

gameMode.getLayout = WhitePaperLayout
