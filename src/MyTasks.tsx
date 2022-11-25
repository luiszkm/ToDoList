import { useState } from "react"



export function MyTasks(task: {}) {
  const [tasks, setTasks] = useState([task])


  const allTasks = [1,2,3,4,5,6,7,8,9,10]
  return allTasks
}