
import { useState } from 'react'
import './App.css'

function App() {

  let [tasks, setTasks] = useState([])
  let [text, setText] = useState('')
  let [isUpdate, setIsUpdate] = useState(false)
  let [index, setIndex] = useState(null)

  let handleAddTodo = () => {
    setTasks([...tasks, text])
    setText('')
  }

  let handleInputChange = (e) => {
    setText(e.target.value)
  }

  let handleDelete = (index) => {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
    console.log(newTasks, tasks)
  }

  let handleEdit = (item, index) => {
    setIsUpdate(true)
    setText(item)
    setIndex(index)
  }

  let handleUpdate = () => {
    let newTasks = [...tasks]
    newTasks[index] = text
    setTasks(newTasks)
    setText('')
    setIsUpdate(false)
  }

  return (
    <>
      <div className="todo-container">
        <h2>To-Do List</h2>
        <input value={text} onChange={handleInputChange} type="text" id="taskInput" placeholder="Add a new task..." />
        {isUpdate ?
          <button className="add" onClick={handleUpdate}>Update</button>
          :
          <button className="add" onClick={handleAddTodo}>Add Task</button>
        }

        <ul className="taskList">
          {tasks.map((item, index) => (
            <li>{index + 1}.   {item}<button className="delete" onClick={() => handleEdit(item, index)}>Edit</button><button className="delete" onClick={() => handleDelete(index)}>Delete</button></li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App


