import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { BsClipboardX } from 'react-icons/bs'
import { useState } from "react";




export function App() {
  const [task, setTask] = useState({ content: '', status: false })
  const [tasks, setTasks] = useState<typeof task[]>([])


  function handleAddTask() {
    if(task.content === ''){
      alert('Por favor crie um nome para sua tarefa')
      return
    }
    const checkTaskExist =tasks.find(taskFind=> taskFind.content === task.content)

    if(checkTaskExist) {
      alert('Tarefa Já cadastrada, tente outro nome')
      return
    }
    setTasks(prevState => [...prevState, task])
  }

  function handleDeleteTask(taskDelete: string) {
    const tasksFiltered = tasks.filter(tasks => {
      return tasks.content !== taskDelete
    })
    setTasks(tasksFiltered)
  }

  function handleFinishedTask(taskFinished: string, status: boolean) {
    if (status === false) {
      const tasksFinished = tasks.filter(tasks => {
        return tasks.content === taskFinished
      }
      )
      tasksFinished.map(item => {
        item.status = true
      })

      setTasks(prevState => [...prevState])


    }
    if (status === true) {
      const tasksUnFinished = tasks.filter(tasks => {
        return tasks.content === taskFinished
      }
      )
      tasksUnFinished.map(item => {
        item.status = false
      })
      setTasks(prevState => [...prevState])

    }
  }

  function CountTaskFinished(){
    const allTasksFinished = tasks.filter(tasks => {
      return tasks.status === true
    })
    return allTasksFinished.length
  }


  return (
    <div className="bg-gray-600 w-full min-h-screen flex flex-col items-center">
      <Header addTask={(e) => setTask({ content: e.target.value, status: false })}
        createTask={handleAddTask}
      />
      <main className="py-24">
        <header className=" w-full max-w-3xl flex items-center justify-between pb-6 border-b-2 border-gray-400">

          <div className="flex items-center gap-3 ">
            <span className="text-blue-700 text-sm">Tarefas criadas</span>
            <span className="w-6 h-5 text-white text-sm rounded-full flex items-center justify-center bg-gray-400 ">{tasks.length}</span>
          </div>

          <div className="flex items-center gap-3 ">
            <span className="text-purple-500 text-sm">Tarefas Concluídas</span>
            <span className=" px-2 h-5 text-white text-sm rounded-full flex items-center justify-center bg-gray-400 ">
              {tasks.length === 0 ? '0' :`${CountTaskFinished()} de ${tasks.length}`}
            </span>
          </div>
        </header>

        {tasks.length <= 0 ?
          <div className="flex flex-col items-center text-gray-300 py-16">
            <BsClipboardX size={64} className='mb-4' />
            <strong >Você ainda não tem tarefas cadastradas </strong>
            <span> Crie tarefas e organize seus itens a fazer</span>
          </div>
          
          :
          tasks.map(task => (
            <Task
              key={task.content}
              id={task.content}
              data={task}
              deleteTask={() => handleDeleteTask(task.content)}
              isCheck={() => handleFinishedTask(task.content, task.status)}
            />
          ))
        }
      </main>
    </div>
  )
}

