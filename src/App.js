import React from "react";
import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

// Toggle Reminder
const toggleReminder = (id) => {
 setTasks(
   tasks.map((task) => task.id === id ?
    { ...task, reminder: !task.reminder} : task))
}
 
  return (
      <div className='container'>
       <Header />
       <AddTask />
       {tasks.length > 0 ? 
       (<Tasks tasks={tasks} 
       onDelete={deleteTask} onToggle={toggleReminder} />): 
       ('No Reminder To Show')}
      </div>
  )
}

export default App