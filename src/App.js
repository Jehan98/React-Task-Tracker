import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState, useEffect} from "react";
import AddTask from "./components/AddTask";

function App() {

  const [viewAddTask, setViewAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async ()=>{
      const tasksFromServer= await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  },[])

  // fetch tasks from backend
  const fetchTasks = async ()=>{
    const data = await fetch("http://localhost:5000/tasks").then((response)=>response.json())
    
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method:"DELETE"})
    setTasks(tasks.filter(
      (task)=> task.id!==id 
    ))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task)=>(task.id === id) ? {...task, reminder: !task.reminder }: task
    ))
  }

  const taskSubmit = async (e,task, date, reminder) => {

    e.preventDefault()

    const taskData = {task:task, day:date, reminder:reminder}

    const res = await fetch(`http://localhost:5000/tasks`, {
      method:"POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(taskData)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // commenting out adding tasks directly to the state since now on tasks are comming from the server
    // e.preventDefault()
    // setTasks([...tasks, {id: tasks.length+1, task:task, day:date, reminder:reminder}])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" addTask={()=>(setViewAddTask(!viewAddTask))} viewAddTask={viewAddTask} />
      {viewAddTask ? <AddTask taskSubmit={taskSubmit} /> : "" }
      {(tasks.length >= 1) ? 
      <Tasks tasks={tasks} 
              setTasks={setTasks} 
              deleteTask={deleteTask} 
              toggleReminder={toggleReminder} 
        /> : 
        <p style={{color:"green", textAlign:"center"}}>Tasks Unavailable</p>}
    </div>
  );
}

export default App;
