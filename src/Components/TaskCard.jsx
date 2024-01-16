import React, {useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'

function TaskCard( {myTask} ) {

    const {deleteTask} = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className='text-xl font-bold capitalize'> {myTask.title} </h1>
            <h3 className='text-gray-400 text-sm'> {myTask.descripcion} </h3>
            <button className='bg-red-500 px-2 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(myTask.id)}>Eliminar</button>
        </div>
    )
}

export default TaskCard