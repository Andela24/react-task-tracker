import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 8th at 2:30pm',
    reminder: false,
    },
])
// if the task.id is not equal to id => i want to show
//then delete that task
  function deleteTask(id) {
   setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder from true to false or oposite
  function toggleReminder(id) {
    setTasks(tasks.map(task => task.id === id 
    ? {...task, reminder: !task.reminder} : task))
  }
  //we map through and for each we'll all it task => task.id 
  //so if the task.id that were in current iteration is equal to the id that is passed in
  // then we'll have specific object {}the one we're dealing it we want to change,
  // so spread the existing tasks{...} and add/change the reminder=> set to opposite of whatever that specific task is
  // or else(:) will be no change so print just task.

  return (
      <div className="container">
        <Header title="Task Tracker" />
        <AddTask />
        {tasks.length > 0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> )
         :
        'No task to show'
      }
    
      </div>
    );
  }

export default App;
