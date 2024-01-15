import React, {useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'

function TaskCard( {myTask} ) {

    const {deleteTask} = useContext(TaskContext);

    return (
        <div>
            <h1> {myTask.title} </h1>
            <h3> {myTask.descripcion} </h3>
            <button onClick={() => deleteTask(myTask.id)}>Eliminar</button>
        </div>
    )
}

export default TaskCard