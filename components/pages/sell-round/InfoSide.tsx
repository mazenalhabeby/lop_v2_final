import Image from 'next/image'
import Link from 'next/link'
import {IoMdLock} from 'react-icons/io'
import {BsInfoCircle} from 'react-icons/bs'
import useTranslation from 'next-translate/useTranslation'

const InfoSide = () => {
  const {t} = useTranslation('sale')
  const infoTable = [
    {
      id: 1,
      infoKey: t('Round2Starts'),
      infoValue: '01-08-2022 00:00:00 CEST',
    },
    {
      id: 2,
      infoKey: t('Round2Finishes'),
      infoValue: '15-11-2022 20:00:00 CEST',
    },
    {
      id: 4,
      infoKey: t('SwapRate'),
      infoValue: '1 USD = 40 $LOP',
    },
    {
      id: 5,
      infoKey: t('TokenPrice'),
      infoValue: '1 $LOP = 0.025$',
    },
    {
      id: 6,
      infoKey: t('MinimumInvestment'),
      infoValue: '100 USD',
    },
  ]
  return (
    <div className=" nm-flat-slate-700-lg px-8 py-10 w-full max-w-2xl rounded-lg">
      <div className="w-full flex flex-col">
        <div className="flex items-center nm-inset-slate-800-lg py-2 justify-center rounded-lg">
          <Link href={'/'}>
            <a>
              <Image
                src={'/images/WEBLOGO.png'}
                alt="Coin"
                width={320}
                height={105}
                priority
              />
            </a>
          </Link>
        </div>
      </div>
      <div>
        {infoTable.map((obj) => {
          return (
            <div
              key={obj.id}
              className=" after:content-[' '] after:bg-yellow-700 after:w-full after:h-0.5 after:block after:my-2 my-6">
              <div className="flex flex-row justify-between text-xs md:text-lg tracking-wider">
                <span>{obj.infoKey}</span>
                <span>{obj.infoValue}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InfoSide
