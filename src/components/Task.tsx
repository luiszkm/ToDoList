
import { AiOutlineDelete } from 'react-icons/ai'
import { Checkbox } from './CheckBox';
import { useState } from 'react'

type DataTask = {
  content: string;
  status: boolean;
}
interface TaskProps {
  data: DataTask,
  deleteTask?: React.MouseEventHandler<HTMLButtonElement>;
  isCheck:any,
  id:string;
}

export function Task({deleteTask,isCheck,id, data }: TaskProps) {

  return (
    <div className='flex items-center relative mt-4 text-start gap-3 p-4 rounded-lg max-w-3xl bg-gray-500 text-gray-100'>

      <Checkbox isCheck={isCheck} id={id} />



      <span className={data.status ? 'text-gray-300 line-through' : ''}>
        {data.content}
      </span>

      <button className='w-6 h-6 flex items-center absolute top-3 right-3 justify-center bg-transparent rounded cursor-pointer hover:bg-gray-400 hover:text-danger-500 '
      onClick={deleteTask}>
        <AiOutlineDelete  />
      </button>
    </div>
  )
}