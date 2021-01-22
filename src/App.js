import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  // const name = 'paul'
  // const x = true
  const [showAddTask, setShowAddTask] = useState (false)

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

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

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
      <Header 
      onAdd = {() => setShowAddTask(!showAddTask)}
      showAdd= {showAddTask}
      />


      {/*show add task if shoAddTask state is true */}
      {showAddTask && <AddTask onAdd = {addTask}/>}

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
