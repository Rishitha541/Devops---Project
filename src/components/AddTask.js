import React, { useState } from "react"

function AddTask(){

const [subject,setSubject] = useState("")
const [date,setDate] = useState("")
const [difficulty,setDifficulty] = useState("")
const [hours,setHours] = useState("")

const addTask = async () => {

await fetch("http://localhost:5000/tasks/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
subject,
examDate: date,
difficulty,
hoursRequired: hours
})
})

alert("Task Added")
}

return(

<div className="card">

<h2>Add Study Task</h2>

<input
placeholder="Subject"
onChange={(e)=>setSubject(e.target.value)}
/>

<input
type="date"
onChange={(e)=>setDate(e.target.value)}
/>

<input
placeholder="Difficulty (1-5)"
onChange={(e)=>setDifficulty(e.target.value)}
/>

<input
placeholder="Hours Required"
onChange={(e)=>setHours(e.target.value)}
/>

<button onClick={addTask}>
Add Task
</button>

</div>

)

}

export default AddTask