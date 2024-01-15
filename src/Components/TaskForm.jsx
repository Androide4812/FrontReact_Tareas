import { useState, useContext } from 'react'
import {TaskContext} from '../Context/TaskContext'

function TaskForm() {
  const [title, settitle] = useState("");
  const [descripcion, setdescripcion] = useState("")
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, descripcion);
    settitle("")
    setdescripcion("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Escribe tu tarea'
        onChange={(e) => settitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder='Escribe la descripcion de la tarea'
        onChange={(e) => setdescripcion(e.target.value)}
        value={descripcion}
      />
      <button>Guardar</button>
    </form>
  )
}

export default TaskForm