import TitleunderLine from '@/components/TitleunderLine'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
const Tokenomics = () => {
  const {t} = useTranslation('home')
  const tokensDescription = [
    {
      id: 1,
      image: '/images/Group24.svg',
      title: t('tokenTitle1'),
      discraption: t('tokenFeature01'),
    },
    {
      id: 2,
      image: '/images/Group25.svg',
      title: t('tokenTitle2'),
      discraption: t('tokenFeature02'),
    },
    {
      id: 3,
      image: '/images/Group26.svg',
      title: t('tokenTitle3'),
      discraption: t('tokenFeature03'),
    },
    {
      id: 4,
      image: '/images/Group27.svg',
      title: t('tokenTitle4'),
      discraption: t('tokenFeature04'),
    },
  ]
  return (
    <section
      id="tokenomics"
      className={`w-full bg-black bg-opacity-60 bg-[url("/images/pharaohs-wall.jpg")] bg-cover bg-fixed bg-center bg-no-repeat py-14 text-white bg-blend-overlay`}>
      <div className=" w-min mx-auto flex flex-col gap-4">
        <h3 className=" font-papyrus text-3xl uppercase">{t('tokenomics')}</h3>
        <TitleunderLine />
      </div>
      <div className="flex flrex-wrap space-y-8 container mx-auto flex-col md:flex-row justify-around items-center px-4 md:px-0 md:gap-8">
        <div className="slef-center pt-8 md:pt-0">
          <Image
            src="/images/chartfinal.png"
            alt="Token Distribution"
            width={510}
            height={380}
            priority
          />
        </div>
        <div className="w-full space-y-5 px-2 md:w-1/2">
          <h3 className=" uppercase font-papyrus text-center text-4xl tracking text-yellow-400">
            <span className="text-5xl">&#36; </span>lop token
          </h3>
          <p className="text-center text-2xl">
            Total Supply &#x3a; 10,000,000,000 &#36;LOP
          </p>
          <p className="text-lg leading-relaxed">
            The backbone of our economy. Next to gameplay, NFT game tokens are
            the most important feature of a blockchain game. Token usages
            determine how the in-game economy will develop, players can achieve
            a rewarding experience. Through…
          </p>
          <div>
            <ul className="space-y-4">
              {tokensDescription.map((obj) => {
                return (
                  <li
                    key={obj.id}
                    className="flex flex-row flex-wrap justify-start">
                    <div className="w-1/5">
                      <Image
                        src={obj.image}
                        alt={obj.title}
                        width={100}
                        height={100}
                        priority
                      />
                    </div>
                    <div className="w-4/5">
                      <h2>{obj.title}</h2>
                      <p className="">{obj.discraption}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
