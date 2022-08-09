import TitleunderLine from '@/components/TitleunderLine'
import Image from 'next/image'

const Partners = () => {
  const vertical = {
    width: '180',
    height: '250',
  }
  const horizontal = {
    width: '350',
    height: '60',
  }

  const partnersList = [
    {
      id: 1,
      logo: '/images/partners/MNB-LOGO.png',
      name: 'MNB',
      width: horizontal.width,
      height: horizontal.height,
    },
    {
      id: 2,
      logo: '/images/partners/kozak-studio.png',
      name: 'Kozak',
      width: vertical.width,
      height: vertical.height,
      classes: 'row-span-2',
    },
    {
      id: 4,
      logo: '/images/partners/logo-momen.png',
      name: 'Platinum',
      width: vertical.width,
      height: vertical.height,
      classes: 'row-span-2',
    },

    {
      id: 3,
      logo: '/images/partners/logoPlatinum.svg',
      name: 'Platinum',
      width: horizontal.width,
      height: horizontal.height,
    },
  ]

  return (
    <section
      id="partner"
      className={`relative w-full bg-slate-200 py-14 text-slate-800`}>
      <div className=" w-max mx-auto flex flex-col gap-4">
        <h3 className=" font-papyrus text-3xl uppercase">our partners</h3>
        <TitleunderLine />
      </div>
      <div className="mx-auto flex h-full w-[90%] md:max-w-7xl flex-col flex-wrap gap-10 md:gap-2 text-center md:grid md:grid-cols-3 md:justify-evenly items-center pt-8">
        {partnersList.map((partner) => {
          return (
            <div
              key={partner.id}
              className={` ${partner.classes} place-self-center rounded-xl p-4 nm-flat-slate-200-lg`}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                priority
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Partners
