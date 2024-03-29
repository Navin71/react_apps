import { FaTimes } from 'react-icons/fa'
import { BiAlarm } from 'react-icons/bi'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}{task.reminder?<BiAlarm/>:""}
        <FaTimes
          style={{ color: 'grey', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
