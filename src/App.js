import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([])

  //fetch data from db.json local
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [])
    

//submit task
function addTask (task) {
// console.log(task)
const id= Math.floor(Math.random() * 10000) + 1 //using math.floor which will round down, then math.random itmes 10k just to get any random num back
//we're using id since we're not dealing with backend
const newTask = {id, ...task} //creating a new object with that id and copy the existing task
setTasks([...tasks, newTask]) //displaying tasks that are already there plus the new ones
}



// if the task.id is not equal to id => i want to show
//then delete that task
  function deleteTask(id) {
    fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE"
    })

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
        <Header title={'Task Tracker'} onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
        />
        {showAddTask ?
        <AddTask onAdd={addTask}/> :
        null }

        {tasks.length > 0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> )
         :
        'No task to show'
      }
    
      </div>
    );
  }

export default App;
