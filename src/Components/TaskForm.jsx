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
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Crea Tu Tarea</h1>
        <input
          placeholder='Escribe tu tarea'
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2'
          autoFocus
        />
        <textarea
          placeholder='Escribe la descripcion de la tarea'
          onChange={(e) => setdescripcion(e.target.value)}
          value={descripcion}
          className='bg-slate-300 p-3 w-full mb-2'
        />
        <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400'>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm