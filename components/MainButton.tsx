import Link from 'next/link'

interface MainButtonProps {
  color?: string
  bgColor?: string
  colorHover?: string
  btnWidth?: string
  btnHeight?: string
  fontWeight?: string
  fontSize?: string
  btnName: string
  type?: string
  hrefLink?: any
}
const MainButton: React.FC<MainButtonProps> = ({
  btnName,
  color,
  bgColor,
  colorHover,
  btnWidth,
  btnHeight,
  fontWeight,
  fontSize,
  type,
  hrefLink,
}) => {
  return (
    <>
      {type == 'link' && (
        <Link href={hrefLink ? hrefLink : '/'}>
          <a
            className={`
      ${color ? color : 'text-slate-100'}
      ${bgColor ? bgColor : 'bg-slate-900'}
      ${colorHover ? colorHover : 'hover:text-amber-500'}
      ${btnWidth ? btnWidth : 'w-36'}
      ${btnHeight && btnHeight}
      ${fontWeight ? fontWeight : 'font-light'}
      ${
        fontSize ? fontSize : 'text-xl'
      } uppercase p-2 rounded-tr rounded-bl tracking-wider outline outline-2 outline-offset-4 hover:outline-offset-0 transition-all duration-200 text-center`}>
            {btnName}
          </a>
        </Link>
      )}
      {type == 'button' && (
        <button
          className={`
      ${color ? color : 'text-slate-100'}
      ${bgColor ? bgColor : 'bg-slate-900'}
      ${colorHover ? colorHover : 'hover:text-amber-500'}
      ${btnWidth ? btnWidth : 'w-36'}
      ${btnHeight && btnHeight}
      ${fontWeight ? fontWeight : 'font-light'}
      ${
        fontSize ? fontSize : 'text-xl'
      } uppercase p-2 rounded-tr rounded-bl tracking-wider outline outline-2 outline-offset-4 hover:outline-offset-0 transition-all duration-200`}>
          {btnName}
        </button>
      )}
    </>
  )
}

export default MainButton
