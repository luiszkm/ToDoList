
import { AiOutlineDelete } from 'react-icons/ai'
import { Checkbox } from './CheckBox';
import {useState} from 'react'

export function Task() {
const [taskIsFinished, setTaskIsFinished] = useState(false)

  return (
    <div className='flex items-center text-start gap-3 p-4 rounded-lg max-w-3xl bg-gray-500 text-gray-100'>

      <Checkbox  />



      <span className={taskIsFinished ?'text-gray-300 line-through' : ''}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </span>

      <span className='w-6 h-6 flex items-center justify-center bg-transparent rounded cursor-pointer hover:bg-gray-400 hover:text-danger-500 '>
        <AiOutlineDelete />
      </span>
    </div>
  )
}