import Wings from '@/assets/svg/Wings'
import TitleunderLine from '@/components/TitleunderLine'
import useTranslation from 'next-translate/useTranslation'
import {
  MdInsertPhoto,
  MdPayments,
  MdSportsEsports,
  MdStore,
} from 'react-icons/md'
const Features = () => {
  const {t} = useTranslation('home')
  const featuresData = [
    {
      id: 1,
      title: t('nftOwnership'),
      description: t('ownershipDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdInsertPhoto,
    },
    {
      id: 2,
      title: t('marketPlace'),
      description: t('marketDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdStore,
    },
    {
      id: 3,
      title: t('nftStaking'),
      description: t('stakingDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdPayments,
    },
    {
      id: 4,
      title: t('mobaGame'),
      description: t('gameDesc'),
      imgHolder: '/images/wings02.svg',
      imgChild: MdSportsEsports,
    },
  ]
  return (
    <section id="overview" className="py-14">
      <div className="container mx-auto space-y-8 text-center">
        <h2 className=" uppercase font-aclonica text-xl md:text-3xl">
          {t('freeToPlay')}
          <br />
          <span className="text-yellow-600 dark:text-yellow-400">
            {t('playToEarn')}
          </span>{' '}
          {t('nftMoba')}
        </h2>
        <p className="leading-9 tracking-wider w-[90%] md:w-1/2 mx-auto text-xl">
          {t('heroDisc')}
        </p>
        <div className="w-[90%] h-96 mx-auto relative flex max-w-4xl">
          <iframe
            src="https://www.youtube.com/embed/A-Y4iHUpurU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-tr-[2rem] rounded-bl-[2rem] outline outline-offset-8 outline-2 outline-yellow-600 dark:outline-yellow-500"></iframe>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className=" w-min mx-auto">
            <h3 className="font-aclonica text-3xl uppercase md:text-4xl">
              {t('features')}
            </h3>
            <TitleunderLine />
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-2 gap-y-6 md:justify-evenly">
            {featuresData.map((feature) => {
              return (
                <div key={feature.id} className="w-80 space-y-2 text-center">
                  <h3 className="font-aclonica text-2xl text-yellow-600 dark:text-yellow-500">
                    {feature.title}
                  </h3>
                  <p className=" leading-relaxed">{feature.description}</p>
                  <div className="relative">
                    <Wings className="w-[20rem] fill-yellow-600 dark:fill-yellow-500" />
                    <feature.imgChild className=" absolute inset-0 m-auto text-5xl text-black" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
