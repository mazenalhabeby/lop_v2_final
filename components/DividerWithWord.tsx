const DividerWithWord = ({text}: {text: string}) => {
  return (
    <div className="w-full flex flex-row justify-center items-center gap-2">
      <div className="w-full h-[2px] from-amber-500 to-transparent bg-gradient-to-l"></div>
      <h5 className=" font-papyrus capitalize text-lg">{text}</h5>
      <div className="w-full h-[2px] from-amber-500 to-transparent bg-gradient-to-r"></div>
    </div>
  )
}

export default DividerWithWord
