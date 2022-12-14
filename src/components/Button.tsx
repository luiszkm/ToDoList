import { ButtonHTMLAttributes } from 'react'
import {AiOutlinePlusCircle } from 'react-icons/ai'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{

}

export function Button ({...rest}:ButtonProps){
  return(
    <button className='h-12 relative w-24 p-4 flex items-center gap-2 text-sm border-none font-bold rounded-lg text-gray-100 bg-blue-900 
    hover:bg-blue-700 transition' {...rest}>
    Criar
    <AiOutlinePlusCircle size={16} />
  </button>
  )
}