
import {TaskContext} from '../Context/TaskContext'
import React, {useContext} from 'react';
import TaskCard from './TaskCard'

function TaskList() {

    const {tasks} = useContext(TaskContext);

    if (tasks.length === 0)
        return <h1>No hay tareas de momento</h1>

    return <>
        {tasks.map((task) => (
            <TaskCard  key={task.id} myTask={task}/>
        ))}
    </>
}

export default TaskList