import {FC, useState} from 'react'
import {GiEyeOfHorus} from 'react-icons/gi'

interface InputProps {
  type: string
  inputName: string
  inputTitle: string
  onChange: any
  value: any
}

const Input: FC<InputProps> = ({
  type,
  inputName,
  inputTitle,
  onChange,
  value,
}) => {
  const [changeType, setChangetype] = useState(false)

  const changeTypeFunction = () => {
    setChangetype(!changeType)
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="relative w-full flex flex-1">
        <input
          type={changeType ? 'text' : type}
          name={inputName}
          id={inputName}
          placeholder=" "
          onChange={onChange}
          value={value}
          className={` peer w-full p-3 rounded bg-transparent outline-none border-2 border-slate-600  focus:border-yellow-500 font-sans text-sm font-semibold tracking-widest`}
          autoComplete="off"
        />
        <label
          htmlFor={inputName}
          className=" absolute tracking-widest px-2 font-papyrus -top-2 left-3 text-yellow-500 text-sm bg-slate-700 peer-focus:text-yellow-500 peer-focus:bg-slate-700 peer-focus:text-sm peer-focus:left-3 peer-focus:-top-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:left-2
          peer-placeholder-shown:text-slate-200 peer-placeholder-shown:bg-transparent capitalize">
          {inputTitle}
        </label>
        {type === 'password' && (
          <GiEyeOfHorus
            className={`${
              changeType ? 'text-yellow-600' : 'text-slate-400'
            } absolute inset-y-0 text-3xl h-full cursor-pointer flex right-2`}
            onClick={changeTypeFunction}
          />
        )}
      </div>
    </div>
  )
}

export default Input
