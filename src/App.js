import React from "react";
import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th AT 2:30pm",
      "reminder": false
    },
    {
      "id": 2,
      "text": "Meeting at school",
      "day": "Feb 6th AT 11:30pm",
      "reminder": false
    },
    {
      "text": "Take Test",
      "day": "Friday",
      "reminder": true,
      "id": 3
    }
  ]
)

// Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}
 
  return (
      <div className='container'>
       <Header />
       <Tasks tasks={tasks} 
       onDelete={deleteTask} />
      </div>
  )
}

export default App