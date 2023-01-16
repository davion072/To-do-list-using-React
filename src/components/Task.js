import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div className="task">
            <input type="checkbox" onChange={() => onToggle(task.id)} />
            <h3 className={`${!task.check ? 'strike' : 'taskTag'}`}>
                {task.task}
                <FaTimes className='cross' onClick={() => onDelete(task.id)} />
            </h3>
        </div>
    )
}

export default Task