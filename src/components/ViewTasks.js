import React, { useState } from "react"

function ViewTasks(){

const [date,setDate] = useState("")
const [tasks,setTasks] = useState([])

const getTasks = async () => {

const res = await fetch(`http://localhost:5000/tasks/date/${date}`)

const data = await res.json()

setTasks(data)

}

return(

<div className="card">

<h2>View Tasks</h2>

<input
type="date"
onChange={(e)=>setDate(e.target.value)}
/>

<button onClick={getTasks}>
Show Tasks
</button>

<ul>

{tasks.length === 0 ? (

<p className="empty">No tasks for this date</p>

) : (

tasks.map((task,index)=>(

<li key={index} className="task">
<span className="subject">{task.subject}</span>
<span>{task.hoursRequired} hrs</span>
</li>

))

)}

</ul>

</div>

)

}

export default ViewTasks