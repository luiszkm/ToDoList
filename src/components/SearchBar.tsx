import { Button } from "./Button";
import { InputHTMLAttributes } from "react";


interface SearchBarProps extends InputHTMLAttributes<HTMLElement> {
  createTask: React.MouseEventHandler<HTMLButtonElement>
}


export function SearchBar({ createTask, ...rest }: SearchBarProps) {

  return (
    <div className="flex items-center gap-2 absolute -bottom-6 ">
      <input className="w-full max-w-[638px] h-14 bg-gray-500 text-md rounded-lg border-gray-700 p-4
       text-white placeholder:text-gray-300 outline-none
        focus:ring-1 ring-purple-900 "
        type="text"
        {...rest}
      />
      <Button onClick={createTask} />
    </div>
  )
}