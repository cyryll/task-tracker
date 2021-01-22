import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  // const name = 'paul'
  // const x = true
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointments',
            day: 'Feb 5th at 1:20pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting',
            day: 'Feb 6th at 10:20am',
            reminder: true,
        },
        {
            id: 3,
            text: 'Gym',
            day: 'Feb 5th at 5:20pm',
            reminder: false,
        }
    ]
)

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task, reminder: !task.reminder } : task
  ))
}

  return (
    <div className="container">
      <Header />
      {tasks.length >0 ? (
      <Tasks tasks = {tasks} onDelete = {deleteTask} 
      onToggle = {toggleReminder}/>)
    :( 'No Tasks to show' )
    } 
      {/* <h2>Hello {name}</h2>
      <h2>Is x available? {x ? 'Yes' : 'No'} </h2> */}
    </div>
  );
}

export default App;
