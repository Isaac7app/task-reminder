import React from 'react';
import { useState } from 'react';

const Tasks  = () => {
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
  return (
    <>
    {tasks.map((task) => (
    <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}

export default Tasks;