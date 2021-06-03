import { useState } from "react";

const AddTask = ({taskSubmit}) => {

    const [task, setTask] = useState("")
    const [date, setDate] = useState("")
    const [reminder, setReminder] = useState(false)

    return (
        <form className="add-form" onSubmit={(e)=>taskSubmit(e,task, date, reminder)}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={task} onChange={(e)=> setTask(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Date & Time" value={date} onChange={(e)=> setDate(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e)=> setReminder(e.target.checked)} />
            </div>

            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
