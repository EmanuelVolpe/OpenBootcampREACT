import React from 'react'
import { Task } from '../models/Task'
import { LEVELS } from '../models/Levels.enum'
import TaskComponent from '../components/pure/TaskComponent'

const TaskList = () => {

    const defaultTask = new Task('Ejemplo', 'Tarea de Ejemplo', false, LEVELS.NORMAL)
    return (
        <div>
            <h2>Tu tarea:</h2>
            <TaskComponent task={defaultTask} />
        </div>
        /*acá irá la lista de tareas*/

    )
}

export default TaskList