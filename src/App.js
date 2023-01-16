import { useState } from 'react';

import Header from './components/Header'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import NoTask from './components/NoTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  //Add task
  const addTask = (task) => {
    const newTask = { id, task, check: true }
    const newId = id + 1
    setId(newId);
    setTasks([...tasks, newTask]);
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  //Check Task Status
  const checkTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, check: !task.check } : task))
    tasks.forEach(task => console.log(task.check))
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={checkTaskStatus} /> : <NoTask />}
    </div>
  );
}

export default App;
