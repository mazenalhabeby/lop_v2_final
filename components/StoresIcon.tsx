import stores from '@/data/storesIcon.json'
import Image from 'next/image'
const StoresIcon = () => {
  return (
    <div className="flex flex-row gap-6 px-4">
      {stores.map((store, i) => {
        return (
          <div key={i}>
            <div className="w-full">
              <Image
                src={`/images/stores/${store.fileName}.png`}
                width={30}
                height={30}
                alt={store.fileName}
                priority
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StoresIcon
