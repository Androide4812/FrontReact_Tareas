
import {TaskContext} from '../Context/TaskContext'
import React, {useContext} from 'react';
import TaskCard from './TaskCard'

function TaskList() {

    const {tasks} = useContext(TaskContext);

    if (tasks.length === 0)
        return <h1 className='text-white text-4xl font-bold text-center mt-10'>No hay tareas de momento</h1>

    return (
    <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
            <TaskCard  key={task.id} myTask={task}/>
        ))}
    </div>
    )

}

export default TaskList