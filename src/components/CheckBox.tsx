import { AiOutlineCheck } from 'react-icons/ai'
import { useState } from 'react'

interface CheckboxProps {
  isCheck?: any
  id: string
}

export function Checkbox({ isCheck = false, id }: CheckboxProps) {
  const [isChecker, setIsChecker] = useState()

  return (
    <label className={!isChecker ? 'w-4 h-4 rounded-full border-2  border-blue-700 cursor-pointer hover:border-blue-900' :
      'w-4 h-4 rounded-full bg-purple-900  cursor-pointer flex items-center justify-center hover:bg-purple-500'}
      htmlFor={id + "check"}>
      {isChecker ?
        <AiOutlineCheck size={12} /> : ''
      }
      <input className='w-0 h-0  '
        type="checkbox" name="" id={id + "check"}
        onChange={(e: any) => setIsChecker(e.target.checked)}
        onClick={isCheck}
      />
    </label>

  )
}