

import logo from '../assets/logo.svg'
import { SearchBar } from './SearchBar'
export function Header() {


  return (
    <header className='bg-gray-700 flex flex-col items-center justify-center relative h-48 w-full'>
        <img src={logo} alt="" />
        <SearchBar/>
    </header>
  )
}