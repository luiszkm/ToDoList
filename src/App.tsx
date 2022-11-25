import { Header } from "./components/Header";
import { Task } from "./components/Task";
import {BsClipboardX} from 'react-icons/bs'
import { useState } from "react";

import { MyTasks } from "./MyTasks";



export function App() {
  const [task, setTask] = useState({content: '', status: false})
console.log(task);

  function handleAddTask(){
    alert('buceta')
  }
  
  return (
    <div className="bg-gray-600 w-full min-h-screen flex flex-col items-center">
      <Header addTask={(e)=> setTask({content:e.target.value, status:false})}
      createTask={handleAddTask}
      />
      <main className="py-24">
        <header className=" w-full max-w-3xl flex items-center justify-between pb-6 border-b-2 border-gray-400">

          <div className="flex items-center gap-3 ">
            <span className="text-blue-700 text-sm">Tarefas criadas</span>
            <span className="w-6 h-5 text-white text-sm rounded-full flex items-center justify-center bg-gray-400 ">0</span>
          </div>

          <div className="flex items-center gap-3 ">
            <span className="text-purple-500 text-sm">Tarefas criadas</span>
            <span className="w-6 h-5 text-white text-sm rounded-full flex items-center justify-center bg-gray-400 ">0</span>
          </div>
        </header>
     
        <div className="flex flex-col items-center text-gray-300 py-16">
          <BsClipboardX size={64} className='mb-4'/>
          <strong >Você ainda não tem tarefas cadastradas </strong>
          <span> Crie tarefas e organize seus itens a fazer</span>
        </div>

        <Task />
      </main>
    </div>
  )
}

