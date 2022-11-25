import { Button } from "./Button";

export function SearchBar() {

  return (
    <div className="flex items-center gap-2 absolute -bottom-6 ">
      <input className="w-full max-w-[638px] h-14 bg-gray-500 text-md rounded-lg border-gray-700 p-4
       text-white placeholder:text-gray-300 outline-none
        focus:ring-1 ring-purple-900 "
        type="text" />
    <Button/>
    </div>
  )
}