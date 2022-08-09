const IconContainer = ({
  children,
  bgColor,
  color,
}: {
  children: any
  bgColor: string
  color: string
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`${bgColor} absolute outline outline-1 outline-offset-2 outline-amber-500 w-12 h-12 rotate-45`}></div>
      <div
        className={`${bgColor} absolute outline outline-1 outline-offset-2 outline-amber-500 w-12 h-12`}></div>
      <div
        className={`z-50 bg-slate-700 rounded-full w-12 h-12 flex justify-center items-center border border-amber-500 ${color}`}>
        {children}
      </div>
    </div>
  )
}

export default IconContainer
