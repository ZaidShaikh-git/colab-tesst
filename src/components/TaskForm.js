import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, priority });
    setTitle('');
    setPriority('low');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="input-title"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="input-priority"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="button-add">Add Task</button>
    </form>
  );
}

export default TaskForm;
