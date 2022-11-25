

import logo from '../assets/logo.svg'
import { SearchBar } from './SearchBar'

interface HeaderProps {
  addTask?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  createTask: React.MouseEventHandler<HTMLButtonElement>
}
export function Header({ addTask,createTask }: HeaderProps) {


  return (
    <header className='bg-gray-700 flex flex-col items-center justify-center relative h-48 w-full'>
      <img src={logo} alt="" />
      <SearchBar onChange={addTask} 
      createTask={createTask}  />
    </header>
  )
}