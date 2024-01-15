import { createContext, useEffect, useState } from 'react'
import { Task as data } from '../Data/Task'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, settasks] = useState([])

    function createTask(tasktitle, taskdescription) {

        const task = {
            id: tasks.length,
            title: tasktitle,
            descripcion: taskdescription
        }

        settasks([...tasks, task])
    }

    function deleteTask(taskId) {
        settasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        settasks(data);
    }, [])

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}