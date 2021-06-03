// use react icons
import { FaTimes } from "react-icons/fa";

const Task = ({task, deleteTask, toggleReminder}) => {
    return (
        <div className={task.reminder ? "task reminder":"task"} onDoubleClick={()=>toggleReminder(task.id)}>
            <h3>{task.task} <FaTimes 
                style={{color:"red", cursor:"pointer"}} 
                onClick={()=>deleteTask(task.id)} 
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
