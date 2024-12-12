import React from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

function TaskItem({ task, updateTask, deleteTask }) {
  const toggleStatus = () => {
    updateTask(task.id, { status: task.status === 'pending' ? 'complete' : 'pending' });
  };

  return (
    <div className={`task-item ${task.status}`}> {/* Conditional class */}
      <span className="task-title">{task.title}</span>
      <span className="task-priority">{task.priority}</span>
      <div className="task-actions">
        <button onClick={toggleStatus} className="button-status">
          <FaCheck />
        </button>
        <button onClick={() => deleteTask(task.id)} className="button-delete">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
