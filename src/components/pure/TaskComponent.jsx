import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/Task'

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>Nombre: {task.name}</h2>
            <h3>Descripción: {task.description}</h3>
            <h3>Nivel: {task.level}</h3>
            <h3>Completada: {task.completed ? 'COMPLETED' : 'PENDING'}</h3>
        </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent